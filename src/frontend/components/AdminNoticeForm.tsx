"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Attachment, Notice } from "@prisma/client";
import { categories, statusLabels } from "@/backend/lib/constants";
import { formatDateTimeLocal } from "@/backend/lib/utils";

type NoticeWithAttachments = (Notice & { attachments: Attachment[] }) | null;

export function AdminNoticeForm({ notice }: { notice?: NoticeWithAttachments }) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>(notice?.attachments ?? []);

  async function uploadFiles(files: FileList | null) {
    if (!files?.length) return;
    setMessage("");

    for (const file of Array.from(files)) {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("/api/admin/files", { method: "POST", body });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.message ?? "파일 업로드에 실패했습니다.");
        return;
      }
      setAttachments((current) => [...current, result.attachment]);
    }
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      category: form.get("category"),
      title: form.get("title"),
      content: form.get("content"),
      isPinned: form.get("isPinned") === "on",
      publishedAt: form.get("publishedAt"),
      status: form.get("status"),
      attachmentIds: attachments.map((attachment) => attachment.id)
    };

    const response = await fetch(notice ? `/api/admin/notices/${notice.id}` : "/api/admin/notices", {
      method: notice ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    setPending(false);

    if (!response.ok) {
      setMessage(result.message ?? "저장하지 못했습니다.");
      return;
    }

    router.push("/admin/notices");
    router.refresh();
  }

  function removeAttachment(id: number) {
    setAttachments((current) => current.filter((attachment) => attachment.id !== id));
  }

  return (
    <form className="form-grid card" onSubmit={submit}>
      <div className="form-row">
        <label htmlFor="category">분류</label>
        <select className="select" id="category" name="category" defaultValue={notice?.category ?? "NOTICE"}>
          {categories
            .filter((category) => category.value !== "ALL")
            .map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="title">제목</label>
        <input className="field" id="title" name="title" defaultValue={notice?.title ?? ""} required />
      </div>

      <div className="form-row">
        <label htmlFor="content">본문</label>
        <textarea className="textarea" id="content" name="content" defaultValue={notice?.content ?? ""} required />
      </div>

      <div className="form-row">
        <label htmlFor="publishedAt">게시일</label>
        <input
          className="field"
          id="publishedAt"
          name="publishedAt"
          type="datetime-local"
          defaultValue={formatDateTimeLocal(notice?.publishedAt ?? new Date())}
        />
      </div>

      <div className="form-row">
        <label htmlFor="status">상태</label>
        <select className="select" id="status" name="status" defaultValue={notice?.status ?? "DRAFT"}>
          {Object.entries(statusLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <label className="inline-actions">
        <input name="isPinned" type="checkbox" defaultChecked={notice?.isPinned ?? false} />
        고정 공지로 표시
      </label>

      <div className="form-row">
        <label htmlFor="attachments">첨부파일</label>
        <input className="field" id="attachments" type="file" multiple onChange={(event) => uploadFiles(event.target.files)} />
        {attachments.length > 0 ? (
          <div className="attachment-list">
            {attachments.map((attachment) => (
              <div className="inline-actions" key={attachment.id}>
                <span className="m3-icon" aria-hidden="true">
                  attach_file
                </span>
                <span>{attachment.fileName}</span>
                <button className="button text" type="button" onClick={() => removeAttachment(attachment.id)}>
                  제거
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {message ? <p className="message">{message}</p> : null}

      <div className="inline-actions">
        <button className="button primary" type="submit" disabled={pending}>
          {pending ? "저장 중" : "저장"}
        </button>
        <button className="button outlined" type="button" onClick={() => router.push("/admin/notices")}>
          취소
        </button>
      </div>
    </form>
  );
}
