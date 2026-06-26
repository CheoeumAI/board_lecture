"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm({ callbackUrl = "/admin/notices" }: { callbackUrl?: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    const formData = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      redirect: false,
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      callbackUrl
    });

    setPending(false);
    if (result?.error) {
      setError("이메일 또는 비밀번호를 확인해 주세요.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <form className="form-grid card" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="email">이메일</label>
        <input className="field" id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-row">
        <label htmlFor="password">비밀번호</label>
        <input className="field" id="password" name="password" type="password" autoComplete="current-password" required />
      </div>
      {error ? <p className="message">{error}</p> : null}
      <button className="button primary" type="submit" disabled={pending}>
        {pending ? "확인 중" : "로그인"}
      </button>
    </form>
  );
}
