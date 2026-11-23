import { site } from "@/content/site";

const icons: Record<string, React.ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12z" />
    </svg>
  ),
  vimeo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 7.4c-.1 2-1.5 4.7-4.2 8.1-2.8 3.6-5.1 5.4-7.1 5.4-1.2 0-2.2-1.1-3-3.3L6.1 11.6C5.5 9.4 4.9 8.3 4.2 8.3c-.1 0-.7.3-1.6 1L1.6 8c1-.9 2-1.8 3-2.6 1.3-1.2 2.3-1.8 3-1.8 1.6-.2 2.5.9 2.9 3.2.4 2.5.7 4.1.8 4.7.5 2.1 1 3.1 1.5 3.1.4 0 1.1-.7 2-2.1.9-1.4 1.4-2.5 1.5-3.2.1-1.2-.3-1.8-1.5-1.8-.5 0-1.1.1-1.6.4 1.1-3.5 3.1-5.2 6.1-5.1 2.2.1 3.3 1.5 3.2 4.3z" />
    </svg>
  ),
};

/** Row of social icons. Unknown networks fall back to their text label. */
export default function Social({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {site.socials.map((s) => {
        const icon = icons[s.label.toLowerCase()];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-fg/60 transition-colors hover:text-fg"
            >
              {icon ?? <span className="label">{s.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
