# SJR Salman Jahid · Portfolio

A clean, white, single-page portfolio for filmmaking and photography. Videos come from **YouTube** and photos from **Cloudinary**. The site builds to plain static files (HTML, CSS, JS) that can be hosted anywhere.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript.

---

## Contents

- [Quick start](#quick-start)
- [Editing the site](#editing-the-site)
  - [Your details](#1-your-details)
  - [Cloudinary photos](#2-cloudinary-photos)
  - [YouTube videos](#3-youtube-videos)
  - [About section](#4-about-section)
- [Page sections](#page-sections)
- [Project structure](#project-structure)
- [Building and deploying](#building-and-deploying)
- [Customising the design](#customising-the-design)
- [Troubleshooting](#troubleshooting)

---

## Quick start

Requirements: **Node.js 20+** and npm.

```bash
npm install      # first time only
npm run dev      # start the local preview
```

Open <http://localhost:3000>. The page reloads automatically when you save a file.

| Command         | What it does                                         |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Local preview with live reload                       |
| `npm run build` | Builds the static site into the `out/` folder        |
| `npm run lint`  | Checks the code for mistakes                         |

---

## Editing the site

**All content lives in one file: [`content/site.ts`](content/site.ts).** You never need to touch the components to change text, photos or videos.

> Tip: keep the quotes `"..."` and the commas at the end of each line. A missing comma is the most common reason the site stops building.

### 1. Your details

```ts
export const site = {
  name: "SJR Salman Jahid",            // shown in the header and footer
  role: "Photographer & Cinematographer", // small line above the hero photo
  tagline: "Filmmaking isn't just my profession. ...", // big quote under the hero photo
  location: "Available worldwide",     // stored, not currently shown on the page
  email: "hello@example.com",          // contact button + mailto links
  phone: "",                           // optional; leave "" to hide
  socials: [
    { label: "Instagram", href: "https://instagram.com/yourname" },
    { label: "YouTube",   href: "https://youtube.com/@yourname" },
    { label: "Vimeo",     href: "https://vimeo.com/yourname" },
  ],
};
```

Instagram, YouTube and Vimeo show as icons. Any other label (for example `"Behance"`) shows as a text link.

### 2. Cloudinary photos

**Set your cloud name** (Cloudinary dashboard → *Cloud name*, top of the page):

```ts
export const cloudinary = {
  cloudName: "your-cloud-name",
};
```

**Find a photo's Public ID:** Cloudinary → *Media Library* → click an image → copy the **Public ID**. Leave out the file extension.

| Cloudinary URL                                                          | Public ID to use       |
| ----------------------------------------------------------------------- | ---------------------- |
| `https://res.cloudinary.com/xyz/image/upload/v1712/weddings/ayesha.jpg` | `weddings/ayesha`      |
| `https://res.cloudinary.com/xyz/image/upload/portrait_01.jpg`           | `portrait_01`          |

**Hero and portrait images:**

```ts
export const heroImage = "folder/your-wide-shot";  // large photo at the top
export const portraitImage = "folder/your-portrait"; // About section, cropped 4:5
```

**Gallery photos:**

```ts
export const photos: Photo[] = [
  { id: "weddings/ayesha",   alt: "Bride at golden hour", category: "Wedding" },
  { id: "street/dhaka-rain", alt: "Rain in Old Dhaka",    category: "Street" },
];
```

- `id`: the Public ID.
- `alt`: a short description, for accessibility and search engines.
- `category`: the filter buttons (`All`, `Wedding`, `Street`, ...) are created automatically from these.
- Photos appear in the order you list them. Portrait and landscape shots can be mixed freely.

You don't need to resize anything. The site asks Cloudinary for the right size and format (WebP/AVIF) for each screen.

### 3. YouTube videos

The `id` is the code in the video link:

| YouTube link                                  | `id`          |
| --------------------------------------------- | ------------- |
| `https://www.youtube.com/watch?v=aqz-KE-bpKQ` | `aqz-KE-bpKQ` |
| `https://youtu.be/aqz-KE-bpKQ`                | `aqz-KE-bpKQ` |
| `https://www.youtube.com/shorts/aqz-KE-bpKQ`  | `aqz-KE-bpKQ` |

```ts
export const videos: Video[] = [
  { id: "aqz-KE-bpKQ", title: "Wedding Film", category: "Wedding", year: "2025" },
  { id: "eRsGyueVLvQ", title: "Brand Story",  category: "Commercial" },
];
```

- The **first video** is shown large as the featured film. The rest form a two-column grid.
- `category` and `year` are optional.
- Thumbnails come from YouTube automatically. Videos play in a full-screen player using YouTube's privacy-enhanced (`youtube-nocookie.com`) embed.
- The video must be **Public** or **Unlisted** on YouTube, with embedding allowed.

### 4. About section

```ts
export const about = {
  heading: "I find stories in ordinary moments ...", // large quote
  paragraphs: [
    "First paragraph ...",
    "Second paragraph ...",                         // add or remove as needed
  ],
  services: ["Filmmaking", "Cinemagraph", "Photography", "Cinematography", "Visual Maker"],
};
```

`services` appears in two places: next to the quote under the hero photo, and under *What I do* in the About section.

---

## Page sections

The page is one long scroll. The header links jump to each section.

| Section     | Component                                       | Content from                         |
| ----------- | ----------------------------------------------- | ------------------------------------ |
| Header      | [`components/Nav.tsx`](components/Nav.tsx)      | `site.name`, `site.socials`          |
| Hero        | [`components/Hero.tsx`](components/Hero.tsx)    | `heroImage`, `site.tagline`, `about.services` |
| Films       | [`components/Films.tsx`](components/Films.tsx)  | `videos`                             |
| Photos      | [`components/Gallery.tsx`](components/Gallery.tsx) | `photos`                          |
| About       | [`components/About.tsx`](components/About.tsx)  | `portraitImage`, `about`             |
| Contact     | [`components/Contact.tsx`](components/Contact.tsx) | `site.email`, `site.phone`, `site.socials` |

**Features:**

- Video player opens full screen; close with **Esc**, the *Close* button, or by clicking outside.
- Photo viewer: **← / →** arrow keys or *Prev / Next* to browse, **Esc** to close.
- Mobile menu on small screens.
- Images load lazily and fade in. Sections fade in gently on scroll; this is turned off for visitors who have *reduce motion* enabled.
- Always light/white, even when the visitor's device is in dark mode.

---

## Project structure

```
content/
  site.ts            ← ALL editable content (start here)
app/
  layout.tsx         Fonts, page title & description (SEO)
  page.tsx           Order of the sections on the page
  globals.css        Colours, the .label style, animations
components/
  Nav.tsx            Sticky header + mobile menu
  Hero.tsx           Top photo, tagline, skills
  Films.tsx          Featured video, video grid, video player
  Gallery.tsx        Category filters, masonry grid, photo viewer
  About.tsx          Portrait, bio, services
  Contact.tsx        Contact call-to-action + footer
  Modal.tsx          Shared full-screen overlay (video + photo viewer)
  Social.tsx         Social icons
  Reveal.tsx         Fade-in-on-scroll helper
  SectionHeader.tsx  Small uppercase section titles
lib/
  media.ts           Builds Cloudinary and YouTube URLs
next.config.ts       Static export settings
```

To reorder or remove a section, edit [`app/page.tsx`](app/page.tsx).

---

## Building and deploying

```bash
npm run build
```

This creates an **`out/`** folder containing the complete website. Upload that folder to any static host:

| Host                 | How                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------- |
| **Netlify**          | Drag and drop `out/` at app.netlify.com/drop, or connect the repo: build `npm run build`, publish dir `out` |
| **Vercel**           | Import the repo; it detects Next.js automatically                                         |
| **Cloudflare Pages** | Connect the repo: build `npm run build`, output directory `out`                           |
| **GitHub Pages**     | Push the contents of `out/` to a `gh-pages` branch                                        |
| **Any web host**     | Upload the contents of `out/` to `public_html` via FTP                                    |

After changing content, run `npm run build` again and re-upload (or push, if the host is connected to the repo).

The site is a static export (`output: "export"` in [`next.config.ts`](next.config.ts)), so server-only Next.js features (API routes, server actions, Cache Components) are not available. They aren't needed for this site.

---

## Customising the design

**Colours:** edit the variables at the top of [`app/globals.css`](app/globals.css):

```css
:root {
  --bg: #ffffff;       /* page background */
  --bg-soft: #f4f4f2;  /* placeholder behind images while loading */
  --fg: #111111;       /* main text */
  --muted: #8a8a8a;    /* small grey labels */
  --line: #e6e6e6;     /* thin divider lines */
}
```

**Font:** the site uses *Inter Tight* from Google Fonts, set in [`app/layout.tsx`](app/layout.tsx). Swap it for another `next/font/google` font with the same `variable: "--font-inter-tight"` to change the typeface everywhere.

**Small uppercase labels:** the `.label` class in `globals.css` controls their size and letter spacing.

**Page title / SEO description:** generated in [`app/layout.tsx`](app/layout.tsx) from `site.name`, `site.role` and `site.tagline`.

---

## Troubleshooting

| Problem                               | Fix                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------- |
| A photo is blank / broken             | Check the Public ID (no `.jpg`, correct folder) and that `cloudName` is right.                 |
| All photos are broken                 | `cloudName` is wrong, or the images are set to private/authenticated in Cloudinary.           |
| Video thumbnail is grey or low quality | The video has no HD thumbnail; the site falls back to a smaller one automatically.            |
| Video says "unavailable"              | The video is private, or embedding is disabled in YouTube Studio → Video → *Allow embedding*. |
| `npm run build` fails after editing   | Usually a missing comma or quote in `content/site.ts`. The error message shows the line.       |
| Changes don't show on the live site   | Rebuild (`npm run build`) and re-upload `out/`, then hard-refresh the browser (Ctrl+Shift+R). |
