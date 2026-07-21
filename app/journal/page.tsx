import Link from "next/link";

import styles from "./JournalPage.module.css";

import { createPageMetadata } from "@/lib/metadata";

import StructuredData from "@/components/seo/StructuredData";
import { journalPageStructuredData } from "@/lib/page-structured-data";



export const metadata = createPageMetadata({
  title: "Engineering Journal",
  description: "Engineering notes, project reflections, production lessons, system design ideas, and development writing by Navid Hasan.",
  path: "/journal",
});
const categories = [
  {
    number: "01",
    title: "Building systems",
    description:
      "Architecture, workflows, permissions, domain modelling, frontend structure, backend decisions, and the practical work of connecting a product.",
  },
  {
    number: "02",
    title: "Production",
    description:
      "Deployment, Linux, Nginx, databases, infrastructure, security, recovery, monitoring, and the responsibility that begins after development.",
  },
  {
    number: "03",
    title: "Learning in public",
    description:
      "Concepts I am studying, mistakes I have corrected, unfamiliar technologies, and explanations written to make my own understanding stronger.",
  },
  {
    number: "04",
    title: "Project records",
    description:
      "Important decisions, implementation checkpoints, failures, recoveries, and lessons emerging from Labonno, Milestogo, and future work.",
  },
] as const;

const plannedWriting = [
  {
    number: "01",
    category: "System design",
    title:
      "Why a product catalog becomes an operational system",
    description:
      "Products, variants, imagery, categories, brands, pricing, publication, suppliers, and audit history appear simple separately. The interesting work begins when they must behave as one system.",
    relatedTo: "Labonno",
  },
  {
    number: "02",
    category: "Production",
    title:
      "The difference between running locally and owning production",
    description:
      "A working development server is not the end of the application. Domains, SSL, services, databases, deployment, backups, verification, and recovery all become part of the product.",
    relatedTo: "Infrastructure",
  },
  {
    number: "03",
    category: "Permissions",
    title:
      "Why roles are more than names attached to users",
    description:
      "Useful authorization begins with responsibility. A role should describe what a person can see, decide, approve, change, and remain accountable for.",
    relatedTo: "Milestogo",
  },
  {
    number: "04",
    category: "Development process",
    title:
      "Small checkpoints without losing the larger architecture",
    description:
      "Breaking work into focused changes helps testing and recovery, but each checkpoint still needs to preserve the direction of the complete product.",
    relatedTo: "Engineering workflow",
  },
  {
    number: "05",
    category: "Learning",
    title:
      "Learning full-stack development by following the next dependency",
    description:
      "A frontend leads to APIs. APIs lead to authentication and data. Production leads to Linux and infrastructure. Each answer reveals the next layer that must be understood.",
    relatedTo: "Personal development",
  },
] as const;

const writingPrinciples = [
  {
    number: "01",
    title: "Write from actual work",
    description:
      "The strongest material should come from systems I have built, problems I have encountered, and decisions I have had to make.",
  },
  {
    number: "02",
    title: "Separate fact from opinion",
    description:
      "Technical explanations should distinguish documented behavior, project-specific choices, assumptions, and personal judgment.",
  },
  {
    number: "03",
    title: "Explain the reason",
    description:
      "A code change becomes more useful when the requirement, trade-off, failure mode, and expected result are also clear.",
  },
  {
    number: "04",
    title: "Correct the record",
    description:
      "Learning includes discovering that an earlier understanding was incomplete. Published notes should be updated when the evidence changes.",
  },
] as const;

export default function JournalPage() {
  return (
    <>

      <StructuredData
        id="journal-page-structured-data"
        data={journalPageStructuredData}
      />
<section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMain}>
            <p className={styles.eyebrow}>
              Journal
            </p>

            <h1>
              Notes from building, breaking, and understanding
              systems.
            </h1>
          </div>

          <div className={styles.heroAside}>
            <p>
              This will become a record of engineering decisions,
              production lessons, project progress, corrected
              assumptions, and the ideas that become clearer when
              they are written down.
            </p>

            <Link
              href="/about"
              className={styles.textLink}
            >
              Read about my approach
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.statusStrip}>
          <div>
            <span>Current status</span>
            <strong>Editorial foundation</strong>
          </div>

          <div>
            <span>Published articles</span>
            <strong>None yet</strong>
          </div>

          <div>
            <span>Primary subjects</span>
            <strong>Engineering and product systems</strong>
          </div>

          <div>
            <span>Writing standard</span>
            <strong>Real work before empty content</strong>
          </div>
        </div>
      </section>

      <section
        className={styles.introduction}
        aria-labelledby="journal-introduction-title"
      >
        <div className={styles.introductionLabel}>
          <p>Why this exists</p>
        </div>

        <div className={styles.introductionMain}>
          <h2 id="journal-introduction-title">
            Documentation should preserve more than the final
            answer.
          </h2>

          <div className={styles.introductionCopy}>
            <p>
              A completed feature rarely shows the uncertainty,
              failed approach, hidden dependency, or operational
              constraint that shaped it.
            </p>

            <p>
              I want this journal to preserve those parts of the
              work: what the system needed, what I initially
              misunderstood, why a decision changed, and what
              became reusable after the problem was solved.
            </p>

            <p>
              The journal is not being filled with artificial
              articles simply to make the site look established.
              Real publication begins when the writing is strong
              enough to be useful.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.categories}
        aria-labelledby="categories-title"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              Subject areas
            </p>

            <h2 id="categories-title">
              Writing around the complete life of a digital
              product.
            </h2>
          </div>

          <p>
            The subjects extend beyond code because architecture,
            people, data, operations, and production shape whether
            the code remains useful.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <article key={category.number}>
              <span>{category.number}</span>

              <h3>{category.title}</h3>

              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.upcoming}
        aria-labelledby="upcoming-title"
      >
        <div className={styles.upcomingIntro}>
          <p className={styles.smallLabel}>
            Planned writing
          </p>

          <h2 id="upcoming-title">
            Subjects already emerging from the work.
          </h2>

          <p>
            These are editorial directions rather than published
            articles. They will become real entries only after
            they are properly researched, written, reviewed, and
            given permanent routes.
          </p>
        </div>

        <div className={styles.articleList}>
          {plannedWriting.map((article) => (
            <article key={article.number}>
              <div className={styles.articleNumber}>
                {article.number}
              </div>

              <div className={styles.articleMain}>
                <div className={styles.articleMeta}>
                  <span>{article.category}</span>
                  <span>{article.relatedTo}</span>
                  <span>Planned</span>
                </div>

                <h3>{article.title}</h3>

                <p>{article.description}</p>
              </div>

              <span
                className={styles.articleStatus}
                aria-label="Not yet published"
              >
                —
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.statement}
        aria-labelledby="journal-statement-title"
      >
        <div className={styles.statementMeta}>
          <span>Writing as part of engineering</span>
          <span>Understanding through explanation</span>
        </div>

        <div className={styles.statementMain}>
          <p>
            The purpose
          </p>

          <h2 id="journal-statement-title">
            Writing reveals where an idea is clear—and where it is
            only familiar.
          </h2>
        </div>
      </section>

      <section
        className={styles.principles}
        aria-labelledby="writing-principles-title"
      >
        <div className={styles.principlesHeading}>
          <p className={styles.eyebrow}>
            Editorial principles
          </p>

          <h2 id="writing-principles-title">
            A journal should become more trustworthy as it grows.
          </h2>
        </div>

        <div className={styles.principleGrid}>
          {writingPrinciples.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.projectContext}
        aria-labelledby="project-context-title"
      >
        <div className={styles.projectContextIntro}>
          <p className={styles.smallLabel}>
            The source material
          </p>

          <h2 id="project-context-title">
            The journal will grow beside the systems, not apart
            from them.
          </h2>

          <p>
            Labonno and Milestogo already contain the kinds of
            decisions worth documenting: domain models,
            permissions, publication rules, deployment failures,
            migrations, testing, production recovery, and
            interface refinement.
          </p>
        </div>

        <div className={styles.projectLinks}>
          <Link
            href="/work#labonno"
            className={styles.projectLink}
          >
            <span>01</span>

            <div>
              <h3>Labonno</h3>
              <p>
                Commerce, catalog operations, variants, founder
                workflows, publication, and production
                architecture.
              </p>
            </div>

            <span aria-hidden="true">↗</span>
          </Link>

          <Link
            href="/work#milestogo"
            className={styles.projectLink}
          >
            <span>02</span>

            <div>
              <h3>Milestogo</h3>
              <p>
                Business operations, roles, product governance,
                formulation, production, dealer systems, and
                infrastructure.
              </p>
            </div>

            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactMeta}>
          <span>Questions and professional conversations</span>
          <span>Direct contact</span>
        </div>

        <div className={styles.contactMain}>
          <div>
            <p>
              Interested in the work behind the writing?
            </p>

            <h2>
              Explore the systems or start a direct conversation.
            </h2>
          </div>

          <div className={styles.contactActions}>
            <Link
              href="/work"
              className={styles.primaryAction}
            >
              Selected work
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/contact"
              className={styles.secondaryAction}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
