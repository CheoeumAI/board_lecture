"use client";

export function SharePrintButtons() {
  async function copyUrl() {
    await navigator.clipboard.writeText(window.location.href);
    alert("공유 링크를 복사했습니다.");
  }

  return (
    <div className="inline-actions">
      <button className="button outlined" type="button" onClick={copyUrl}>
        <span className="m3-icon" aria-hidden="true">
          share
        </span>
        공유
      </button>
      <button className="button outlined" type="button" onClick={() => window.print()}>
        <span className="m3-icon" aria-hidden="true">
          print
        </span>
        인쇄
      </button>
    </div>
  );
}
