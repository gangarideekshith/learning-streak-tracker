import { NextResponse } from "next/server";
import { readData } from "@/lib/dataStore";

export async function GET() {
  const data = readData();

  const sorted = data.dates.sort(
    (a: string, b: string) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

  return NextResponse.json(sorted);
}