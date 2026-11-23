"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import Social from "./Social";

const links = [
  { href: "#films", label: "Films" },
  { href: "#photos", label: "Photos" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-bg/95 backdrop-blur transition-[border-color] duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="text-lg font-bold uppercase tracking-[0.2em] md:text-xl"
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="label text-fg/60 transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Social />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-2 right-2 h-px bg-fg transition-transform duration-300 ${
              open ? "top-1/2 rotate-45" : "top-[15px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-px bg-fg transition-transform duration-300 ${
              open ? "top-1/2 -rotate-45" : "top-[24px]"
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 md:hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="label block py-3 text-sm">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <Social />
          </li>
        </ul>
      </div>
    </header>
  );
}
