import type { Metadata } from "next";
import Link from "next/link";
import "../frontend/styles/globals.css";

export const metadata: Metadata = {
  title: "공지사항 게시판",
  description: "Material 3 기반 공공기관형 공지사항 게시판"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="app-shell">
          <header className="top-bar">
            <Link className="brand" href="/notices">
              <span className="brand-mark">
                <span className="m3-icon" aria-hidden="true">
                  campaign
                </span>
              </span>
              <span>생태 공지 서비스</span>
            </Link>
            <nav className="nav-actions" aria-label="주요 메뉴">
              <Link className="button text" href="/notices">
                공지사항
              </Link>
              <Link className="button tonal" href="/admin/notices">
                관리자
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
