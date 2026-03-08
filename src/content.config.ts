import { defineCollection, z } from "astro:content";

const linkSchema = z.string().refine((value) => /^(https?:|mailto:|tel:|\/)/.test(value), {
  message: "Expected an absolute URL or site-relative path."
});

const dateFieldSchema = z.union([z.string(), z.date()]).transform((value) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return value;
});

const videoLinkSchema = z.object({
  title: z.string(),
  url: linkSchema
});

const imageItemSchema = z.object({
  src: z.string(),
  alt: z.string()
});

const siteSettings = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    fullName: z.string(),
    taglineEn: z.string(),
    taglineTe: z.string(),
    headlineEn: z.string(),
    headlineTe: z.string(),
    heroSupportingText: z.string(),
    missionStripEn: z.string(),
    missionStripTe: z.string(),
    description: z.string(),
    email: z.string().email().optional(),
    logoPath: z.string(),
    heroImagePath: z.string().optional(),
    primaryCtas: z.object({
      join: z.object({
        label: z.string(),
        href: linkSchema
      }),
      events: z.object({
        label: z.string(),
        href: linkSchema
      }),
      opportunities: z.object({
        label: z.string(),
        href: linkSchema
      })
    }),
    socialLinks: z.array(
      z.object({
        label: z.string(),
        href: linkSchema,
        note: z.string().optional()
      })
    ),
    homeThemes: z
      .array(
        z.object({
          eyebrow: z.string(),
          title: z.string(),
          description: z.string()
        })
      )
      .length(4),
    aboutIntro: z.object({
      eyebrow: z.string(),
      title: z.string(),
      accentTe: z.string(),
      body: z.array(z.string()).min(2),
      whoCanJoinTitle: z.string(),
      whoCanJoinBody: z.string(),
      familiarSpaceTitle: z.string(),
      familiarSpaceBody: z.string()
    }),
    aboutMissionPoints: z.array(z.string()).min(4),
    footerTaglineEn: z.string(),
    footerTaglineTe: z.string(),
    joinActions: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        label: z.string(),
        href: linkSchema
      })
    )
  })
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: dateFieldSchema,
    endDate: dateFieldSchema.optional(),
    location: z.string(),
    summary: z.string(),
    coverImage: z.string(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()),
    registrationUrl: linkSchema.optional(),
    status: z.enum(["upcoming", "past"]),
    featured: z.boolean().optional(),
    videoLinks: z.array(videoLinkSchema).optional()
  })
});

const opportunities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum(["internship", "job", "hackathon", "scholarship", "resource"]),
    organization: z.string(),
    deadline: dateFieldSchema.optional(),
    summary: z.string(),
    sourceUrl: linkSchema,
    featured: z.boolean().optional(),
    isActive: z.boolean()
  })
});

const achievers = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    institute: z.string(),
    program: z.string().optional(),
    batch: z.string().optional(),
    achievementTitle: z.string(),
    summary: z.string(),
    photo: z.string(),
    photoAlt: z.string().optional(),
    externalUrl: linkSchema.optional(),
    featured: z.boolean().optional()
  })
});

const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(["core", "cell-lead", "volunteer", "alumni-mentor"]),
    photo: z.string().optional(),
    bio: z.string(),
    sortOrder: z.number(),
    contactLabel: z.string().optional(),
    contactUrl: linkSchema.optional()
  })
});

const galleryAlbums = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    eventDate: dateFieldSchema,
    coverImage: z.string(),
    coverAlt: z.string().optional(),
    images: z.array(imageItemSchema),
    summary: z.string(),
    year: z.number(),
    featured: z.boolean().optional(),
    videoLinks: z.array(videoLinkSchema).optional()
  })
});

const groups = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    audience: z.string(),
    purpose: z.string(),
    updatesType: z.string(),
    joinLabel: z.string(),
    joinUrl: linkSchema.optional(),
    sortOrder: z.number()
  })
});

const announcements = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: dateFieldSchema,
    summary: z.string(),
    ctaLabel: z.string().optional(),
    ctaUrl: linkSchema.optional(),
    pinned: z.boolean().optional()
  })
});

export const collections = {
  siteSettings,
  events,
  opportunities,
  achievers,
  team,
  galleryAlbums,
  groups,
  announcements
};
