import { z } from "zod";
import { allowedFileExtensions, MAX_FILE_SIZE } from "@/backend/lib/constants";

export const noticeInputSchema = z.object({
  category: z.enum(["NOTICE", "BID", "PRIVATE_CONTRACT"]),
  title: z.string().trim().min(2, "제목은 2자 이상 입력해 주세요.").max(200),
  content: z.string().trim().min(1, "본문을 입력해 주세요."),
  isPinned: z.coerce.boolean().default(false),
  publishedAt: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "HIDDEN"]),
  attachmentIds: z.array(z.coerce.number().int().positive()).default([])
});

export type NoticeInput = z.infer<typeof noticeInputSchema>;

export function getFileExtension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

export function validateUploadFile(file: File) {
  const extension = getFileExtension(file.name);

  if (!allowedFileExtensions.includes(extension as (typeof allowedFileExtensions)[number])) {
    return {
      ok: false,
      message: `허용되지 않는 파일 형식입니다. (${allowedFileExtensions.join(", ")})`
    } as const;
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      ok: false,
      message: "첨부파일은 20MB 이하만 업로드할 수 있습니다."
    } as const;
  }

  return { ok: true } as const;
}
