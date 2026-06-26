import { randomUUID } from "crypto";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/backend/lib/auth";
import { prisma } from "@/backend/lib/prisma";
import { uploadObject } from "@/backend/lib/storage";
import { getFileExtension, validateUploadFile } from "@/backend/lib/validation";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "파일을 선택해 주세요." }, { status: 400 });
  }

  const validation = validateUploadFile(file);
  if (!validation.ok) {
    return NextResponse.json({ message: validation.message }, { status: 400 });
  }

  const extension = getFileExtension(file.name);
  const fileKey = `notices/${new Date().getFullYear()}/${randomUUID()}.${extension}`;
  const bytes = Buffer.from(await file.arrayBuffer());

  await uploadObject({
    key: fileKey,
    body: bytes,
    contentType: file.type || "application/octet-stream"
  });

  const attachment = await prisma.attachment.create({
    data: {
      fileName: file.name,
      fileKey,
      mimeType: file.type || "application/octet-stream",
      size: file.size
    }
  });

  return NextResponse.json({ attachment }, { status: 201 });
}
