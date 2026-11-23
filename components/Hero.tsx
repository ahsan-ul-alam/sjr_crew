/* eslint-disable @next/next/no-img-element -- Cloudinary handles resizing */
import { about, heroImage, site } from "@/content/site";
import { cld, cldSrcSet } from "@/lib/media";

export default function Hero() {
  return (
    <section id="top">
      <p className="label px-4 pb-6 pt-2 text-muted md:px-8 md:pb-8">{site.role}</p>
      <div className="px-4 md:px-8">
        <div className="relative h-[62vh] min-h-[380px] overflow-hidden bg-bg-soft md:h-[78vh]">
          <img
            src={cld(heroImage, 1600)}
            srcSet={cldSrcSet(heroImage, [800, 1200, 1600, 2400, 3200])}
            sizes="100vw"
            alt=""
            fetchPriority="high"
            className="fade-in absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-8 md:py-14">
        <p className="max-w-2xl text-2xl font-light leading-snug tracking-tight md:text-4xl">
          &ldquo;{site.tagline}&rdquo;
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 md:max-w-xs md:justify-end">
          {about.services.map((s, i) => (
            <li key={s} className="label text-muted">
              {s}
              {i < about.services.length - 1 && <span className="ml-3 text-line">/</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
