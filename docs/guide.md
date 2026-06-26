# 작업 가이드

이 프로젝트는 공공기관형 공지사항 게시판을 Next.js로 구현한다. 구조는 frontend와 backend 책임을 분리하되, Next.js App Router 제약 때문에 `src/app`은 라우팅 진입점으로 유지한다.

## 폴더 구조

- `src/app`: Next.js route, page, layout, API route 진입점
- `src/frontend`: 화면 컴포넌트와 전역 스타일
- `src/backend`: 인증, DB, 스토리지, 검증, 공지 도메인 로직과 타입
- `backend/prisma`: Prisma schema와 seed
- `docs`: 작업 가이드와 에이전트 지침
- `test`: 단위 테스트
- `Material 3 Design System`: 디자인 시스템 원본 자산

## 구현 규칙

- 화면 코드는 `src/frontend`에 둔다.
- 서버 로직, DB 접근, 인증, 파일 스토리지, 검증 로직은 `src/backend`에 둔다.
- `src/app` 파일은 가능한 한 얇게 유지하고, frontend/backend 모듈을 조합하는 역할만 맡긴다.
- 새 import는 `@/frontend/...` 또는 `@/backend/...` 형태를 사용한다.
- Prisma CLI는 `backend/prisma/schema.prisma`를 기준으로 실행한다.

## 디자인 규칙

- UI는 `Material 3 Design System`을 기준으로 한다.
- 전역 CSS는 `src/frontend/styles/globals.css`에서 디자인 시스템 CSS를 import한다.
- 색상, 간격, radius, elevation, motion은 Material 3 token을 우선 사용한다.
- UI 아이콘은 Material Symbols를 사용한다.

## 검증 규칙

변경 후 가능한 경우 다음 명령을 실행한다.

```bash
npm run typecheck
npm test
npm run lint
npm run build
```
