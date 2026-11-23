"use client";
/* eslint-disable @next/next/no-img-element -- Cloudinary handles resizing */

import { useCallback, useMemo, useState } from "react";
import { photos } from "@/content/site";
import { cld, cldSrcSet } from "@/lib/media";
import Modal from "./Modal";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(photos.map((p) => p.category)))], []);
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const shown = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.category === filter)),
    [filter],
  );
  const count = shown.length;
  const current = index !== null ? shown[index] : null;

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  );
  const close = useCallback(() => setIndex(null), []);
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    },
    [step],
  );

  return (
    <section id="photos" className="py-16 md:py-24">
      <SectionHeader
        title="Photos"
        aside={
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`label border-b pb-1 transition-colors ${
                    filter === c ? "border-fg text-fg" : "border-transparent text-muted hover:text-fg"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        }
      />

      {/* Masonry via CSS columns, tight gutters */}
      <div key={filter} className="columns-1 gap-2 px-4 sm:columns-2 md:px-8 lg:columns-3">
        {shown.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIndex(i)}
            className="group mb-2 block w-full break-inside-avoid overflow-hidden bg-bg-soft"
          >
            <img
              src={cld(p.id, 800)}
              srcSet={cldSrcSet(p.id, [480, 800, 1200])}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              alt={p.alt}
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add("loaded")}
              ref={(img) => {
                // Cached images can finish loading before React attaches onLoad.
                if (img?.complete) img.classList.add("loaded");
              }}
              className="lazy-fade block w-full transition-[opacity,filter] duration-500 group-hover:brightness-90"
            />
          </button>
        ))}
      </div>

      <Modal open={!!current} onClose={close} onKey={onKey} label={current?.alt ?? "Photo"}>
        {current && (
          <div className="flex h-[calc(100svh-6rem)] flex-col items-center justify-center">
            <img
              key={current.id}
              src={cld(current.id, 2000)}
              srcSet={cldSrcSet(current.id, [1200, 1600, 2400])}
              sizes="90vw"
              alt={current.alt}
              className="fade-in min-h-0 w-auto max-w-full flex-1 object-contain"
            />
            <div className="mt-5 flex w-full max-w-3xl items-center justify-between">
              <button type="button" onClick={() => step(-1)} className="label text-muted hover:text-fg">
                ← Prev
              </button>
              <p className="label text-muted">
                {(index ?? 0) + 1} / {count}
              </p>
              <button type="button" onClick={() => step(1)} className="label text-muted hover:text-fg">
                Next →
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
