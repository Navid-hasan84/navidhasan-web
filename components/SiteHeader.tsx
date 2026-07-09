"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const contactLinks = [
  {
    href: "https://wa.me/",
    label: "WhatsApp",
    icon: "☎",
  },
  {
    href: "mailto:hello@navidhasan.com",
    label: "Email",
    icon: "✉",
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: "in",
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: "⌘",
  },
  {
    href: "/contact",
    label: "Contact page",
    icon: "↗",
  },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label={`${site.name} home`} scroll={false}>
        <span className="brand-mark" aria-hidden="true">
          <Image
            src="/icone/new84.svg"
            alt=""
            width={64}
            height={64}
            className="brand-symbol-image"
            priority
          />
        </span>
        <span className="brand-divider" aria-hidden="true" />
        <span className="brand-name">Navid Hasan</span>
      </Link>

      <div className="header-actions">
        <nav className="desktop-nav" aria-label="Main navigation">
          {site.nav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <details className="contact-menu">
          <summary className="contact-toggle" aria-label="Open contacts">
            <span className="contact-toggle-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" focusable="false">
                <path
                  d="M11.8 4.5c2.1 2.6 3.2 5.1 3.2 7.4 0 1.2-.7 2.1-1.8 2.8l-1.4.8c1.4 3.2 3.7 5.5 6.9 6.8l.9-1.5c.6-1.1 1.6-1.7 2.8-1.7 2.1 0 4.5 1 7 3 .5.4.7 1 .5 1.7-.6 2.7-3.1 4.5-6.4 4.5C13 28.3 3.8 19.1 3.8 8.6c0-3.2 1.8-5.8 4.6-6.4.6-.2 1.1 0 1.6.5l1.8 1.8Z"
                />
                <path d="M16.5 9.4h10.7c.8 0 1.4.6 1.4 1.4v7.9" />
                <path d="m17 11 5.7 4.8 5.5-4.8" />
              </svg>
            </span>
            <span className="contact-toggle-label">Contacts</span>
          </summary>

          <div className="contact-panel" aria-label="Contacts">
            {contactLinks.map((item) => {
              const className =
                item.href === "/contact"
                  ? "contact-option contact-option-page"
                  : "contact-option";
              const content = (
                <>
                  <span className="contact-option-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </>
              );

              return item.href.startsWith("/") ? (
                <Link key={item.label} href={item.href} className={className}>
                  {content}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={className}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </details>
      </div>
    </header>
  );
}
