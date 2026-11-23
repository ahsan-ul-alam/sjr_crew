"use client";
/* eslint-disable @next/next/no-img-element -- YouTube thumbnails */

import { useState } from "react";
import { videos, type Video } from "@/content/site";
import { ytEmbed, ytThumb } from "@/lib/media";
import Modal from "./Modal";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Card({ video, onPlay, large = false }: { video: Video; onPlay: () => void; large?: boolean }) {
  const meta = [video.category, video.year].filter(Boolean).join(" · ");
  return (
    <button type="button" onClick={onPlay} className="group block w-full text-left">
      <div className="relative aspect-video overflow-hidden bg-bg-soft">
        <img
          src={ytThumb(video.id)}
          alt=""
          loading="lazy"
          onError={(e) => {
            // Not every video has a max-res thumbnail; fall back gracefully.
            const img = e.currentTarget;
            if (!img.src.includes("hqdefault")) img.src = ytThumb(video.id, "hqdefault");
          }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/25">
          <span
            className={`flex items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
              large ? "h-16 w-16" : "h-12 w-12"
            }`}
          >
            <svg viewBox="0 0 12 14" fill="currentColor" className="ml-0.5 h-3.5 w-3.5">
              <path d="M0 0l12 7-12 7z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className={`font-medium tracking-tight ${large ? "text-lg md:text-xl" : "text-base"}`}>{video.title}</h3>
        {meta && <p className="label shrink-0 text-muted">{meta}</p>}
      </div>
    </button>
  );
}

export default function Films() {
  const [playing, setPlaying] = useState<Video | null>(null);
  const [featured, ...rest] = videos;

  if (!featured) return null;

  return (
    <section id="films" className="py-16 md:py-24">
      <SectionHeader title="Films" />

      <div className="px-4 md:px-8">
        <Reveal>
          <Card video={featured} onPlay={() => setPlaying(featured)} large />
        </Reveal>

        {rest.length > 0 && (
          <div className="mt-10 grid gap-x-4 gap-y-10 sm:grid-cols-2 md:gap-x-6">
            {rest.map((v, i) => (
              <Reveal key={v.id} delay={(i % 2) * 100}>
                <Card video={v} onPlay={() => setPlaying(v)} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <Modal open={!!playing} onClose={() => setPlaying(null)} label={playing?.title ?? "Video"}>
        {playing && (
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={ytEmbed(playing.id)}
                title={playing.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="label mt-4 text-muted">{playing.title}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
