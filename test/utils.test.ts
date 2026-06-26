import { describe, expect, it } from "vitest";
import { clampPage, fileSizeLabel, formatDate, isNewNotice } from "@/backend/lib/utils";

describe("notice utilities", () => {
  it("detects notices published within seven days as new", () => {
    const now = new Date("2026-06-17T00:00:00.000Z");
    expect(isNewNotice("2026-06-11T00:00:00.000Z", now)).toBe(true);
    expect(isNewNotice("2026-06-09T23:59:59.000Z", now)).toBe(false);
  });

  it("normalizes invalid page values to page one", () => {
    expect(clampPage("-3")).toBe(1);
    expect(clampPage("abc")).toBe(1);
    expect(clampPage("3.8")).toBe(3);
  });

  it("formats dates and file sizes for Korean notice UI", () => {
    expect(formatDate("2026-06-17T00:00:00.000Z")).toContain("2026");
    expect(fileSizeLabel(1536)).toBe("1.5 KB");
  });
});
