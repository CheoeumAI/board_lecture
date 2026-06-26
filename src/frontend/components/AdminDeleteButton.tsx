"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminDeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function hideNotice() {
    if (!confirm("이 공지를 숨김 처리할까요?")) return;
    setPending(true);
    await fetch(`/api/admin/notices/${id}`, { method: "DELETE" });
    setPending(false);
    router.refresh();
  }

  return (
    <button className="button text" type="button" disabled={pending} onClick={hideNotice}>
      숨김
    </button>
  );
}
