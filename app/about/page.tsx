import Link from "next/link";

import styles from "./AboutPage.module.css";

import { createPageMetadata } from "@/lib/metadata";

import StructuredData from "@/components/seo/StructuredData";
import { aboutPageStructuredData } from "@/lib/page-structured-data";



export const metadata = createPageMetadata({
  title: "About Navid Hasan",
  description: "Learn about Navid Hasan, an independent full-stack developer in Bangladesh, founder of Labonno, and developer of business websites, web platforms, backend systems, and production infrastructure.",
  path: "/about",
});
const disciplines = [
  {
    number: "01",
    title: "Interface",
    description:
      "Clear responsive experiences, thoughtful visual systems, navigation, accessibility, and the details people directly interact with.",
  },
  {
    number: "02",
    title: "Application",
    description:
      "Frontend behavior, APIs, authentication, permissions, workflows, validation, and the business rules that hold a product together.",
  },
  {
    number: "03",
    title: "Data",
    description:
      "Structured domain models, PostgreSQL, migrations, relationships, audit trails, operational states, and long-term maintainability.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Linux, Nginx, application services, SSL, domains, deployment, monitoring, backups, security, and recovery preparation.",
  },
] as const;

const principles = [
  {
    number: "01",
    title: "Understand before building",
    description:
      "Good implementation begins by understanding the operation, the people involved, and the decisions the software must support.",
  },
  {
    number: "02",
    title: "Keep the system connected",
    description:
      "Interface, backend, data, permissions, and infrastructure should reinforce one product model instead of becoming isolated technical pieces.",
  },
  {
    number: "03",
    title: "Make responsibility visible",
    description:
      "Clear ownership, explicit states, validation, testing, and documentation reduce uncertainty for both the developer and the people using the product.",
  },
  {
    number: "04",
    title: "Build for continued growth",
    description:
      "A first release matters, but the foundation should remain understandable and practical to improve when real use reveals what comes next.",
  },
] as const;

const currentFocus = [
  {
    title: "Labonno",
    description:
      "A commerce and catalog platform with structured products, variants, brands, categories, publication workflows, founder administration, and production infrastructure.",
    href: "/work#labonno",
  },
  {
    title: "Milestogo",
    description:
      "A business operations platform connecting product governance, formulation, production, pricing, dealer onboarding, permissions, and internal portals.",
    href: "/work#milestogo",
  },
  {
    title: "Navidhasan.com",
    description:
      "A personal platform for presenting work, explaining services, documenting engineering decisions, and building a long-term independent identity.",
    href: "/",
  },
] as const;

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Django",
  "Flask",
  "Python",
  "PostgreSQL",
  "REST APIs",
  "Linux",
  "Nginx",
  "Gunicorn",
  "Redis",
  "Google Cloud",
  "Cloudflare",
] as const;

export default function AboutPage() {
  return (
    <>

      <StructuredData
        id="about-page-structured-data"
        data={aboutPageStructuredData}
      />
<section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMain}>
            <p className={styles.eyebrow}>
              About Navid Hasan
            </p>

            <h1>
              I am becoming the developer capable of building the
              systems I once only imagined.
            </h1>
          </div>

          <div className={styles.heroAside}>
            <p>
              I am an independent full-stack developer based in
              Bangladesh, working across product thinking,
              interface, backend, data, deployment, and the
              operational details that turn software into a real
              working system.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/work"
                className={styles.primaryLink}
              >
                Explore my work
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className={styles.textLink}
              >
                Start a conversation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.identityStrip}>
          <div>
            <span>Location</span>
            <strong>Bangladesh</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>Independent full-stack developer</strong>
          </div>

          <div>
            <span>Focus</span>
            <strong>Business websites and web systems</strong>
          </div>

          <div>
            <span>Working style</span>
            <strong>Direct, structured, long-term</strong>
          </div>
        </div>
      </section>

      <section
        className={styles.introduction}
        aria-labelledby="introduction-title"
      >
        <div className={styles.introductionLabel}>
          <p>Where I am now</p>
        </div>

        <div className={styles.introductionMain}>
          <h2 id="introduction-title">
            Not finished. Not pretending. Already doing the work.
          </h2>

          <div className={styles.introductionCopy}>
            <p>
              I did not begin with a polished career title or a
              perfectly planned route into software. I began by
              wanting to build things that were useful, then kept
              following every unanswered question deeper into the
              system.
            </p>

            <p>
              A page led to a frontend. A frontend required an
              API. The API required permissions, data, and
              validation. Production required Linux, Nginx,
              domains, SSL, databases, backups, monitoring, and
              responsibility when something failed.
            </p>

            <p>
              That progression is why full-stack development
              describes my work honestly. I am still growing, but
              I am already working across the complete product
              rather than observing only one layer of it.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.scope}
        aria-labelledby="scope-title"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              The scope of my work
            </p>

            <h2 id="scope-title">
              I work from the visible interface down to the
              infrastructure underneath it.
            </h2>
          </div>

          <p>
            The goal is not to know every technology. The goal is
            to understand enough of the complete system to make
            sound decisions and take responsibility for the
            result.
          </p>
        </div>

        <div className={styles.disciplineGrid}>
          {disciplines.map((discipline) => (
            <article key={discipline.number}>
              <span>{discipline.number}</span>

              <h3>{discipline.title}</h3>

              <p>{discipline.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.statement}
        aria-labelledby="statement-title"
      >
        <div className={styles.statementMeta}>
          <span>Independent development</span>
          <span>Based in Bangladesh · Working globally</span>
        </div>

        <div className={styles.statementMain}>
          <p className={styles.statementLabel}>
            What matters to me
          </p>

          <h2 id="statement-title">
            I want the product to feel simple because the difficult
            thinking was handled before it reached the user.
          </h2>
        </div>
      </section>

      <section
        className={styles.principles}
        aria-labelledby="principles-title"
      >
        <div className={styles.principlesIntro}>
          <p className={styles.smallLabel}>
            Engineering principles
          </p>

          <h2 id="principles-title">
            The standards I am learning to hold in every project.
          </h2>

          <p>
            These are not claims of perfection. They are the
            direction I use to evaluate decisions, review my work,
            and correct weak foundations before they become larger
            problems.
          </p>
        </div>

        <div className={styles.principleList}>
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.moon}
        aria-labelledby="moon-title"
      >
        <div className={styles.moonVisual}>
          <div className={styles.orbit}>
            <span className={styles.moonShape} />
            <span className={styles.orbitDot} />
          </div>

          <span className={styles.moonCode}>
            N / 49
          </span>
        </div>

        <div className={styles.moonContent}>
          <p className={styles.smallLabel}>
            The moon symbol
          </p>

          <h2 id="moon-title">
            A reminder that progress happens in phases.
          </h2>

          <div className={styles.moonCopy}>
            <p>
              The moon became part of this identity because it
              represents quiet work, changing phases, reflection,
              decay, rebuilding, and progress that is not always
              visible from the outside.
            </p>

            <p>
              It is not meant to make the website mystical. It is
              a personal mark for continuing through unfinished
              stages instead of waiting to appear complete.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.currentWork}
        aria-labelledby="current-work-title"
      >
        <div className={styles.currentWorkHeading}>
          <div>
            <p className={styles.eyebrow}>
              Current focus
            </p>

            <h2 id="current-work-title">
              The systems helping me grow through real
              responsibility.
            </h2>
          </div>

          <Link
            href="/work"
            className={styles.textLink}
          >
            View complete case studies
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.projectList}>
          {currentFocus.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className={styles.projectItem}
            >
              <span className={styles.projectNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <span
                className={styles.projectArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className={styles.technology}
        aria-labelledby="technology-title"
      >
        <div className={styles.technologyIntro}>
          <p className={styles.smallLabel}>
            Working toolkit
          </p>

          <h2 id="technology-title">
            Technologies are tools. The product structure matters
            more.
          </h2>

          <p>
            I choose technologies based on what the system needs,
            while continuing to deepen the tools that already form
            the foundation of my work.
          </p>
        </div>

        <div className={styles.technologyList}>
          {technologies.map((technology, index) => (
            <span key={technology}>
              <small>
                {String(index + 1).padStart(2, "0")}
              </small>

              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.journalLink}>
        <div className={styles.journalMeta}>
          <span>Writing and documentation</span>
          <span>Journal</span>
        </div>

        <div className={styles.journalMain}>
          <div>
            <p>
              Building is only part of the process.
            </p>

            <h2>
              I also want to document what I learn, what fails, and
              how the systems improve.
            </h2>
          </div>

          <Link
            href="/journal"
            className={styles.journalAction}
          >
            Visit the journal
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactMeta}>
          <span>Available for selected work</span>
          <span>Independent full-stack developer</span>
        </div>

        <div className={styles.contactMain}>
          <div>
            <p>
              Have a useful product or difficult workflow to build?
            </p>

            <h2>
              Let&apos;s understand it properly and move forward.
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
