import { NextResponse } from "next/server";
import { readData } from "@/lib/dataStore";
import { calculateStreak } from "@/lib/streakLogic";
import { getRank } from "@/lib/rankLogic"; // add this import

export async function GET() {
  const data = readData();

  const streak = calculateStreak(data.dates);

  const rank = getRank(streak); // add here

  const totalDays = data.dates.length;

  const lastStudied = data.dates[data.dates.length - 1] || null;

  return NextResponse.json({
    currentStreak: streak,
    totalDays,
    lastStudied,
    rank // send rank to frontend
  });
}