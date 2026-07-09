"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BottomNavIcon = "home" | "works" | "services" | "chat" | "about";

const bottomNavItems = [
  {
    href: "/",
    label: "Home",
    icon: "home",
  },
  {
    href: "/work",
    label: "Works",
    icon: "works",
  },
  {
    href: "/services",
    label: "Services",
    icon: "services",
  },
  {
    href: "/contact",
    label: "Chat",
    icon: "chat",
  },
  {
    href: "/about",
    label: "About",
    icon: "about",
  },
] satisfies Array<{ href: string; label: string; icon: BottomNavIcon }>;

function MobileNavIcon({ icon }: { icon: BottomNavIcon }) {
  return (
    <svg viewBox="0 0 24 24" focusable="false">
      {icon === "home" ? (
        <>
          <path d="M4.5 11.2 12 5l7.5 6.2" />
          <path d="M6.8 10.5v8h10.4v-8" />
          <path d="M10 18.5v-4h4v4" />
        </>
      ) : null}

      {icon === "works" ? (
        <>
          <path d="M7.5 8.2V6.8c0-1 .8-1.8 1.8-1.8h5.4c1 0 1.8.8 1.8 1.8v1.4" />
          <path d="M4.5 8.2h15v10.3h-15z" />
          <path d="M4.8 12.2c2.1 1.2 4.5 1.8 7.2 1.8s5.1-.6 7.2-1.8" />
          <path d="M10.6 12.9h2.8" />
        </>
      ) : null}

      {icon === "services" ? (
        <>
          <path d="M12 4.8v2.1" />
          <path d="M12 17.1v2.1" />
          <path d="M4.8 12h2.1" />
          <path d="M17.1 12h2.1" />
          <path d="M7 7l1.5 1.5" />
          <path d="m15.5 15.5 1.5 1.5" />
          <path d="m17 7-1.5 1.5" />
          <path d="m8.5 15.5-1.5 1.5" />
          <circle cx="12" cy="12" r="3.2" />
        </>
      ) : null}

      {icon === "chat" ? (
        <>
          <path d="M5.2 7.3h13.6v8.9H8.6l-3.4 2.5z" />
          <path d="m6.1 8.4 5.9 4.5 5.9-4.5" />
        </>
      ) : null}

      {icon === "about" ? (
        <>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M6.3 19.3c1-3.1 3-4.7 5.7-4.7s4.7 1.6 5.7 4.7" />
          <path d="M12 11.3v1.2" />
        </>
      ) : null}
    </svg>
  );
}

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
            scroll={false}
            className={isActive ? "mobile-nav-item mobile-nav-active" : "mobile-nav-item"}
          >
            <span className="mobile-nav-icon" aria-hidden="true">
              <MobileNavIcon icon={item.icon} />
            </span>
            <span className="mobile-nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
