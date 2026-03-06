export const siteConfig = {
  name: "TSAB",
  fullName: "Telugu Students Association Bhopal",
  tagline: "Community, culture, opportunities, and growth for Telugu students in Bhopal.",
  headline: "A home for Telugu students in Bhopal",
  description:
    "TSAB is a modern student community portal built to connect Telugu students in Bhopal through events, opportunities, achiever stories, and shared support.",
  email: "hello@tsab.example",
  logoPath: "/images/branding/logo-placeholder.svg",
  primaryCtas: {
    join: {
      label: "Join TSAB",
      href: "/join/"
    },
    events: {
      label: "Explore Events",
      href: "/events/"
    },
    opportunities: {
      label: "See Opportunities",
      href: "/opportunities/"
    }
  },
  socialLinks: [
    {
      label: "Instagram",
      href: "https://instagram.com/tsab.community"
    },
    {
      label: "WhatsApp",
      href: "https://example.com/tsab-whatsapp"
    },
    {
      label: "Join Form",
      href: "https://example.com/tsab-join-form"
    }
  ]
};

export function withBase(path: string) {
  if (/^(https?:|mailto:|tel:)/.test(path)) {
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

export const homeFeatureCards = [
  {
    title: "Community",
    description:
      "Find a welcoming student circle that helps new members settle in, stay informed, and feel at home in Bhopal.",
    eyebrow: "01"
  },
  {
    title: "Events & Culture",
    description:
      "Celebrate festivals, host gatherings, and create visible moments that keep Telugu culture active on campus.",
    eyebrow: "02"
  },
  {
    title: "Opportunities",
    description:
      "Share curated internships, hackathons, jobs, scholarships, and useful student resources in one place.",
    eyebrow: "03"
  },
  {
    title: "Media & Memories",
    description:
      "Preserve event highlights, photo albums, and community milestones through a clean, searchable archive.",
    eyebrow: "04"
  }
];

export const aboutValues = [
  "Belonging for Telugu students arriving in a new city.",
  "Visible community pathways for members, volunteers, and contributors.",
  "Practical student support through opportunities and peer knowledge.",
  "A strong archive of culture, memories, and member achievements."
];
