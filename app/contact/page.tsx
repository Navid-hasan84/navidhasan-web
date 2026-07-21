import Link from "next/link";

import styles from "./ContactPage.module.css";

import { createPageMetadata } from "@/lib/metadata";

import StructuredData from "@/components/seo/StructuredData";
import { contactPageStructuredData } from "@/lib/page-structured-data";



export const metadata = createPageMetadata({
  title: "Contact Navid Hasan",
  description: "Contact Navid Hasan to discuss a business website, custom web application, internal portal, backend system, deployment project, or ongoing product development.",
  path: "/contact",
});
const emailAddress = "hello@navidhasan.com";

const inquiryTypes = [
  {
    number: "01",
    title: "Business website",
    description:
      "A new professional website, product website, redesign, or clearer digital presence for an existing business.",
  },
  {
    number: "02",
    title: "Custom web system",
    description:
      "A dashboard, catalog, operational workflow, business platform, or purpose-built application.",
  },
  {
    number: "03",
    title: "Internal tool or portal",
    description:
      "An administrative interface, staff portal, partner area, customer account, or structured internal workflow.",
  },
  {
    number: "04",
    title: "Backend and deployment",
    description:
      "APIs, authentication, permissions, databases, production deployment, or infrastructure foundations.",
  },
  {
    number: "05",
    title: "Ongoing engineering",
    description:
      "Continued development, stabilization, architecture improvement, maintenance, or production support.",
  },
] as const;

const briefItems = [
  {
    number: "01",
    title: "What needs to be built?",
    description:
      "Describe the website, system, workflow, or business problem in your own words. It does not need to be technically perfect.",
  },
  {
    number: "02",
    title: "Who will use it?",
    description:
      "Mention the customers, staff members, administrators, partners, or other roles involved.",
  },
  {
    number: "03",
    title: "What happens today?",
    description:
      "Explain the current process, existing software, spreadsheets, conversations, or manual work the project may replace.",
  },
  {
    number: "04",
    title: "What is most important?",
    description:
      "Share the main priority, deadline, risk, operational requirement, or result the first release must achieve.",
  },
  {
    number: "05",
    title: "What already exists?",
    description:
      "Include any existing website, codebase, design, documentation, domain, hosting, content, or system the work must consider.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Initial message",
    description:
      "You send the context, requirement, and any existing material that helps explain the project.",
  },
  {
    number: "02",
    title: "Requirement review",
    description:
      "I examine the request, identify missing information, and determine whether the work fits my current capabilities and direction.",
  },
  {
    number: "03",
    title: "Scope discussion",
    description:
      "We clarify the first useful release, responsibilities, constraints, delivery expectations, and the next practical decision.",
  },
  {
    number: "04",
    title: "Project direction",
    description:
      "When the scope is clear enough, the work can be divided into focused implementation checkpoints and production milestones.",
  },
] as const;

export default function ContactPage() {
  const projectMailto =
    `mailto:${emailAddress}` +
    "?subject=Project%20inquiry%20for%20Navid%20Hasan" +
    "&body=Hello%20Navid%2C%0A%0A" +
    "I%20would%20like%20to%20discuss%3A%0A%0A" +
    "Project%20or%20business%3A%0A" +
    "What%20needs%20to%20be%20built%3A%0A" +
    "Who%20will%20use%20it%3A%0A" +
    "What%20currently%20exists%3A%0A" +
    "Main%20priority%20or%20deadline%3A%0A" +
    "Additional%20context%3A%0A";

  return (
    <>

      <StructuredData
        id="contact-page-structured-data"
        data={contactPageStructuredData}
      />
<section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMain}>
            <p className={styles.eyebrow}>
              Contact
            </p>

            <h1>
              Tell me what needs to work better.
            </h1>
          </div>

          <div className={styles.heroAside}>
            <p>
              Share the business problem, project idea, existing
              system, or difficult workflow. We can begin with the
              requirement before deciding what the software should
              become.
            </p>

            <a
              href={projectMailto}
              className={styles.primaryLink}
            >
              Start a project inquiry
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.directContact}>
          <div>
            <span>Direct email</span>

            <a href={`mailto:${emailAddress}`}>
              {emailAddress}
            </a>
          </div>

          <div>
            <span>Based in</span>
            <strong>Bangladesh</strong>
          </div>

          <div>
            <span>Working with</span>
            <strong>Local and international projects</strong>
          </div>

          <div>
            <span>Primary focus</span>
            <strong>Websites and custom web systems</strong>
          </div>
        </div>
      </section>

      <section
        className={styles.inquirySection}
        aria-labelledby="inquiry-title"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              Project types
            </p>

            <h2 id="inquiry-title">
              Different starting points. One direct conversation.
            </h2>
          </div>

          <p>
            You do not need to know the framework, database, or
            exact architecture before contacting me. Begin with
            what the business or user needs.
          </p>
        </div>

        <div className={styles.inquiryList}>
          {inquiryTypes.map((inquiry) => (
            <article key={inquiry.number}>
              <span>{inquiry.number}</span>

              <h3>{inquiry.title}</h3>

              <p>{inquiry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.briefSection}
        aria-labelledby="brief-title"
      >
        <div className={styles.briefIntroduction}>
          <p className={styles.smallLabel}>
            A useful first message
          </p>

          <h2 id="brief-title">
            The best inquiry explains the situation, not only the
            desired feature.
          </h2>

          <p>
            A short but honest project brief helps me understand
            the work, identify important questions, and avoid
            giving you a careless answer based on assumptions.
          </p>

          <a
            href={projectMailto}
            className={styles.textLink}
          >
            Open the email template
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.briefList}>
          {briefItems.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.emailPanel}
        aria-labelledby="email-title"
      >
        <div className={styles.emailMeta}>
          <span>Direct communication</span>
          <span>No account or contact form required</span>
        </div>

        <div className={styles.emailMain}>
          <div>
            <p>
              Project inquiries and professional conversations
            </p>

            <h2 id="email-title">
              Write directly. Keep ownership of your message.
            </h2>
          </div>

          <a
            href={projectMailto}
            className={styles.emailAction}
          >
            <span>Email Navid</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <a
          className={styles.emailAddress}
          href={`mailto:${emailAddress}`}
        >
          {emailAddress}
        </a>
      </section>

      <section
        className={styles.processSection}
        aria-labelledby="process-title"
      >
        <div className={styles.processHeading}>
          <p className={styles.eyebrow}>
            What happens next
          </p>

          <h2 id="process-title">
            A practical path from first message to clear direction.
          </h2>
        </div>

        <div className={styles.processGrid}>
          {process.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.expectations}
        aria-labelledby="expectations-title"
      >
        <div className={styles.expectationsHeading}>
          <p className={styles.smallLabel}>
            Before contacting
          </p>

          <h2 id="expectations-title">
            Clear expectations make the first discussion more
            useful.
          </h2>
        </div>

        <div className={styles.expectationGrid}>
          <article>
            <span>01</span>

            <h3>Specific context helps</h3>

            <p>
              Messages with a real requirement, existing process,
              business goal, or useful reference are easier to
              evaluate than a request containing only a feature
              name.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>Scope comes before certainty</h3>

            <p>
              A responsible timeline or price depends on what must
              be designed, integrated, secured, deployed, and
              maintained.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>Fit matters on both sides</h3>

            <p>
              I may not be the correct developer for every request.
              An honest assessment is more useful than accepting
              work without the right direction or capacity.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.explore}>
        <div className={styles.exploreMeta}>
          <span>Need more context first?</span>
          <span>Explore the work and services</span>
        </div>

        <div className={styles.exploreMain}>
          <div>
            <p>
              See how I approach products before starting the
              conversation.
            </p>

            <h2>
              Review the systems, responsibilities, and services
              behind the work.
            </h2>
          </div>

          <div className={styles.exploreActions}>
            <Link
              href="/work"
              className={styles.darkAction}
            >
              Selected work
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/services"
              className={styles.lightAction}
            >
              Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
