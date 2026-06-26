import { NEW_NOTICE_DAYS } from "@/backend/lib/constants";

export function formatDate(value: Date | string | null | undefined) {
  if (!value) return "-";
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

export function formatDateTimeLocal(value: Date | string | null | undefined) {
  if (!value) return "";
  const date = value instanceof Date ? value : new Date(value);
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 16);
}

export function isNewNotice(value: Date | string | null | undefined, now = new Date()) {
  if (!value) return false;
  const date = value instanceof Date ? value : new Date(value);
  const elapsed = now.getTime() - date.getTime();
  return elapsed >= 0 && elapsed <= NEW_NOTICE_DAYS * 24 * 60 * 60 * 1000;
}

export function clampPage(value: string | number | null | undefined) {
  const page = Number(value ?? 1);
  if (!Number.isFinite(page) || page < 1) return 1;
  return Math.floor(page);
}

export function fileSizeLabel(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}
