import { describe, expect, it } from "vitest";
import { getFileExtension, validateUploadFile } from "@/backend/lib/validation";

function makeFile(name: string, size: number, type = "application/pdf") {
  return new File([new Uint8Array(size)], name, { type });
}

describe("file validation", () => {
  it("accepts configured public notice attachment types", () => {
    const result = validateUploadFile(makeFile("notice.pdf", 1024));
    expect(result.ok).toBe(true);
  });

  it("rejects unsupported extensions", () => {
    const result = validateUploadFile(makeFile("script.exe", 1024));
    expect(result.ok).toBe(false);
  });

  it("rejects files over twenty megabytes", () => {
    const result = validateUploadFile(makeFile("large.pdf", 20 * 1024 * 1024 + 1));
    expect(result.ok).toBe(false);
  });

  it("extracts file extensions case-insensitively", () => {
    expect(getFileExtension("RESULT.HWPX")).toBe("hwpx");
  });
});
