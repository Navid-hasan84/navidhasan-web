import Link from "next/link";

import styles from "./WorkPage.module.css";

import { createPageMetadata } from "@/lib/metadata";

import StructuredData from "@/components/seo/StructuredData";
import { workPageStructuredData } from "@/lib/page-structured-data";



export const metadata = createPageMetadata({
  title: "Selected Work",
  description: "Explore selected work by Navid Hasan, including Labonno, a pre-launch beauty and cosmetics commerce platform, and the Milestogo business operations and ERP platform.",
  path: "/work",
});
const projects = [
  {
    id: "labonno",
    index: "01",
    name: "Labonno",
    category: "Commerce and catalog platform",
    status: "Active development",
    summary:
      "A modern commerce foundation designed around structured catalog operations, founder-controlled administration, publication governance, and a production-ready customer experience.",
    challenge:
      "The project needs to support far more than product cards. Products, variants, images, categories, brands, suppliers, pricing, publication readiness, and founder actions must remain connected without turning the codebase into an unmanageable collection of screens.",
    approach:
      "I am developing the platform as a set of focused, auditable workflows. The public storefront and internal administration share one domain model, while permissions, publication rules, validation, and operational states are enforced through the backend rather than left to interface assumptions.",
    outcome:
      "Labonno now has a growing full-stack foundation that can evolve from a curated catalog into a serious commerce and operational platform without discarding its original architecture.",
    responsibilities: [
      "Product architecture",
      "Frontend engineering",
      "Backend APIs",
      "Data modelling",
      "Founder administration",
      "Deployment and infrastructure",
    ],
    capabilities: [
      {
        title: "Structured catalog",
        description:
          "Products, variants, brands, categories, pricing, imagery, and publication states are modelled as connected operational data.",
      },
      {
        title: "Founder workflows",
        description:
          "Administration is designed around controlled creation, review, publication, auditing, and long-term catalog maintenance.",
      },
      {
        title: "Production foundation",
        description:
          "The application uses a modern Next.js frontend, Django APIs, PostgreSQL, Linux deployment, Nginx, and production service management.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Nginx",
      "Linux",
    ],
  },
  {
    id: "milestogo",
    index: "02",
    name: "Milestogo",
    category: "Business operations and ERP platform",
    status: "Long-term system development",
    summary:
      "An operational platform for an aquafeed business, connecting product formulation, production, pricing, dealer onboarding, permissions, administration, and future inventory workflows.",
    challenge:
      "The business contains many connected responsibilities that are often handled through conversations, documents, and disconnected records. The system must translate those real operations into clear workflows without forcing the company into an artificial software structure.",
    approach:
      "I am building the platform domain by domain: identity and permissions, product governance, formulation, production, dealer operations, pricing, APIs, and specialized portals. Each addition is designed to connect with the existing system rather than become an isolated feature.",
    outcome:
      "Milestogo has grown into a multi-portal business platform with production infrastructure, role-based access, product approval, pricing governance, dealer onboarding, formulation foundations, and a path toward broader ERP operations.",
    responsibilities: [
      "System architecture",
      "Business workflow design",
      "Backend development",
      "Database modelling",
      "Role and permission design",
      "Production operations",
    ],
    capabilities: [
      {
        title: "Business workflows",
        description:
          "Operational requirements are translated into explicit states, responsibilities, approvals, records, and audit-friendly actions.",
      },
      {
        title: "Multiple portals",
        description:
          "Administrators, product managers, dealers, marketing officers, and assistants receive interfaces shaped around their responsibilities.",
      },
      {
        title: "Production ownership",
        description:
          "The work includes application code, PostgreSQL, Linux services, Nginx, SSL, subdomains, deployment, verification, and recovery planning.",
      },
    ],
    stack: [
      "Flask",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "React",
      "Redis",
      "Gunicorn",
      "Nginx",
      "Google Cloud",
    ],
  },
] as const;

export default function WorkPage() {
  return (
    <>

      <StructuredData
        id="work-page-structured-data"
        data={workPageStructuredData}
      />
<section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMain}>
            <p className={styles.eyebrow}>
              Selected work
            </p>

            <h1>
              Systems designed for real work, not only a polished
              screen.
            </h1>
          </div>

          <div className={styles.heroAside}>
            <p>
              I work across product structure, interface,
              backend, data, permissions, deployment, and the
              operational details that determine whether software
              remains useful after launch.
            </p>

            <Link
              href="/contact"
              className={styles.inlineLink}
            >
              Discuss a project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.projectIndex}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className={styles.indexItem}
            >
              <span className={styles.indexNumber}>
                {project.index}
              </span>

              <span className={styles.indexName}>
                {project.name}
              </span>

              <span className={styles.indexCategory}>
                {project.category}
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

      {projects.map((project) => (
        <article
          id={project.id}
          key={project.id}
          className={styles.project}
        >
          <header className={styles.projectHeader}>
            <div className={styles.projectIdentity}>
              <div className={styles.projectMeta}>
                <span>{project.index}</span>
                <span>{project.category}</span>
                <span>{project.status}</span>
              </div>

              <h2>{project.name}</h2>
            </div>

            <p className={styles.projectSummary}>
              {project.summary}
            </p>
          </header>

          <div className={styles.systemFrame}>
            <div className={styles.frameHeader}>
              <div className={styles.frameDots}>
                <span />
                <span />
                <span />
              </div>

              <span>
                {project.name.toLowerCase()} / system overview
              </span>

              <span>{project.index}</span>
            </div>

            <div className={styles.frameBody}>
              <div className={styles.frameStatement}>
                <span>Project focus</span>

                <strong>
                  {project.category}
                </strong>
              </div>

              <div className={styles.frameGrid}>
                {project.capabilities.map(
                  (capability, capabilityIndex) => (
                    <div
                      key={capability.title}
                      className={styles.frameCell}
                    >
                      <span>
                        {String(
                          capabilityIndex + 1,
                        ).padStart(2, "0")}
                      </span>

                      <h3>{capability.title}</h3>

                      <p>{capability.description}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className={styles.caseStudy}>
            <div className={styles.caseNavigation}>
              <p>Case study</p>

              <div>
                <a href={`#${project.id}-challenge`}>
                  Challenge
                </a>

                <a href={`#${project.id}-approach`}>
                  Approach
                </a>

                <a href={`#${project.id}-outcome`}>
                  Direction
                </a>
              </div>
            </div>

            <div className={styles.caseContent}>
              <section id={`${project.id}-challenge`}>
                <span className={styles.caseNumber}>
                  01
                </span>

                <div>
                  <h3>The challenge</h3>
                  <p>{project.challenge}</p>
                </div>
              </section>

              <section id={`${project.id}-approach`}>
                <span className={styles.caseNumber}>
                  02
                </span>

                <div>
                  <h3>The approach</h3>
                  <p>{project.approach}</p>
                </div>
              </section>

              <section id={`${project.id}-outcome`}>
                <span className={styles.caseNumber}>
                  03
                </span>

                <div>
                  <h3>The current direction</h3>
                  <p>{project.outcome}</p>
                </div>
              </section>
            </div>
          </div>

          <div className={styles.projectFacts}>
            <section>
              <p className={styles.factLabel}>
                My responsibilities
              </p>

              <ul>
                {project.responsibilities.map(
                  (responsibility) => (
                    <li key={responsibility}>
                      {responsibility}
                    </li>
                  ),
                )}
              </ul>
            </section>

            <section>
              <p className={styles.factLabel}>
                Technology
              </p>

              <div className={styles.stack}>
                {project.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className={styles.projectFooter}>
            <span>
              {project.name} · {project.status}
            </span>

            <a href="#top">
              Back to top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </article>
      ))}

      <section className={styles.principles}>
        <div className={styles.principlesHeading}>
          <p className={styles.eyebrow}>
            What connects the work
          </p>

          <h2>
            Different products. The same responsibility for the
            whole system.
          </h2>
        </div>

        <div className={styles.principleGrid}>
          <article>
            <span>01</span>
            <h3>Understand the operation</h3>
            <p>
              The software begins with the real people, decisions,
              constraints, and responsibilities it must support.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Design connected foundations</h3>
            <p>
              Interface, data, permissions, APIs, and deployment
              are treated as parts of one product rather than
              separate technical tasks.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Build for continued ownership</h3>
            <p>
              A system should remain understandable, testable,
              secure, and practical to improve after its first
              release.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.nextStep}>
        <div className={styles.nextStepMeta}>
          <span>Next step</span>
          <span>Services and collaboration</span>
        </div>

        <div className={styles.nextStepMain}>
          <div>
            <p>
              Need a website, internal tool, portal, or complete
              operational platform?
            </p>

            <h2>
              Let&apos;s define what the system really needs to
              become.
            </h2>
          </div>

          <div className={styles.nextStepActions}>
            <Link
              href="/contact"
              className={styles.primaryAction}
            >
              Start a conversation
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/services"
              className={styles.secondaryAction}
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
