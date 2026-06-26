# Agent Instructions

이 저장소에서 작업하는 에이전트는 `docs/guide.md`와 `Material 3 Design System`을 기준으로 작업한다.

## 우선순위

1. 사용자의 최신 요청을 최우선으로 따른다.
2. 프로젝트 작업 규칙은 `docs/guide.md`를 따른다.
3. UI, 화면, 컴포넌트, 시각 디자인 작업은 `Material 3 Design System`을 기준으로 구현한다.
4. 기존 코드 스타일과 구조를 유지한다.

## 구조 규칙

- 화면 컴포넌트와 스타일은 `src/frontend`에 둔다.
- 인증, DB, 스토리지, 검증, 도메인 로직은 `src/backend`에 둔다.
- Next.js 라우팅 파일은 `src/app`에 둔다.
- Prisma schema와 seed는 `backend/prisma`에 둔다.
- 작업 가이드 문서는 `docs`에 둔다.

## 완료 기준

- `docs/guide.md`의 구조 규칙을 위반하지 않았는지 확인한다.
- 가능한 검증 명령을 실행한다.
- 실행하지 못한 검증은 이유를 남긴다.
