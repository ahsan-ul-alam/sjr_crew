import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const sans = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} antialiased`}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
