import { describe, expect, it } from "vitest";
import { buildPublicNoticeWhere, noticeOrderBy } from "@/backend/lib/notices";

describe("notice query helpers", () => {
  it("filters published notices by category and title keyword", () => {
    const where = buildPublicNoticeWhere({
      category: "BID",
      searchField: "TITLE",
      keyword: "입찰"
    });

    expect(where.status).toBe("PUBLISHED");
    expect(where.category).toBe("BID");
    expect(where.title).toEqual({ contains: "입찰", mode: "insensitive" });
  });

  it("orders pinned notices first and then newest notices", () => {
    expect(noticeOrderBy()).toEqual([
      { isPinned: "desc" },
      { publishedAt: "desc" },
      { id: "desc" }
    ]);
  });
});
