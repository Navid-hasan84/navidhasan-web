import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="moon" aria-hidden="true" />

        <div className="hero-content">
          <div className="eyebrow">Moonlit Command Center</div>
          <h1>Work, growth, systems, and creation under one quiet sky.</h1>
          <p>
            Navid Hasan is becoming a personal business center, project space,
            journal, workflow hub, and future AI-powered operating system.
          </p>

          <div className="actions">
            <Link href="/work" className="button primary">
              Explore Work
            </Link>
            <Link href="/portal" className="button">
              Future Portal
            </Link>
          </div>
        </div>
      </section>

      <section className="grid" aria-label="Site pillars">
        <article className="card">
          <h2>Business Center</h2>
          <p>
            A public home for services, projects, experiments, documentation,
            and future client workflows.
          </p>
        </article>

        <article className="card">
          <h2>Personal Growth</h2>
          <p>
            A place for journals, worksheets, time management systems, and
            reflection through phases of progress.
          </p>
        </article>

        <article className="card">
          <h2>Future Systems</h2>
          <p>
            Built to expand into chat, project status, documents, mobile apps,
            and AI integration without depending on a backend today.
          </p>
        </article>
      </section>
    </>
  );
}
