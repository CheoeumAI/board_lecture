import { LoginForm } from "@/frontend/components/LoginForm";

export default function AdminLoginPage({ searchParams }: { searchParams: { callbackUrl?: string } }) {
  return (
    <main className="container">
      <section className="page-header">
        <span className="eyebrow">Admin</span>
        <h1 className="page-title">관리자 로그인</h1>
        <p className="page-description">공지사항을 작성하고 게시 상태를 관리하려면 로그인하세요.</p>
      </section>
      <LoginForm callbackUrl={searchParams.callbackUrl ?? "/admin/notices"} />
    </main>
  );
}
