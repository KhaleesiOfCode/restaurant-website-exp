export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function sanitize(str: string): string {
  return str.trim().replace(/<[^>]*>/g, "");
}
