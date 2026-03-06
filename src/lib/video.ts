export interface VideoLink {
  title: string;
  url: string;
}

export interface ParsedVideoLink extends VideoLink {
  kind: "youtube" | "external";
  embedUrl?: string;
}

function getYoutubeId(url: URL) {
  if (url.hostname === "youtu.be") {
    return url.pathname.replace("/", "") || null;
  }

  if (url.hostname === "youtube.com" || url.hostname === "www.youtube.com") {
    if (url.pathname === "/watch") {
      return url.searchParams.get("v");
    }

    const parts = url.pathname.split("/").filter(Boolean);
    if (parts[0] === "embed" || parts[0] === "shorts") {
      return parts[1] ?? null;
    }
  }

  return null;
}

export function parseVideoLink(video: VideoLink): ParsedVideoLink {
  try {
    const parsed = new URL(video.url);
    const youtubeId = getYoutubeId(parsed);

    if (youtubeId) {
      return {
        ...video,
        kind: "youtube",
        embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`
      };
    }
  } catch {
    return {
      ...video,
      kind: "external"
    };
  }

  return {
    ...video,
    kind: "external"
  };
}

export function parseVideoLinks(videos?: VideoLink[]) {
  return (videos ?? []).map(parseVideoLink);
}
