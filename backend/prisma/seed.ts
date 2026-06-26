import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@example.com";
  const password = process.env.ADMIN_PASSWORD ?? "ChangeMe123!";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.adminUser.upsert({
    where: { email },
    update: { passwordHash },
    create: { email, passwordHash }
  });

  const publishedAt = new Date();
  const samples = [
    {
      category: "NOTICE" as const,
      title: "공지사항 게시판 운영을 시작합니다",
      content:
        "국립생태원형 공지사항 게시판 서비스의 초기 운영을 시작합니다.\n\n관리자는 공지를 등록하고, 사용자는 목록과 상세 화면에서 최신 안내를 확인할 수 있습니다.",
      isPinned: true
    },
    {
      category: "BID" as const,
      title: "입찰 안내 게시글 예시",
      content:
        "입찰 관련 공지사항을 등록하는 예시 게시글입니다. 실제 운영 전 관리자 화면에서 내용을 교체해 주세요.",
      isPinned: false
    },
    {
      category: "PRIVATE_CONTRACT" as const,
      title: "수의계약내역 안내 예시",
      content:
        "수의계약내역 분류를 확인하기 위한 예시 게시글입니다. 원본 NIE 데이터는 이관하지 않습니다.",
      isPinned: false
    }
  ];

  for (const sample of samples) {
    await prisma.notice.upsert({
      where: { id: samples.indexOf(sample) + 1 },
      update: {},
      create: {
        ...sample,
        publishedAt,
        status: "PUBLISHED"
      }
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
