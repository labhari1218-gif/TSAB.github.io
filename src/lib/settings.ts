import { getEntry, type CollectionEntry } from "astro:content";

export type SiteSettings = CollectionEntry<"siteSettings">["data"];

let settingsPromise: Promise<SiteSettings> | undefined;

export function getSiteSettings() {
  if (!settingsPromise) {
    settingsPromise = (async () => {
      const entry = await getEntry("siteSettings", "site");

      if (!entry) {
        throw new Error("Missing site settings entry at src/content/siteSettings/site.json");
      }

      return entry.data;
    })();
  }

  return settingsPromise;
}
