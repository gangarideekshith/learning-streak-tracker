import { NextResponse } from "next/server";
import { readData } from "@/lib/dataStore";
import { calculateStreak } from "@/lib/streakLogic";

export async function GET() {
  const data = readData();

  const streak = calculateStreak(data.dates);

  const totalDays = data.dates.length;

  const lastStudied = data.dates[data.dates.length - 1] || null;

  return NextResponse.json({
    currentStreak: streak,
    totalDays,
    lastStudied
  });
}