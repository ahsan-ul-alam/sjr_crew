"use client";

import { useEffect, type ReactNode } from "react";

/** Full-screen overlay. Closes on Esc or backdrop click. */
export default function Modal({
  open,
  onClose,
  onKey,
  children,
  label,
}: {
  open: boolean;
  onClose: () => void;
  onKey?: (e: KeyboardEvent) => void;
  children: ReactNode;
  label: string;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else onKey?.(e);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose, onKey]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-bg p-4 text-fg md:p-12"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="label absolute right-4 top-5 z-10 opacity-60 transition-opacity hover:opacity-100 md:right-8 md:top-7"
      >
        Close ✕
      </button>
      <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
