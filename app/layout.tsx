import type { Metadata } from "next";

import "./globals.css";

import SiteFooter from "@/components/footer/SiteFooter";
import MobileBottomNav from "@/components/navigation/MobileBottomNav";
import SiteHeader from "@/components/navigation/SiteHeader";
import { site } from "@/lib/site";
import {
  rootStructuredData,
  serializeStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },

  description: site.description,

  applicationName: site.name,
  manifest: "/manifest.webmanifest",

  authors: [
    {
      name: site.name,
      url: site.url,
    },
  ],

  creator: site.name,
  publisher: site.name,

  category: "technology",

  keywords: [
    "Navid Hasan",
    "Navid Hasan full-stack developer",
    "full-stack developer Bangladesh",
    "independent developer Bangladesh",
    "business website developer",
    "custom web application developer",
    "backend developer Bangladesh",
    "Labonno founder",
    "Labonno",
    "labonno.online",
    "Milestogo",
    "Next.js developer",
    "Django developer",
    "Flask developer",
    "PostgreSQL developer",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: site.locale,

    url: site.url,
    siteName: site.name,

    title: site.title,
    description: site.description,
  },

  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.language}>
      <head>
        <script
          id="root-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData(
              rootStructuredData,
            ),
          }}
        />
      </head>

      <body>
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />

        <MobileBottomNav />
      </body>
    </html>
  );
}
