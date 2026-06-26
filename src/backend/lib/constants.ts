import type { NoticeCategory, NoticeStatus } from "@prisma/client";

export const PAGE_SIZE = 10;
export const PAGE_WINDOW = 10;
export const NEW_NOTICE_DAYS = 7;
export const MAX_FILE_SIZE = 20 * 1024 * 1024;

export const allowedFileExtensions = [
  "pdf",
  "hwp",
  "hwpx",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "png",
  "jpg",
  "jpeg",
  "zip"
] as const;

export const categoryLabels: Record<NoticeCategory, string> = {
  NOTICE: "공지",
  BID: "입찰",
  PRIVATE_CONTRACT: "수의계약내역"
};

export const statusLabels: Record<NoticeStatus, string> = {
  DRAFT: "임시저장",
  PUBLISHED: "게시",
  HIDDEN: "숨김"
};

export const categories = [
  { value: "ALL", label: "전체" },
  { value: "NOTICE", label: "공지" },
  { value: "BID", label: "입찰" },
  { value: "PRIVATE_CONTRACT", label: "수의계약내역" }
] as const;

export const searchFields = [
  { value: "ALL", label: "전체" },
  { value: "TITLE", label: "제목" },
  { value: "CONTENT", label: "내용" }
] as const;
