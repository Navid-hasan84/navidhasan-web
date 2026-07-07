export const metadata = {
  title: "Contact",
  description: "Contact Navid Hasan through static links.",
};

export default function ContactPage() {
  return (
    <section className="page">
      <div className="page-inner">
        <div className="eyebrow">Contact</div>
        <h1>Open a line under the moon.</h1>
        <p>
          The full message system will come later. For Phase 1, contact will
          stay static through direct links.
        </p>

        <div className="actions">
          <a className="button primary" href="mailto:hello@navidhasan.com">
            Email
          </a>
          <a className="button" href="https://wa.me/" target="_blank">
            WhatsApp
          </a>
          <a className="button" href="https://github.com/" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
