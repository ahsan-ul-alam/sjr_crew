/* eslint-disable @next/next/no-img-element -- Cloudinary handles resizing */
import { about, portraitImage } from "@/content/site";
import { cld, cldSrcSet } from "@/lib/media";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden bg-bg-soft">
            <img
              src={cld(portraitImage, 900, "c_fill,ar_4:5,g_auto")}
              srcSet={cldSrcSet(portraitImage, [600, 900, 1300])}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt="Portrait"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center">
          <h2 className="label mb-8 text-fg">About</h2>
          <p className="text-2xl font-light leading-snug tracking-tight md:text-4xl">&ldquo;{about.heading}&rdquo;</p>
          <div className="mt-8 max-w-lg space-y-4 leading-relaxed text-fg/70">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <p className="label mb-4 text-muted">What I do</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-fg/80">
              {about.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
