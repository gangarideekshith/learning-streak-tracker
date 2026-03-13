export function calculateStreak(dates: string[]) {
  if (dates.length === 0) return 0;

  const sortedDates = dates.sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  let streak = 1;

  for (let i = 0; i < sortedDates.length - 1; i++) {
    const current = new Date(sortedDates[i]);
    const next = new Date(sortedDates[i + 1]);

    const diff =
      (current.getTime() - next.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
