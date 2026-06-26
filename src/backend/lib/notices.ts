import type { Prisma, NoticeCategory } from "@prisma/client";
import { PAGE_SIZE } from "@/backend/lib/constants";
import { prisma } from "@/backend/lib/prisma";
import { clampPage } from "@/backend/lib/utils";

type CategoryFilter = NoticeCategory | "ALL";
type SearchField = "ALL" | "TITLE" | "CONTENT";

export function buildPublicNoticeWhere(params: {
  category?: string | null;
  searchField?: string | null;
  keyword?: string | null;
}) {
  const where: Prisma.NoticeWhereInput = {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() }
  };

  const category = params.category as CategoryFilter | undefined;
  if (category && category !== "ALL") {
    where.category = category;
  }

  const keyword = params.keyword?.trim();
  const searchField = (params.searchField ?? "ALL") as SearchField;
  if (keyword) {
    if (searchField === "TITLE") {
      where.title = { contains: keyword, mode: "insensitive" };
    } else if (searchField === "CONTENT") {
      where.content = { contains: keyword, mode: "insensitive" };
    } else {
      where.OR = [
        { title: { contains: keyword, mode: "insensitive" } },
        { content: { contains: keyword, mode: "insensitive" } }
      ];
    }
  }

  return where;
}

export function noticeOrderBy() {
  return [
    { isPinned: "desc" as const },
    { publishedAt: "desc" as const },
    { id: "desc" as const }
  ];
}

export async function getPublicNotices(params: {
  page?: string | number | null;
  category?: string | null;
  searchField?: string | null;
  keyword?: string | null;
}) {
  const page = clampPage(params.page);
  const where = buildPublicNoticeWhere(params);
  const [total, notices] = await Promise.all([
    prisma.notice.count({ where }),
    prisma.notice.findMany({
      where,
      orderBy: noticeOrderBy(),
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: { attachments: true }
    })
  ]);

  return {
    notices,
    total,
    page,
    totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE))
  };
}

export async function getAdjacentNotices(noticeId: number, publishedAt: Date | null) {
  if (!publishedAt) {
    return { previous: null, next: null };
  }

  const where = {
    status: "PUBLISHED" as const,
    publishedAt: { not: null, lte: new Date() },
    isPinned: false
  };

  const [previous, next] = await Promise.all([
    prisma.notice.findFirst({
      where: {
        ...where,
        OR: [
          { publishedAt: { lt: publishedAt } },
          { publishedAt, id: { lt: noticeId } }
        ]
      },
      orderBy: [{ publishedAt: "desc" }, { id: "desc" }],
      select: { id: true, title: true }
    }),
    prisma.notice.findFirst({
      where: {
        ...where,
        OR: [
          { publishedAt: { gt: publishedAt, lte: new Date() } },
          { publishedAt, id: { gt: noticeId } }
        ]
      },
      orderBy: [{ publishedAt: "asc" }, { id: "asc" }],
      select: { id: true, title: true }
    })
  ]);

  return { previous, next };
}
