import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/capstone-proposal")({
  head: () => ({
    meta: [
      { title: "Capstone Proposal — STEM Portfolio" },
      { name: "description", content: "The original capstone project proposal." },
      { property: "og:title", content: "Capstone Proposal" },
      { property: "og:description", content: "The original capstone project proposal embedded for viewing." },
    ],
  }),
  component: CapstoneProposal,
});

function CapstoneProposal() {
  // Replace this with your Google Docs / PDF embed URL.
  // Google Docs: File → Share → Publish to web → Embed → copy the iframe src
  // Or use: https://docs.google.com/document/d/DOC_ID/preview
  const embedUrl =
    "https://docs.google.com/document/d/e/2PACX-1vTq5IOGrP7DvKT37UqOzGEon2M5G0oOxxhi0ll-X7s7BGKRHJHvxGrr1uw7t2sR3kJXCVFeD3NUPOgo/pub?embedded=true";

  return (
    <>
      <PageHeader
        eyebrow="Project"
        title="Capstone Proposal"
        description="The proposal I wrote going into capstone, embedded below for you to read directly on the page."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        {embedUrl ? (
          <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elegant)] bg-card">
            <iframe
              src={embedUrl}
              title="Capstone Proposal"
              className="h-[1100px] w-full"
            />
          </div>
        ) : (
          <div className="rounded-xl border-2 border-dashed border-border bg-card p-10 text-center">
            <FileText className="mx-auto h-10 w-10 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold text-foreground">Embed your proposal here</h2>
            <p className="mt-2 mx-auto max-w-md text-sm text-muted-foreground">
              In <code className="rounded bg-secondary px-1.5 py-0.5">src/routes/capstone-proposal.tsx</code>,
              set <code className="rounded bg-secondary px-1.5 py-0.5">embedUrl</code> to your Google Doc
              preview link (e.g. <em>https://docs.google.com/document/d/DOC_ID/preview</em>) or a PDF URL.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <a href="https://support.google.com/docs/answer/183965" target="_blank" rel="noreferrer">
                How to publish & embed <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
