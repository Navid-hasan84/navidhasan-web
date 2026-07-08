"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (currentScrollY < 24) {
        setIsHidden(false);
      } else if (scrollDifference > 8 && currentScrollY > 96) {
        setIsHidden(true);
      } else if (scrollDifference < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isHidden ? "site-header site-header-hidden" : "site-header"}>
      <Link href="/" className="brand" aria-label={`${site.name} home`}>
        <span className="brand-mark">◐</span>
        <span className="brand-name">{site.name}</span>
      </Link>

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
    </header>
  );
}
