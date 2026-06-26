import Link from "next/link";
import { notFound } from "next/navigation";
import { AttachmentLinks } from "@/frontend/components/NoticeList";
import { SharePrintButtons } from "@/frontend/components/SharePrintButtons";
import { categoryLabels } from "@/backend/lib/constants";
import { getAdjacentNotices } from "@/backend/lib/notices";
import { prisma } from "@/backend/lib/prisma";
import { formatDate } from "@/backend/lib/utils";

export const dynamic = "force-dynamic";

export default async function NoticeDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) notFound();

  const notice = await prisma.notice
    .update({
      where: { id },
      data: { views: { increment: 1 } },
      include: { attachments: true }
    })
    .catch(() => null);

  if (!notice || notice.status !== "PUBLISHED" || !notice.publishedAt || notice.publishedAt > new Date()) {
    notFound();
  }

  const adjacent = await getAdjacentNotices(notice.id, notice.publishedAt);

  return (
    <main className="container">
      <article className="detail-card card">
        <div className="detail-title-row">
          <span className="chip">{categoryLabels[notice.category]}</span>
          <h1 className="page-title">{notice.title}</h1>
        </div>
        <div className="detail-meta">
          <span>번호 {notice.id}</span>
          <span>작성일 {formatDate(notice.publishedAt)}</span>
          <span>조회수 {notice.views.toLocaleString("ko-KR")}</span>
        </div>
        <AttachmentLinks attachments={notice.attachments} />
        <div className="content-body">{notice.content}</div>
        <div className="adjacent-list">
          <div className="adjacent-row">
            <strong>이전글</strong>
            {adjacent.previous ? (
              <Link href={`/notices/${adjacent.previous.id}`}>{adjacent.previous.title}</Link>
            ) : (
              <span>이전글이 없습니다.</span>
            )}
          </div>
          <div className="adjacent-row">
            <strong>다음글</strong>
            {adjacent.next ? <Link href={`/notices/${adjacent.next.id}`}>{adjacent.next.title}</Link> : <span>다음글이 없습니다.</span>}
          </div>
        </div>
        <div className="admin-toolbar" style={{ marginTop: "var(--md-sys-spacing-6)" }}>
          <Link className="button tonal" href="/notices">
            목록
          </Link>
          <SharePrintButtons />
        </div>
      </article>
    </main>
  );
}
