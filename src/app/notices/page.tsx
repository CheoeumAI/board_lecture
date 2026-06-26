import { NoticeList } from "@/frontend/components/NoticeList";
import { getPublicNotices } from "@/backend/lib/notices";

export const dynamic = "force-dynamic";

export default async function NoticesPage({
  searchParams
}: {
  searchParams: { category?: string; searchField?: string; keyword?: string; page?: string };
}) {
  const category = searchParams.category ?? "ALL";
  const searchField = searchParams.searchField ?? "ALL";
  const keyword = searchParams.keyword ?? "";
  const result = await getPublicNotices({
    category,
    searchField,
    keyword,
    page: searchParams.page
  });

  return (
    <main className="container">
      <section className="page-header">
        <span className="eyebrow">Notice Board</span>
        <h1 className="page-title">공지사항</h1>
        <p className="page-description">기관 소식, 입찰 안내, 수의계약내역을 한 곳에서 확인할 수 있습니다.</p>
      </section>
      <NoticeList
        notices={result.notices}
        total={result.total}
        page={result.page}
        totalPages={result.totalPages}
        category={category}
        searchField={searchField}
        keyword={keyword}
      />
    </main>
  );
}
