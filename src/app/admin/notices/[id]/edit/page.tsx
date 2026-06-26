import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import { AdminNoticeForm } from "@/frontend/components/AdminNoticeForm";
import { authOptions } from "@/backend/lib/auth";
import { prisma } from "@/backend/lib/prisma";

export const dynamic = "force-dynamic";

export default async function EditNoticePage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect(`/admin/login?callbackUrl=/admin/notices/${params.id}/edit`);

  const id = Number(params.id);
  if (!Number.isInteger(id)) notFound();

  const notice = await prisma.notice.findUnique({
    where: { id },
    include: { attachments: true }
  });

  if (!notice || notice.status === "HIDDEN") notFound();

  return (
    <main className="container">
      <section className="page-header">
        <span className="eyebrow">Admin</span>
        <h1 className="page-title">공지 수정</h1>
      </section>
      <AdminNoticeForm notice={notice} />
    </main>
  );
}
