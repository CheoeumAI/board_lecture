import { NextResponse } from "next/server";
import { prisma } from "@/backend/lib/prisma";
import { getDownloadUrl } from "@/backend/lib/storage";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ message: "잘못된 파일 ID입니다." }, { status: 400 });
  }

  const attachment = await prisma.attachment.findFirst({
    where: {
      id,
      notice: {
        status: "PUBLISHED",
        publishedAt: { lte: new Date() }
      }
    }
  });

  if (!attachment) {
    return NextResponse.json({ message: "첨부파일을 찾을 수 없습니다." }, { status: 404 });
  }

  await prisma.attachment.update({
    where: { id },
    data: { downloadCount: { increment: 1 } }
  });

  const url = await getDownloadUrl(attachment.fileKey, attachment.fileName);
  return NextResponse.redirect(url);
}
