import { NextResponse } from "next/server";
import { prisma } from "@/backend/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ message: "잘못된 공지 ID입니다." }, { status: 400 });
  }

  const notice = await prisma.notice.findFirst({
    where: {
      id,
      status: "PUBLISHED",
      publishedAt: { lte: new Date() }
    },
    include: { attachments: true }
  });

  if (!notice) {
    return NextResponse.json({ message: "공지사항을 찾을 수 없습니다." }, { status: 404 });
  }

  return NextResponse.json({ notice });
}
