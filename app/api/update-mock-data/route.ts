import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.UPDATE_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { rows } = body;

  const filePath = path.join(process.cwd(), "public", "mockData.json");
  fs.writeFileSync(filePath, JSON.stringify(rows, null, 2), "utf-8");

  return NextResponse.json({ success: true, count: rows.length });
}