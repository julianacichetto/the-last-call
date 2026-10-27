import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#9F3548",
  background: "#111418",
  ink: "#F0EEE9",
  muted: "#A4A8AE",
};

// The cinematic video-generation service is currently out of credits, so the
// landing page uses its own scroll-revealed evidence archive rather than a
// missing video asset. The template engine remains unused and intact.
export const scrollScrubScenes: ScrollScrubScene[] = [];
