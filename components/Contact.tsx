import { site } from "@/content/site";
import Reveal from "./Reveal";
import Social from "./Social";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <Reveal className="flex flex-col items-center px-4 py-20 text-center md:py-28">
        <h2 className="label mb-6 text-muted">Contact</h2>
        <p className="max-w-2xl text-3xl font-light leading-tight tracking-tight md:text-5xl">
          Have a project in mind? Let&apos;s talk.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="label mt-10 border border-fg px-8 py-4 transition-colors hover:bg-fg hover:text-bg"
        >
          {site.email}
        </a>
        {site.phone && (
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-4 text-sm text-muted hover:text-fg">
            {site.phone}
          </a>
        )}
        <Social className="mt-10" />
      </Reveal>

      <footer className="flex flex-col items-center gap-2 border-t border-line px-4 py-6 text-center md:flex-row md:justify-between md:px-8">
        <p className="label text-muted">© {site.name}</p>
        <p className="label text-muted">{site.role}</p>
      </footer>
    </section>
  );
}
