export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About TSAB", href: "/about/" },
  { label: "Events", href: "/events/" },
  { label: "Opportunities", href: "/opportunities/" },
  { label: "Achievers", href: "/achievers/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Working Groups", href: "/working-groups/" },
  { label: "Team", href: "/team/" },
  { label: "Join", href: "/join/" }
];

export function withBase(path: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  if (path === "/") {
    return base || "/";
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function withoutBase(path: string) {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  if (base && path.startsWith(base)) {
    return path.slice(base.length) || "/";
  }

  return path;
}
