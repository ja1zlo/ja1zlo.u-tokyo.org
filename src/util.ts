export function date_str(date: Date): string {
  // YYYY-MM-DD
  return date.toISOString().slice(0, 10);
}
