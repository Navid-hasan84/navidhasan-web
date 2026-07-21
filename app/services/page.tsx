import Link from "next/link";

import styles from "./ServicesPage.module.css";

import { createPageMetadata } from "@/lib/metadata";

import StructuredData from "@/components/seo/StructuredData";
import { servicesPageStructuredData } from "@/lib/page-structured-data";



export const metadata = createPageMetadata({
  title: "Full-Stack Development Services",
  description: "Business websites, custom web systems, internal portals, backend engineering, databases, deployment, and ongoing product development services by Navid Hasan.",
  path: "/services",
});
const serviceIndex = [
  {
    number: "01",
    title: "Business websites",
    href: "#business-websites",
  },
  {
    number: "02",
    title: "Custom web systems",
    href: "#custom-systems",
  },
  {
    number: "03",
    title: "Internal tools and portals",
    href: "#internal-tools",
  },
  {
    number: "04",
    title: "Backend and infrastructure",
    href: "#backend-infrastructure",
  },
  {
    number: "05",
    title: "Ongoing engineering",
    href: "#ongoing-engineering",
  },
] as const;

const services = [
  {
    id: "business-websites",
    number: "01",
    title: "Business websites",
    subtitle:
      "A credible digital presence designed to explain, persuade, and support real business goals.",
    description:
      "This is for businesses that need more than a template with attractive sections. I design and build clear, responsive websites that communicate the offer, establish trust, and guide visitors toward meaningful action.",
    suitableFor: [
      "Company and corporate websites",
      "Professional service businesses",
      "Product and brand websites",
      "Campaign or launch websites",
      "Modern website replacements",
    ],
    includes: [
      "Content and information structure",
      "Responsive interface development",
      "Performance and accessibility foundations",
      "Search and sharing metadata",
      "Contact and conversion pathways",
      "Deployment and production verification",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Static delivery",
      "Cloud deployment",
    ],
  },
  {
    id: "custom-systems",
    number: "02",
    title: "Custom web systems",
    subtitle:
      "Purpose-built software for workflows that ordinary website tools cannot support.",
    description:
      "When a business needs structured data, roles, approvals, dashboards, records, or connected workflows, I design the product around those operational requirements rather than forcing them into a generic platform.",
    suitableFor: [
      "Operational dashboards",
      "Catalog and commerce systems",
      "Workflow management",
      "Approval and publication systems",
      "Business-specific platforms",
    ],
    includes: [
      "Requirement and workflow analysis",
      "Data and domain modelling",
      "Authentication and permissions",
      "Frontend and backend development",
      "API and database architecture",
      "Testing and production deployment",
    ],
    technologies: [
      "Next.js",
      "Django",
      "Flask",
      "PostgreSQL",
      "REST APIs",
      "Linux",
    ],
  },
  {
    id: "internal-tools",
    number: "03",
    title: "Internal tools and portals",
    subtitle:
      "Focused interfaces that help teams manage information and complete responsibilities clearly.",
    description:
      "Internal software should reduce confusion rather than introduce another complicated system. I build role-aware portals, administrative tools, and practical interfaces around the tasks people perform every day.",
    suitableFor: [
      "Administration portals",
      "Staff and team dashboards",
      "Dealer or partner portals",
      "Customer account areas",
      "Data-entry and review workflows",
    ],
    includes: [
      "Role-specific navigation",
      "Permission-aware interfaces",
      "Structured forms and validation",
      "Status and review workflows",
      "Audit-friendly records",
      "Operational usability refinement",
    ],
    technologies: [
      "React",
      "Django",
      "Flask",
      "PostgreSQL",
      "Authentication",
      "Role-based access",
    ],
  },
  {
    id: "backend-infrastructure",
    number: "04",
    title: "Backend and infrastructure",
    subtitle:
      "The technical foundation that keeps a product secure, connected, and dependable.",
    description:
      "A polished interface is only one part of a working application. I build APIs, authentication, databases, permissions, deployment environments, and the production services required to operate the system responsibly.",
    suitableFor: [
      "Application backends",
      "API development",
      "Authentication systems",
      "Database-backed platforms",
      "Production deployment",
    ],
    includes: [
      "API and service architecture",
      "Authentication and authorization",
      "Database design and migrations",
      "Linux and Nginx configuration",
      "SSL and domain setup",
      "Backup and recovery foundations",
    ],
    technologies: [
      "Python",
      "Django",
      "Flask",
      "PostgreSQL",
      "Nginx",
      "Gunicorn",
      "Cloud infrastructure",
    ],
  },
  {
    id: "ongoing-engineering",
    number: "05",
    title: "Ongoing engineering",
    subtitle:
      "Continued development for products that need careful improvement after the first release.",
    description:
      "Some systems are not finished in a single project cycle. I can continue working with a product through focused improvements, new workflows, maintenance, deployment support, and technical decisions as real usage reveals what matters next.",
    suitableFor: [
      "Growing business platforms",
      "Existing applications",
      "Long-term product development",
      "Technical cleanup and stabilization",
      "Production support",
    ],
    includes: [
      "Prioritized development checkpoints",
      "Bug investigation and correction",
      "Security and dependency maintenance",
      "Deployment and operational support",
      "Architecture guidance",
      "Ongoing product refinement",
    ],
    technologies: [
      "Planning",
      "Engineering",
      "Testing",
      "Deployment",
      "Monitoring",
      "Maintenance",
    ],
  },
] as const;

const engagementSteps = [
  {
    number: "01",
    title: "Define the real problem",
    description:
      "We clarify the business goal, users, constraints, current process, and what success should mean before deciding what to build.",
  },
  {
    number: "02",
    title: "Shape the right scope",
    description:
      "The product is divided into a clear first release and sensible later stages so cost and complexity remain controlled.",
  },
  {
    number: "03",
    title: "Build in checkpoints",
    description:
      "The work progresses through focused, reviewable sections instead of disappearing into one large and uncertain delivery.",
  },
  {
    number: "04",
    title: "Prepare for production",
    description:
      "Testing, deployment, security, data, domains, services, and operational verification are treated as part of the product.",
  },
] as const;

const responsibilities = [
  {
    title: "What I take responsibility for",
    items: [
      "Technical planning and implementation",
      "Frontend and backend development",
      "Data and workflow structure",
      "Testing and production preparation",
      "Clear communication about progress and risks",
    ],
  },
  {
    title: "What I need from the client",
    items: [
      "Accurate business requirements",
      "Timely decisions and feedback",
      "Access to required accounts and content",
      "A clear owner for approvals",
      "Respect for the agreed scope and process",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <>

      <StructuredData
        id="services-page-structured-data"
        data={servicesPageStructuredData}
      />
<section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMain}>
            <p className={styles.eyebrow}>
              Services
            </p>

            <h1>
              From a clear website to a complete business system.
            </h1>
          </div>

          <div className={styles.heroAside}>
            <p>
              I design and build practical digital products across
              interface, backend, data, deployment, and the
              operational details that make software useful in
              real work.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/contact"
                className={styles.primaryLink}
              >
                Discuss your project
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/work"
                className={styles.textLink}
              >
                See selected work
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.serviceIndex}>
          {serviceIndex.map((service) => (
            <a
              key={service.number}
              href={service.href}
              className={styles.indexItem}
            >
              <span className={styles.indexNumber}>
                {service.number}
              </span>

              <span className={styles.indexTitle}>
                {service.title}
              </span>

              <span
                className={styles.indexArrow}
                aria-hidden="true"
              >
                ↓
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        className={styles.positioning}
        aria-labelledby="positioning-title"
      >
        <div className={styles.positioningLabel}>
          <p>What the work includes</p>
        </div>

        <div className={styles.positioningMain}>
          <h2 id="positioning-title">
            Not only the screen people see, but the system that
            makes it work.
          </h2>

          <div className={styles.positioningCopy}>
            <p>
              A serious product needs more than attractive pages.
              It may need structured data, permissions, APIs,
              validation, deployment, recovery planning, and a
              workflow that makes sense to the people using it.
            </p>

            <p>
              I work across those layers so the result feels
              coherent rather than assembled from disconnected
              decisions.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.serviceCollection}>
        {services.map((service) => (
          <article
            id={service.id}
            key={service.id}
            className={styles.service}
          >
            <header className={styles.serviceHeader}>
              <div className={styles.serviceIdentity}>
                <div className={styles.serviceMeta}>
                  <span>{service.number}</span>
                  <span>Service area</span>
                </div>

                <h2>{service.title}</h2>
              </div>

              <p>{service.subtitle}</p>
            </header>

            <div className={styles.serviceBody}>
              <div className={styles.serviceDescription}>
                <p className={styles.smallLabel}>
                  The purpose
                </p>

                <p className={styles.largeCopy}>
                  {service.description}
                </p>
              </div>

              <div className={styles.serviceDetails}>
                <section>
                  <p className={styles.smallLabel}>
                    Suitable for
                  </p>

                  <ul>
                    {service.suitableFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <p className={styles.smallLabel}>
                    An engagement may include
                  </p>

                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <footer className={styles.serviceFooter}>
              <div className={styles.technologyList}>
                {service.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className={styles.serviceAction}
              >
                Discuss this service
                <span aria-hidden="true">↗</span>
              </Link>
            </footer>
          </article>
        ))}
      </section>

      <section
        className={styles.engagement}
        aria-labelledby="engagement-title"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              Working together
            </p>

            <h2 id="engagement-title">
              A direct process with visible responsibility.
            </h2>
          </div>

          <p>
            You communicate with the person planning, building,
            testing, and preparing the product for production.
          </p>
        </div>

        <div className={styles.engagementGrid}>
          {engagementSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.delivery}
        aria-labelledby="delivery-title"
      >
        <div className={styles.deliveryIntro}>
          <p className={styles.smallLabel}>
            A practical engagement
          </p>

          <h2 id="delivery-title">
            The scope should be clear before the price pretends to
            be precise.
          </h2>

          <p>
            I do not use one fixed price for every website or
            application because the responsibility can be
            completely different. A focused public website and a
            multi-role operational platform should not be treated
            as the same product.
          </p>
        </div>

        <div className={styles.deliveryFactors}>
          <article>
            <span>01</span>
            <h3>Scope</h3>
            <p>
              The number of pages, workflows, roles, integrations,
              and system states affects the real amount of work.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Risk</h3>
            <p>
              Payments, private information, permissions,
              production operations, and existing data require
              additional care.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Responsibility</h3>
            <p>
              Design, engineering, deployment, infrastructure,
              support, and response expectations must be defined
              honestly.
            </p>
          </article>
        </div>
      </section>

      <section
        className={styles.boundaries}
        aria-labelledby="boundaries-title"
      >
        <div className={styles.boundariesHeading}>
          <p className={styles.eyebrow}>
            Clear responsibility
          </p>

          <h2 id="boundaries-title">
            Good collaboration requires clarity from both sides.
          </h2>
        </div>

        <div className={styles.responsibilityGrid}>
          {responsibilities.map((group) => (
            <section key={group.title}>
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className={styles.workLink}>
        <div className={styles.workLinkMeta}>
          <span>Selected work</span>
          <span>Systems currently in development</span>
        </div>

        <div className={styles.workLinkMain}>
          <div>
            <p>
              See how these capabilities are being applied to real
              platforms.
            </p>

            <h2>
              Explore the architecture, workflows, and direction
              behind Labonno and Milestogo.
            </h2>
          </div>

          <Link
            href="/work"
            className={styles.workAction}
          >
            View selected work
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactMeta}>
          <span>Start with the requirement</span>
          <span>Then define the right system</span>
        </div>

        <div className={styles.contactMain}>
          <div>
            <p>
              Have a project, workflow, or business problem in
              mind?
            </p>

            <h2>
              Let&apos;s understand what needs to be built.
            </h2>
          </div>

          <Link
            href="/contact"
            className={styles.contactAction}
          >
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
