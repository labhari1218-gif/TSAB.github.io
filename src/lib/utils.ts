export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(dateString));
}

export function sortByDateDesc<T extends { data: { date?: string; eventDate?: string } }>(items: T[]) {
  return [...items].sort((a, b) => {
    const aDate = new Date(a.data.date ?? a.data.eventDate ?? 0).getTime();
    const bDate = new Date(b.data.date ?? b.data.eventDate ?? 0).getTime();
    return bDate - aDate;
  });
}

export function slugifyLabel(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}
