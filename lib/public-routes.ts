export type PublicRoute = Readonly<{
  path:
    | "/"
    | "/work"
    | "/services"
    | "/about"
    | "/contact"
    | "/journal";

  title: string;
  description: string;

  changeFrequency:
    | "weekly"
    | "monthly"
    | "yearly";

  priority: number;
}>;

export const publicRoutes = [
  {
    path: "/",
    title:
      "Navid Hasan — Independent Full-Stack Developer",

    description:
      "Official website of Navid Hasan, an independent full-stack developer in Bangladesh and founder of Labonno.",

    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/work",
    title: "Selected Work",

    description:
      "Selected platforms and systems developed by Navid Hasan, including Labonno and the Milestogo Business Operations Platform.",

    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services",
    title: "Full-Stack Development Services",

    description:
      "Business websites, custom web systems, internal portals, backend engineering, deployment, and ongoing product development.",

    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About Navid Hasan",

    description:
      "Professional identity, engineering approach, current projects, and development direction of Navid Hasan.",

    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact",
    title: "Contact Navid Hasan",

    description:
      "Direct project inquiry and professional contact information for Navid Hasan.",

    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/journal",
    title: "Engineering Journal",

    description:
      "Engineering notes, project reflections, production lessons, and system design writing by Navid Hasan.",

    changeFrequency: "weekly",
    priority: 0.7,
  },
] as const satisfies readonly PublicRoute[];
