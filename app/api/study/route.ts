import { NextResponse } from "next/server";
import { readData, writeData } from "@/lib/dataStore";

export async function POST() {
  const data = readData();

  const today = new Date().toISOString().split("T")[0];

  if (data.dates.includes(today)) {
    return NextResponse.json({
      message: "You have already marked today."
    });
  }

  data.dates.push(today);

  writeData(data);

  return NextResponse.json({
    message: "Study recorded successfully"
  });
}