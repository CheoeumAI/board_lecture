import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/backend/lib/auth";
import { prisma } from "@/backend/lib/prisma";
import { noticeInputSchema } from "@/backend/lib/validation";

export const dynamic = "force-dynamic";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  return Boolean(session?.user?.role === "ADMIN");
}

function parsePublishedAt(value: string | undefined) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
  }

  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ message: "잘못된 공지 ID입니다." }, { status: 400 });
  }

  const parsed = noticeInputSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "입력값을 확인해 주세요." }, { status: 400 });
  }

  const data = parsed.data;
  await prisma.attachment.updateMany({
    where: { noticeId: id, id: { notIn: data.attachmentIds } },
    data: { noticeId: null }
  });

  const notice = await prisma.notice.update({
    where: { id },
    data: {
      category: data.category,
      title: data.title,
      content: data.content,
      isPinned: data.isPinned,
      publishedAt: parsePublishedAt(data.publishedAt),
      status: data.status,
      attachments: {
        connect: data.attachmentIds.map((attachmentId) => ({ id: attachmentId }))
      }
    },
    include: { attachments: true }
  });

  return NextResponse.json({ notice });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
  }

  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ message: "잘못된 공지 ID입니다." }, { status: 400 });
  }

  await prisma.notice.update({
    where: { id },
    data: { status: "HIDDEN" }
  });

  return NextResponse.json({ ok: true });
}
