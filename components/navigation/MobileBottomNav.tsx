"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { site } from "@/lib/site";

import styles from "./MobileBottomNav.module.css";

type BottomNavIcon =
  | "home"
  | "work"
  | "services"
  | "contact"
  | "about";

const iconByPath: Readonly<
  Record<string, BottomNavIcon>
> = {
  "/": "home",
  "/work": "work",
  "/services": "services",
  "/contact": "contact",
  "/about": "about",
};

function MobileNavIcon({
  icon,
}: {
  icon: BottomNavIcon;
}) {
  return (
    <svg viewBox="0 0 24 24" focusable="false">
      {icon === "home" ? (
        <>
          <path d="M4.5 11.2 12 5l7.5 6.2" />
          <path d="M6.8 10.5v8h10.4v-8" />
          <path d="M10 18.5v-4h4v4" />
        </>
      ) : null}

      {icon === "work" ? (
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

      {icon === "contact" ? (
        <>
          <path d="M5 6.8h14v9.4H9l-4 3z" />
          <path d="M8 10.2h8" />
          <path d="M8 13.2h5.5" />
        </>
      ) : null}

      {icon === "about" ? (
        <>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M6.3 19.3c1-3.1 3-4.7 5.7-4.7s4.7 1.6 5.7 4.7" />
        </>
      ) : null}
    </svg>
  );
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  const previousScrollY = useRef(0);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const distance =
        currentScrollY - previousScrollY.current;

      if (currentScrollY < 80) {
        setIsHidden(false);
      } else if (Math.abs(distance) > 6) {
        setIsHidden(distance > 0);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        isHidden
          ? `${styles.navigation} ${styles.hidden}`
          : styles.navigation
      }
      aria-label="Mobile navigation"
    >
      {site.mobileNav.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              isActive ? "page" : undefined
            }
            className={
              isActive
                ? `${styles.item} ${styles.active}`
                : styles.item
            }
          >
            <span
              className={styles.icon}
              aria-hidden="true"
            >
              <MobileNavIcon
                icon={iconByPath[item.href]}
              />
            </span>

            <span className={styles.label}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
