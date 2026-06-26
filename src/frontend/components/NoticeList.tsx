import Link from "next/link";
import type { Attachment, Notice } from "@prisma/client";
import { categories, categoryLabels, PAGE_SIZE, PAGE_WINDOW, searchFields } from "@/backend/lib/constants";
import { fileSizeLabel, formatDate, isNewNotice } from "@/backend/lib/utils";

type NoticeWithAttachments = Notice & { attachments: Attachment[] };

function makeUrl(params: Record<string, string | number | undefined>) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "" && value !== "ALL") search.set(key, String(value));
  }
  const query = search.toString();
  return query ? `/notices?${query}` : "/notices";
}

export function NoticeList({
  notices,
  total,
  page,
  totalPages,
  category,
  searchField,
  keyword
}: {
  notices: NoticeWithAttachments[];
  total: number;
  page: number;
  totalPages: number;
  category: string;
  searchField: string;
  keyword: string;
}) {
  const pageWindowStart = Math.floor((page - 1) / PAGE_WINDOW) * PAGE_WINDOW + 1;
  const pageWindowEnd = Math.min(totalPages, pageWindowStart + PAGE_WINDOW - 1);

  return (
    <>
      <nav className="tabs" aria-label="공지 분류">
        {categories.map((item) => (
          <Link
            key={item.value}
            className={`tab ${category === item.value ? "active" : ""}`}
            href={makeUrl({ category: item.value, searchField, keyword, page: 1 })}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <form className="search-panel card" action="/notices">
        <input type="hidden" name="category" value={category} />
        <select className="select" name="searchField" aria-label="검색 조건" defaultValue={searchField}>
          {searchFields.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <input className="field" name="keyword" defaultValue={keyword} placeholder="검색어를 입력하세요" />
        <button className="button primary" type="submit">
          <span className="m3-icon" aria-hidden="true">
            search
          </span>
          검색
        </button>
      </form>

      <div className="notice-summary">
        <span>총 {total.toLocaleString("ko-KR")}건</span>
        <span>
          {page} / {totalPages} 페이지
        </span>
      </div>

      <div className="table-wrap public card">
        <table className="notice-table">
          <thead>
            <tr>
              <th style={{ width: 90 }}>번호</th>
              <th style={{ width: 150 }}>분류</th>
              <th>제목</th>
              <th style={{ width: 80 }}>첨부</th>
              <th style={{ width: 140 }}>작성일</th>
              <th style={{ width: 90 }}>조회수</th>
            </tr>
          </thead>
          <tbody>
            {notices.length === 0 ? (
              <tr>
                <td colSpan={6}>등록된 공지사항이 없습니다.</td>
              </tr>
            ) : (
              notices.map((notice, index) => (
                <tr key={notice.id}>
                  <td>{notice.isPinned ? "공지" : total - (page - 1) * PAGE_SIZE - index}</td>
                  <td>
                    <span className="chip">{categoryLabels[notice.category]}</span>
                  </td>
                  <td>
                    <Link className="notice-title-link" href={`/notices/${notice.id}`}>
                      {notice.title}
                      {isNewNotice(notice.publishedAt) ? <span className="new-badge">NEW</span> : null}
                    </Link>
                  </td>
                  <td>
                    {notice.attachments.length > 0 ? (
                      <span className="m3-icon" title={`${notice.attachments.length}개 첨부파일`}>
                        attach_file
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{formatDate(notice.publishedAt)}</td>
                  <td>{notice.views.toLocaleString("ko-KR")}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mobile-list">
        {notices.map((notice) => (
          <article className="notice-card card" key={notice.id}>
            <div className="inline-actions">
              <span className="chip">{categoryLabels[notice.category]}</span>
              {notice.isPinned ? <span className="status-badge">공지</span> : null}
              {isNewNotice(notice.publishedAt) ? <span className="new-badge">NEW</span> : null}
            </div>
            <Link className="notice-title-link" href={`/notices/${notice.id}`}>
              {notice.title}
            </Link>
            <div className="notice-summary">
              <span>{formatDate(notice.publishedAt)}</span>
              <span>조회 {notice.views.toLocaleString("ko-KR")}</span>
            </div>
            {notice.attachments.length > 0 ? (
              <span>
                <span className="m3-icon" aria-hidden="true">
                  attach_file
                </span>{" "}
                {notice.attachments.length}개 첨부
              </span>
            ) : null}
          </article>
        ))}
      </div>

      <nav className="pagination" aria-label="페이지">
        {pageWindowStart > 1 ? (
          <Link className="page-link" href={makeUrl({ category, searchField, keyword, page: pageWindowStart - 1 })}>
            이전
          </Link>
        ) : null}
        {Array.from({ length: pageWindowEnd - pageWindowStart + 1 }, (_, index) => pageWindowStart + index).map(
          (pageNumber) => (
            <Link
              key={pageNumber}
              className={`page-link ${pageNumber === page ? "active" : ""}`}
              href={makeUrl({ category, searchField, keyword, page: pageNumber })}
            >
              {pageNumber}
            </Link>
          )
        )}
        {pageWindowEnd < totalPages ? (
          <Link className="page-link" href={makeUrl({ category, searchField, keyword, page: pageWindowEnd + 1 })}>
            다음
          </Link>
        ) : null}
      </nav>
    </>
  );
}

export function AttachmentLinks({
  attachments
}: {
  attachments: Array<{ id: number; fileName: string; size: number; downloadCount: number }>;
}) {
  if (attachments.length === 0) return null;

  return (
    <div className="attachment-list" aria-label="첨부파일">
      {attachments.map((attachment) => (
        <a className="notice-title-link" key={attachment.id} href={`/api/files/${attachment.id}`}>
          <span className="m3-icon" aria-hidden="true">
            attach_file
          </span>
          {attachment.fileName}
          <span>
            {fileSizeLabel(attachment.size)} · {attachment.downloadCount.toLocaleString("ko-KR")}회
          </span>
        </a>
      ))}
    </div>
  );
}
