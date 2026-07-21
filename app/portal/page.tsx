import { createPageMetadata } from "@/lib/metadata";



export const metadata = createPageMetadata({
  title: "Client Portal",
  description: "Reserved client portal for future project communication, documents, delivery information, and private workflows.",
  path: "/portal",
  noIndex: true,
});
export default function PortalPage() {
  return (
    <section className="page">
      <div className="page-inner">
        <div className="eyebrow">Future Portal</div>
        <h1>This chamber is being prepared.</h1>
        <p>
          The future portal will include project status, payment condition,
          shared documents, messages, delivery updates, and client workflows.
          Phase 1 keeps it static so the public site can run without backend cost.
        </p>
      </div>
    </section>
  );
}
