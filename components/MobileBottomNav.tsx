"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const bottomNavItems = [
  {
    href: "/",
    label: "Home",
    icon: "◐",
  },
  {
    href: "/work",
    label: "Work",
    icon: "✦",
  },
  {
    href: "/services",
    label: "Services",
    icon: "●",
  },
  {
    href: "/contact",
    label: "Chat",
    icon: "✉",
  },
  {
    href: "/portal",
    label: "Orbit",
    icon: "◎",
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {bottomNavItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "mobile-nav-item mobile-nav-active" : "mobile-nav-item"}
          >
            <span className="mobile-nav-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="mobile-nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
