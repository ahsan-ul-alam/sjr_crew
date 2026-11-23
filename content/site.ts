/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO UPDATE YOUR SITE
 *  Everything you see on the page (name, videos, photos, bio,
 *  contact) comes from here. No other file needs to change.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "SJR Salman Jahid",
  role: "Photographer & Cinematographer",
  tagline: "Filmmaking isn't just my profession. It's an obsession that never switches off.",
  location: "Available worldwide",
  email: "hello@example.com",
  phone: "", // optional, e.g. "+1 555 123 4567"
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "Vimeo", href: "https://vimeo.com/" },
  ],
};

/**
 * CLOUDINARY
 * Put your cloud name here (Cloudinary dashboard → "Cloud name").
 * Photos below use the image's "Public ID" (shown in the Media Library),
 * WITHOUT the file extension. Folders are fine: "weddings/ayesha-01".
 */
export const cloudinary = {
  cloudName: "demo",
};

/** Big background image at the top of the page (a Cloudinary public ID). */
export const heroImage = "samples/landscapes/landscape-panorama";

/** Portrait used in the About section (a Cloudinary public ID). */
export const portraitImage = "samples/man-portrait";

/**
 * VIDEOS (YouTube)
 * `id` is the part after "v=" in a YouTube link:
 *   https://www.youtube.com/watch?v=aqz-KE-bpKQ  →  id: "aqz-KE-bpKQ"
 *   https://youtu.be/aqz-KE-bpKQ                 →  id: "aqz-KE-bpKQ"
 * The first video is shown large as the featured film.
 */
export type Video = {
  id: string;
  title: string;
  category?: string;
  year?: string;
};

export const videos: Video[] = [
  { id: "R6MlUcmOul8", title: "Tears of Steel", category: "Short Film", year: "2025" },
  { id: "WhWc3b3KhnY", title: "Spring", category: "Brand Film", year: "2025" },
  { id: "eRsGyueVLvQ", title: "Sintel", category: "Music Video", year: "2024" },
  { id: "aqz-KE-bpKQ", title: "Big Buck Bunny", category: "Commercial", year: "2024" },
  { id: "TLkA0RELQ1g", title: "Elephants Dream", category: "Documentary", year: "2023" },
  { id: "SkVqJ1SGeL0", title: "Llamigos", category: "Short Film", year: "2023" },
];

/**
 * PHOTOS (Cloudinary)
 * `category` creates the filter buttons above the gallery automatically.
 */
export type Photo = {
  id: string; // Cloudinary public ID
  alt: string;
  category: string;
};

export const photos: Photo[] = [
  { id: "samples/landscapes/nature-mountains", alt: "Mountain range at dusk", category: "Landscape" },
  { id: "samples/people/boy-snow-hoodie", alt: "Boy in the snow", category: "Portrait" },
  { id: "samples/landscapes/girl-urban-view", alt: "Woman overlooking the city", category: "Street" },
  { id: "samples/people/jazz", alt: "Jazz musician on stage", category: "Events" },
  { id: "samples/landscapes/beach-boat", alt: "Boat on a quiet beach", category: "Landscape" },
  { id: "samples/outdoor-woman", alt: "Woman outdoors", category: "Portrait" },
  { id: "samples/man-on-a-street", alt: "Man on a street", category: "Street" },
  { id: "samples/people/bicycle", alt: "Cyclist", category: "Street" },
  { id: "samples/two-ladies", alt: "Two friends", category: "Portrait" },
  { id: "samples/landscapes/architecture-signs", alt: "Architecture and signs", category: "Street" },
  { id: "samples/people/smiling-man", alt: "Smiling man", category: "Portrait" },
  { id: "samples/animals/reindeer", alt: "Reindeer", category: "Landscape" },
  { id: "samples/look-up", alt: "Looking up", category: "Street" },
  { id: "samples/people/kitchen-bar", alt: "Kitchen bar", category: "Events" },
  { id: "samples/man-on-a-escalator", alt: "Man on an escalator", category: "Street" },
  { id: "samples/woman-on-a-football-field", alt: "Woman on a football field", category: "Portrait" },
];

export const about = {
  heading:
    "I find stories in ordinary moments and turn them into extraordinary visual experiences.",
  paragraphs: [
    "I'm a photographer and cinematographer working across commercials, music videos, weddings and documentary. My approach is quiet and observational: natural light, honest moments, and a frame that lets the story breathe.",
    "From a single portrait to a full production with crew, I bring the same care to every project, from planning and lighting through to the final grade.",
  ],
  /** Shown under the hero photo and in the About section. */
  services: ["Filmmaking", "Cinemagraph", "Photography", "Cinematography", "Visual Maker"],
};
