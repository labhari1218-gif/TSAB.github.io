import { defineCollection, z } from "astro:content";

const linkSchema = z.string().refine((value) => /^(https?:|mailto:|tel:|\/)/.test(value), {
  message: "Expected an absolute URL or site-relative path."
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    endDate: z.string().optional(),
    location: z.string(),
    summary: z.string(),
    coverImage: z.string(),
    tags: z.array(z.string()),
    registrationUrl: linkSchema.optional(),
    status: z.enum(["upcoming", "past"]),
    featured: z.boolean().optional()
  })
});

const opportunities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum(["internship", "job", "hackathon", "scholarship", "resource"]),
    organization: z.string(),
    deadline: z.string().optional(),
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
    eventDate: z.string(),
    coverImage: z.string(),
    images: z.array(z.string()),
    summary: z.string(),
    year: z.number(),
    featured: z.boolean().optional()
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
    date: z.string(),
    summary: z.string(),
    ctaLabel: z.string().optional(),
    ctaUrl: linkSchema.optional(),
    pinned: z.boolean().optional()
  })
});

export const collections = {
  events,
  opportunities,
  achievers,
  team,
  galleryAlbums,
  groups,
  announcements
};
