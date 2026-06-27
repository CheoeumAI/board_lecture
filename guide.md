Frontend
- Next.js
- TypeScript
- Material 3 Design System

Backend
- Next.js API Routes
- Prisma
- PostgreSQL
- NextAuth credentials auth
- S3-compatible storage

Infrastructure
- GitHub
- PostgreSQL runtime
- S3-compatible object storage

Code Management
- GitHub


Architecture

User
  ↓
Next.js + TypeScript
  ↓
Next.js server modules
  ├─ NextAuth
  ├─ Prisma + PostgreSQL
  └─ S3-compatible storage


Data storage:
Next.js
  ↓
Prisma
  ↓
PostgreSQL


Login:
Next.js
  ↓
NextAuth credentials provider
  ↓
AdminUser password hash


File storage:
Next.js
  ↓
S3-compatible storage client


Environment variable management:
- Keep real values in local or deployment environment settings only.
- Do not commit `.env`, `.env.local`, deployment env files, provider project metadata, API keys, secrets, or database credentials.
- Keep `.env.example` limited to placeholder values.


Project structure

Project/
  docs/
    agent.md
    guide.md

  backend/
    prisma/
      schema.prisma
      seed.ts
      migrations/

  src/
    app/
      page.tsx
      layout.tsx
      notices/
      admin/
      api/

    frontend/
      components/
      styles/

    backend/
      lib/
      types/

  test/

  Material 3 Design System/

  .env.example
  .gitignore
  README.md
  package.json
  next.config.mjs
  tsconfig.json


Beginner course exclusions

- External provider project IDs
- Deployment platform metadata
- Real API keys and secrets
- Production database URLs
- Production object-storage credentials
