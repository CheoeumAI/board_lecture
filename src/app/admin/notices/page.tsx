import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AdminDeleteButton } from "@/frontend/components/AdminDeleteButton";
import { authOptions } from "@/backend/lib/auth";
import { categoryLabels, statusLabels } from "@/backend/lib/constants";
import { prisma } from "@/backend/lib/prisma";
import { formatDate } from "@/backend/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminNoticesPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login?callbackUrl=/admin/notices");

  const notices = await prisma.notice.findMany({
    where: { status: { not: "HIDDEN" } },
    orderBy: [{ updatedAt: "desc" }],
    include: { attachments: true }
  });

  return (
    <main className="container">
      <section className="page-header">
        <span className="eyebrow">Admin</span>
        <h1 className="page-title">공지 관리</h1>
        <p className="page-description">공지사항을 작성하고 임시저장, 게시, 숨김 상태를 관리합니다.</p>
      </section>
      <div className="admin-toolbar">
        <span>총 {notices.length.toLocaleString("ko-KR")}건</span>
        <Link className="button primary" href="/admin/notices/new">
          <span className="m3-icon" aria-hidden="true">
            add
          </span>
          새 공지
        </Link>
      </div>
      <div className="table-wrap card">
        <table className="notice-table">
          <thead>
            <tr>
              <th>제목</th>
              <th style={{ width: 150 }}>분류</th>
              <th style={{ width: 120 }}>상태</th>
              <th style={{ width: 140 }}>게시일</th>
              <th style={{ width: 110 }}>첨부</th>
              <th style={{ width: 150 }}>관리</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>
                  <Link className="notice-title-link" href={`/admin/notices/${notice.id}/edit`}>
                    {notice.isPinned ? <span className="status-badge">공지</span> : null}
                    {notice.title}
                  </Link>
                </td>
                <td>{categoryLabels[notice.category]}</td>
                <td>
                  <span className="chip">{statusLabels[notice.status]}</span>
                </td>
                <td>{formatDate(notice.publishedAt)}</td>
                <td>{notice.attachments.length}개</td>
                <td>
                  <div className="inline-actions">
                    <Link className="button text" href={`/admin/notices/${notice.id}/edit`}>
                      수정
                    </Link>
                    <AdminDeleteButton id={notice.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
