import { NextResponse } from "next/server";
import { getPublicNotices } from "@/backend/lib/notices";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const result = await getPublicNotices({
    page: searchParams.get("page"),
    category: searchParams.get("category"),
    searchField: searchParams.get("searchField"),
    keyword: searchParams.get("keyword")
  });

  return NextResponse.json(result);
}
