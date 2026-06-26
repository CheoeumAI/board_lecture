import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AdminNoticeForm } from "@/frontend/components/AdminNoticeForm";
import { authOptions } from "@/backend/lib/auth";

export default async function NewNoticePage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login?callbackUrl=/admin/notices/new");

  return (
    <main className="container">
      <section className="page-header">
        <span className="eyebrow">Admin</span>
        <h1 className="page-title">새 공지 작성</h1>
      </section>
      <AdminNoticeForm />
    </main>
  );
}
