Frontend
- Next.js
- TypeScript
- Tailwind CSS

Backend
- Supabase
- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage

Infrastructure
- Vercel
- Supabase

Code Management
- GitHub

배포
- Vercel Git Integration

선택 확장
- FastAPI
- Docker
- GitHub Actions
- Supabase CLI


아키텍처

사용자
  ↓
Next.js + TypeScript
  ↓
Supabase
  ├─ Auth
  ├─ PostgreSQL
  └─ Storage


데이터 저장:
Next.js
  ↓
Supabase PostgreSQL


로그인:
Next.js
  ↓
Supabase Auth


파일 저장:
Next.js
  ↓
Supabase Storage


배포 자동화:
GitHub
  ↓
Vercel
  ↓
웹 서비스 배포


환경변수 관리:
Next.js
  ↓
Vercel Environment Variables
  ↓
Supabase URL / Supabase Anon Key


폴더 구조

Project/                              # 프로젝트 루트 폴더. 프론트엔드, 백엔드 설정, 문서, 배포 설정을 모두 포함
  docs/                               # 기획서, API 흐름, DB 설계, AI 동작 방식 등 프로젝트 문서 보관
    PRD.md                            # Product Requirements Document. 서비스 목적, 핵심 기능, 사용자 시나리오 정의
    API_SPEC.md                       # 프론트엔드와 Supabase가 주고받는 데이터 요청/응답 흐름 정리
    AI_SPEC.md                        # AI 기능을 사용할 경우 프롬프트, 모델, 응답 방식, 제한사항 정리
    DB_SCHEMA.md                      # Supabase Database 테이블, 컬럼, 관계 구조 정리
    DEPLOYMENT.md                     # Vercel 배포 방법, Supabase 연결 방법, 환경변수 설정 방법 정리

  frontend/                           # Next.js + TypeScript 기반 프론트엔드 애플리케이션
    src/                              # 프론트엔드 소스 코드 루트
      app/                            # Next.js App Router 폴더. 페이지, 레이아웃, 라우팅 관리
        layout.tsx                    # 전체 페이지에 공통으로 적용되는 기본 레이아웃
        page.tsx                      # 메인 페이지
        login/                        # 로그인 페이지 폴더
          page.tsx                    # 로그인 화면
        dashboard/                    # 로그인 후 접근하는 대시보드 페이지 폴더
          page.tsx                    # 대시보드 화면

      components/                     # 여러 화면에서 재사용되는 공통 UI 컴포넌트
        Button.tsx                    # 공통 버튼 컴포넌트
        Card.tsx                      # 카드형 UI 컴포넌트
        Input.tsx                     # 입력창 컴포넌트
        Header.tsx                    # 상단 헤더 컴포넌트
        FileUpload.tsx                # 파일 업로드 컴포넌트

      features/                       # 기능 단위 코드 모음. 예: auth, posts, files, dashboard 등
        auth/                         # 회원가입, 로그인, 로그아웃 관련 기능
          LoginForm.tsx               # 로그인 입력 폼
          SignupForm.tsx              # 회원가입 입력 폼
          auth.service.ts             # Supabase Auth 관련 함수 모음

        posts/                        # 게시글, 문서, 기록 등 데이터 저장 기능
          PostForm.tsx                # 데이터 입력 폼
          PostList.tsx                # 저장된 데이터 목록 표시
          post.service.ts             # Supabase Database 저장, 조회, 수정, 삭제 함수 모음

        files/                        # 파일 업로드 및 파일 목록 관리 기능
          FileUploadForm.tsx          # 파일 업로드 입력 폼
          FileList.tsx                # 업로드된 파일 목록 표시
          file.service.ts             # Supabase Storage 업로드, 다운로드, 삭제 함수 모음

        dashboard/                    # 로그인 후 보여줄 주요 화면 기능
          DashboardCard.tsx           # 대시보드 카드 컴포넌트
          dashboard.service.ts        # 대시보드에 필요한 데이터 조회 함수 모음

      lib/                            # Supabase 연결 코드, 공통 함수, 설정값 등 공통 로직
        supabase.ts                   # Supabase Client 생성 및 연결 설정
        utils.ts                      # 날짜 변환, 문자열 처리 등 공통 유틸 함수
        constants.ts                  # 서비스에서 반복해서 사용하는 고정값 관리

      types/                          # TypeScript 타입 정의
        user.ts                       # 사용자 타입 정의
        post.ts                       # 게시글, 문서, 기록 데이터 타입 정의
        file.ts                       # 업로드 파일 타입 정의
        database.ts                   # Supabase 테이블 타입 정의

      styles/                         # 전역 스타일 또는 Tailwind 관련 스타일 관리
        globals.css                   # 전체 프로젝트에 적용되는 기본 CSS

    public/                           # 프론트엔드에서 사용하는 이미지, 아이콘, 로고 등 정적 파일 보관
      images/                         # 서비스에서 사용하는 이미지 파일 보관
      icons/                          # 아이콘 파일 보관

    .env.local                        # 프론트엔드 로컬 개발용 환경변수 파일. 실제 Supabase URL과 Key 입력
    .env.example                      # 필요한 환경변수 이름만 정리한 예시 파일
    next.config.ts                    # Next.js 설정 파일
    package.json                      # 프론트엔드 실행 명령어와 설치 패키지 정보
    tsconfig.json                     # TypeScript 설정 파일
    tailwind.config.ts                # Tailwind CSS 설정 파일

  backend/                            # Supabase 기반 백엔드 설정 폴더. 별도 서버가 아니라 DB, 인증, 파일 저장 정책을 관리
    supabase/                         # Supabase 프로젝트 설정 및 데이터베이스 관리 폴더
      schema.sql                      # 실습용 테이블 생성 SQL 정리
      seed.sql                        # 실습용 샘플 데이터 입력 SQL
      policies.sql                    # Supabase RLS 정책을 정리하는 SQL 파일. 초보자 강의에서는 선택적으로 사용
      storage.sql                     # Supabase Storage 버킷과 파일 접근 정책 정리

    db/                               # 데이터베이스 설계 관련 파일 보관
      tables.md                       # 테이블 목록과 역할 정리
      relationships.md                # 테이블 간 관계 정리
      sample-data.md                  # 실습용 예시 데이터 정리

    auth/                             # Supabase Auth 설정 정리
      auth-flow.md                    # 회원가입, 로그인, 로그아웃 흐름 정리
      auth-settings.md                # 이메일 로그인, 소셜 로그인 등 인증 설정 정리

    storage/                          # Supabase Storage 설정 정리
      buckets.md                      # 사용할 Storage 버킷 목록 정리
      upload-rules.md                 # 업로드 가능한 파일 형식, 용량, 접근 권한 정리

  .gitignore                          # GitHub에 올리지 않을 파일과 폴더 설정
  README.md                           # 프로젝트 소개, 설치 방법, 실행 방법, 배포 방법 정리


초보자 강의에서 제외할 항목

FastAPI                                # 복잡한 백엔드 로직이나 AI 서버가 필요할 때 추가
Docker                                 # 개발 환경 통일이나 컨테이너 배포가 필요할 때 추가
GitHub Actions                         # 테스트, 빌드, 배포 자동화를 세밀하게 관리할 때 추가
SQLAlchemy                             # FastAPI 백엔드에서 ORM이 필요할 때 사용
Alembic                                # FastAPI 백엔드에서 DB 변경 이력을 관리할 때 사용
Supabase CLI                           # Supabase Migration을 코드로 관리할 때 사용
