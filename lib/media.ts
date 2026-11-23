import { cloudinary } from "@/content/site";

const BASE = () => `https://res.cloudinary.com/${cloudinary.cloudName}/image/upload`;

/** Build a Cloudinary delivery URL with automatic format & quality. */
export function cld(publicId: string, width: number, extra = "") {
  const t = ["f_auto", "q_auto", "c_limit", `w_${width}`, extra].filter(Boolean).join(",");
  return `${BASE()}/${t}/${publicId}`;
}

/** Responsive srcset for a Cloudinary image. */
export function cldSrcSet(publicId: string, widths = [480, 800, 1200, 1600, 2400]) {
  return widths.map((w) => `${cld(publicId, w)} ${w}w`).join(", ");
}

/** Tiny blurred placeholder used while the real image loads. */
export function cldBlur(publicId: string) {
  return cld(publicId, 40, "e_blur:800");
}

export function ytThumb(id: string, quality: "maxresdefault" | "hqdefault" = "maxresdefault") {
  return `https://i.ytimg.com/vi/${id}/${quality}.jpg`;
}

export function ytEmbed(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
}
