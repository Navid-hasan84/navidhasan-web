import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: site.title,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            <span className="brand-mark">◐</span>
            <span>{site.name}</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Moonlit systems for work, growth, and creation.</span>
        </footer>
      </body>
    </html>
  );
}
