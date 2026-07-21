import Link from "next/link";

import bodyStyles from "./home/BodySections.module.css";
import capabilityStyles from "./home/CapabilityPanel.module.css";
import heroStyles from "./home/Hero.module.css";
import introductionStyles from "./home/Introduction.module.css";

import { createPageMetadata } from "@/lib/metadata";

import StructuredData from "@/components/seo/StructuredData";
import { homePageStructuredData } from "@/lib/page-structured-data";


export const metadata = createPageMetadata({
  title: "Navid Hasan — Independent Full-Stack Developer",
  description: "Official website of Navid Hasan, an independent full-stack developer in Bangladesh and founder of Labonno. Explore his business websites, custom web systems, internal platforms, backend engineering, and production work.",
  path: "/",
});
const capabilities = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Clear, responsive websites that explain your business, establish trust, and help customers take action.",
  },
  {
    number: "02",
    title: "Custom web systems",
    description:
      "Dashboards, portals, catalogs, workflows, and internal tools shaped around how your organization actually works.",
  },
  {
    number: "03",
    title: "Backend and deployment",
    description:
      "APIs, authentication, databases, production infrastructure, monitoring, and maintainable foundations.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "Django",
  "Flask",
  "PostgreSQL",
  "Linux",
];

const featuredProjects = [
  {
    index: "01",
    name: "Labonno",
    type: "Commerce and catalog platform",
    description:
      "A modern commerce foundation with structured products, variants, brands, categories, publication workflows, founder administration, and production deployment.",
    details: [
      "Next.js storefront and administration",
      "Django API and PostgreSQL",
      "Auditable catalog workflows",
    ],
    href: "/work",
  },
  {
    index: "02",
    name: "Milestogo",
    type: "Business operations system",
    description:
      "A growing operational platform connecting formulation, production, product governance, pricing, dealer onboarding, permissions, and internal business workflows.",
    details: [
      "Role-based internal portals",
      "Production and inventory foundations",
      "Secure deployment and infrastructure",
    ],
    href: "/work",
  },
];

const services = [
  {
    number: "01",
    title: "Product thinking",
    description:
      "I turn unclear requirements into a focused structure, practical scope, and implementation plan before complexity takes over.",
  },
  {
    number: "02",
    title: "Full-stack development",
    description:
      "I build the interface, backend, data model, authentication, permissions, and business logic as one connected product.",
  },
  {
    number: "03",
    title: "Production delivery",
    description:
      "I prepare systems for real use with testing, deployment, SSL, databases, backups, monitoring, and maintainable operations.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the business, users, constraints, and the actual problem the product must solve.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Define the data, workflows, permissions, interfaces, and delivery sequence before implementation.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop in focused, testable checkpoints while keeping the system coherent and maintainable.",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "Deploy, verify, secure, document, and improve the product based on real production use.",
  },
];

export default function Home() {
  return (
    <>

      <StructuredData
        id="home-page-structured-data"
        data={homePageStructuredData}
      />
<section className={heroStyles.hero}>
        <div className={heroStyles.inner}>
          <div className={heroStyles.content}>
            <p className={heroStyles.eyebrow}>
              Independent full-stack developer
            </p>

            <h1 className={heroStyles.title}>
              I build digital systems that move businesses
              forward.
            </h1>

            <p className={heroStyles.description}>
              From a focused business website to a custom
              operational platform, I turn real requirements into
              reliable products that are designed, built, and
              prepared for production.
            </p>

            <div className={heroStyles.actions}>
              <Link
                href="/work"
                className={heroStyles.primaryAction}
              >
                Explore selected work
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className={heroStyles.secondaryAction}
              >
                Discuss a project
              </Link>
            </div>

            <div
              className={heroStyles.technologyList}
              aria-label="Core technologies"
            >
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <aside
            className={capabilityStyles.panel}
            aria-label="Development capabilities"
          >
            <div className={capabilityStyles.header}>
              <div>
                <p className={capabilityStyles.eyebrow}>
                  End-to-end development
                </p>

                <h2>
                  One person responsible for the complete system.
                </h2>
              </div>

              <span
                className={capabilityStyles.mark}
                aria-hidden="true"
              >
                NH
              </span>
            </div>

            <div className={capabilityStyles.list}>
              {capabilities.map((capability) => (
                <article
                  key={capability.number}
                  className={capabilityStyles.capability}
                >
                  <span className={capabilityStyles.number}>
                    {capability.number}
                  </span>

                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={capabilityStyles.footer}>
              <span>Strategy</span>
              <span>Interface</span>
              <span>Engineering</span>
              <span>Production</span>
            </div>
          </aside>
        </div>

        <div
          className={heroStyles.scrollCue}
          aria-hidden="true"
        >
          <span>Selected work below</span>
          <span className={heroStyles.scrollLine} />
        </div>
      </section>

      <section
        className={introductionStyles.section}
        aria-labelledby="introduction-title"
      >
        <div className={introductionStyles.inner}>
          <p className={introductionStyles.label}>
            Direct and accountable
          </p>

          <h2 id="introduction-title">
            You work directly with the person designing and
            building your product.
          </h2>

          <div className={introductionStyles.copy}>
            <p>
              I stay involved from the first requirement through
              architecture, implementation, deployment, and
              refinement.
            </p>

            <p>
              There is no handoff between a salesperson, designer,
              developer, and support team. Decisions remain clear,
              responsibility stays visible, and the product grows
              as one connected system.
            </p>
          </div>
        </div>
      </section>

      <section
        className={bodyStyles.workSection}
        aria-labelledby="selected-work-title"
      >
        <div className={bodyStyles.sectionHeading}>
          <div>
            <p className={bodyStyles.sectionLabel}>
              Selected systems
            </p>

            <h2 id="selected-work-title">
              Real products built around real operations.
            </h2>
          </div>

          <Link
            href="/work"
            className={bodyStyles.textLink}
          >
            View all work
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={bodyStyles.projectList}>
          {featuredProjects.map((project) => (
            <Link
              href={project.href}
              key={project.name}
              className={bodyStyles.projectCard}
            >
              <div className={bodyStyles.projectTopline}>
                <span>{project.index}</span>
                <span>{project.type}</span>
              </div>

              <div className={bodyStyles.projectMain}>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>

                <span
                  className={bodyStyles.projectArrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className={bodyStyles.projectDetails}>
                {project.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className={bodyStyles.servicesSection}
        aria-labelledby="capabilities-title"
      >
        <div className={bodyStyles.servicesIntro}>
          <p className={bodyStyles.sectionLabel}>
            What I bring
          </p>

          <h2 id="capabilities-title">
            More than an interface. A complete product foundation.
          </h2>

          <p>
            A useful system needs clear thinking, disciplined
            engineering, and dependable delivery. I work across
            all three.
          </p>

          <Link
            href="/services"
            className={bodyStyles.textLink}
          >
            Explore services
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={bodyStyles.serviceList}>
          {services.map((service) => (
            <article
              key={service.number}
              className={bodyStyles.serviceItem}
            >
              <span className={bodyStyles.serviceNumber}>
                {service.number}
              </span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={bodyStyles.processSection}
        aria-labelledby="process-title"
      >
        <div className={bodyStyles.sectionHeading}>
          <div>
            <p className={bodyStyles.sectionLabel}>
              Working method
            </p>

            <h2 id="process-title">
              A deliberate path from requirement to production.
            </h2>
          </div>

          <p className={bodyStyles.headingDescription}>
            Each stage reduces uncertainty before the next one
            begins.
          </p>
        </div>

        <div className={bodyStyles.processGrid}>
          {process.map((step) => (
            <article
              key={step.number}
              className={bodyStyles.processItem}
            >
              <div className={bodyStyles.processMarker}>
                <span>{step.number}</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={bodyStyles.statementSection}
        aria-labelledby="statement-title"
      >
        <div className={bodyStyles.statementMeta}>
          <p className={bodyStyles.sectionLabel}>
            Engineering mindset
          </p>

          <span>Based in Bangladesh · Working globally</span>
        </div>

        <div className={bodyStyles.statementContent}>
          <h2 id="statement-title">
            I care about the details people notice—and the
            foundations they never have to think about.
          </h2>

          <div className={bodyStyles.statementCopy}>
            <p>
              Good software should feel clear on the surface and
              remain dependable underneath. That means thoughtful
              interfaces, secure permissions, structured data,
              tested workflows, and production systems that can be
              understood and maintained.
            </p>

            <Link
              href="/about"
              className={bodyStyles.textLink}
            >
              More about my approach
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className={bodyStyles.contactSection}
        aria-labelledby="contact-title"
      >
        <div className={bodyStyles.contactTopline}>
          <span>Available for selected projects</span>
          <span>Independent full-stack developer</span>
        </div>

        <div className={bodyStyles.contactMain}>
          <div>
            <p className={bodyStyles.contactLabel}>
              Have something meaningful to build?
            </p>

            <h2 id="contact-title">
              Let&apos;s turn it into a system that works.
            </h2>
          </div>

          <Link
            href="/contact"
            className={bodyStyles.contactAction}
          >
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
