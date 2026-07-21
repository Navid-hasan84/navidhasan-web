"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useLayoutEffect,
  useRef,
} from "react";

import {
  site,
  type SiteNavigationItem,
} from "@/lib/site";

import brandStyles from "./header/Brand.module.css";
import navigationStyles from "./header/DesktopNavigation.module.css";
import shellStyles from "./header/HeaderShell.module.css";

function isCurrentRoute(
  pathname: string,
  item: SiteNavigationItem,
): boolean {
  if (item.href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(item.href);
}

export default function SiteHeader() {
  const pathname = usePathname();

  const navigationRef =
    useRef<HTMLElement | null>(null);
  const indicatorRef =
    useRef<HTMLSpanElement | null>(null);
  const previousGeometryRef = useRef<{
    left: number;
    width: number;
  } | null>(null);

  const contactIsActive =
    pathname === "/contact" ||
    pathname.startsWith("/contact/");

  useLayoutEffect(() => {
    const navigation = navigationRef.current;
    const indicator = indicatorRef.current;

    if (!navigation || !indicator) {
      return;
    }

    let cancelled = false;

    const readActiveGeometry = () => {
      const activeLink =
        navigation.querySelector<HTMLElement>(
          '[aria-current="page"]',
        );

      if (!activeLink) {
        return null;
      }

      const navigationRect =
        navigation.getBoundingClientRect();
      const activeRect =
        activeLink.getBoundingClientRect();

      return {
        left:
          activeRect.left -
          navigationRect.left,
        width: activeRect.width,
      };
    };

    const setGeometry = (
      left: number,
      width: number,
    ) => {
      indicator.style.transform =
        `translateX(${left}px)`;
      indicator.style.width = `${width}px`;
    };

    const runStage = async (
      from: {
        left: number;
        width: number;
      },
      to: {
        left: number;
        width: number;
      },
      duration: number,
    ) => {
      const animation = indicator.animate(
        [
          {
            transform:
              `translateX(${from.left}px)`,
            width: `${from.width}px`,
          },
          {
            transform:
              `translateX(${to.left}px)`,
            width: `${to.width}px`,
          },
        ],
        {
          duration,
          easing:
            "cubic-bezier(0.45, 0, 0.55, 1)",
          fill: "forwards",
        },
      );

      try {
        await animation.finished;
      } catch {
        return false;
      }

      if (cancelled) {
        animation.cancel();
        return false;
      }

      setGeometry(to.left, to.width);
      animation.cancel();

      return true;
    };

    const nextGeometry =
      readActiveGeometry();

    if (!nextGeometry) {
      indicator.style.opacity = "0";
      previousGeometryRef.current = null;
      return;
    }

    const previousGeometry =
      previousGeometryRef.current;

    indicator
      .getAnimations()
      .forEach((animation) =>
        animation.cancel(),
      );

    indicator.style.opacity = "1";

    if (
      !previousGeometry ||
      (
        previousGeometry.left ===
          nextGeometry.left &&
        previousGeometry.width ===
          nextGeometry.width
      )
    ) {
      setGeometry(
        nextGeometry.left,
        nextGeometry.width,
      );

      previousGeometryRef.current =
        nextGeometry;

      return;
    }

    const compactWidth = 6;

    const previousCompact = {
      left:
        previousGeometry.left +
        previousGeometry.width / 2 -
        compactWidth / 2,
      width: compactWidth,
    };

    const nextCompact = {
      left:
        nextGeometry.left +
        nextGeometry.width / 2 -
        compactWidth / 2,
      width: compactWidth,
    };

    setGeometry(
      previousGeometry.left,
      previousGeometry.width,
    );

    const animateIndicator = async () => {
      const shrank = await runStage(
        previousGeometry,
        previousCompact,
        350,
      );

      if (!shrank) {
        return;
      }

      const travelled = await runStage(
        previousCompact,
        nextCompact,
        550,
      );

      if (!travelled) {
        return;
      }

      const expanded = await runStage(
        nextCompact,
        nextGeometry,
        450,
      );

      if (!expanded) {
        return;
      }

      previousGeometryRef.current =
        nextGeometry;
    };

    void animateIndicator();

    const handleResize = () => {
      const currentGeometry =
        readActiveGeometry();

      if (!currentGeometry) {
        return;
      }

      indicator
        .getAnimations()
        .forEach((animation) =>
          animation.cancel(),
        );

      setGeometry(
        currentGeometry.left,
        currentGeometry.width,
      );

      previousGeometryRef.current =
        currentGeometry;
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      cancelled = true;

      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, [pathname]);

  return (
    <header className={shellStyles.header}>
      <div className={shellStyles.surface}>
        <div className={shellStyles.inner}>
          <Link
            href="/"
            className={brandStyles.brand}
            aria-label={`${site.name} home`}
          >
            <span
              className={brandStyles.mark}
              aria-hidden="true"
            >
              <Image
                src="/icone/n49.svg"
                alt=""
                width={40}
                height={40}
                className={brandStyles.image}
                priority
              />
            </span>

            <span className={brandStyles.copy}>
              <span className={brandStyles.name}>
                {site.name}
              </span>

              <span className={brandStyles.role}>
                Full-stack developer
              </span>
            </span>
          </Link>

          <div className={shellStyles.actions}>
            <nav
              ref={navigationRef}
              className={
                navigationStyles.navigation
              }
              aria-label="Main navigation"
            >
              {site.nav.map((item) => {
                const isActive = isCurrentRoute(
                  pathname,
                  item,
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={
                      isActive
                        ? "page"
                        : undefined
                    }
                    className={
                      isActive
                        ? `${navigationStyles.link} ${navigationStyles.activeLink}`
                        : navigationStyles.link
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}

              <span
                ref={indicatorRef}
                className={
                  navigationStyles.activeIndicator
                }
                aria-hidden="true"
              />
            </nav>

            <Link
              href={site.contact.href}
              aria-current={
                contactIsActive
                  ? "page"
                  : undefined
              }
              className={
                contactIsActive
                  ? `${navigationStyles.contactButton} ${navigationStyles.contactButtonActive}`
                  : navigationStyles.contactButton
              }
            >
              <span>{site.contact.label}</span>

              <span
                className={
                  navigationStyles.contactArrow
                }
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={shellStyles.fade}
        aria-hidden="true"
      />
    </header>
  );
}
