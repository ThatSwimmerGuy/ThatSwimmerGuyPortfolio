import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Briefcase } from "lucide-react";

export const Route = createFileRoute("/internship")({
  head: () => ({
    meta: [
      { title: "Internship — STEM Portfolio" },
      { name: "description", content: "Internship experience, work samples, and reflections." },
      { property: "og:title", content: "Internship" },
      { property: "og:description", content: "What I did during my STEM internship." },
    ],
  }),
  component: Internship,
});

// Set to your real images / captions. Leave the array empty if you didn't intern.
const gallery: { src: string; caption: string }[] = [];

function Internship() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Internship"
        description="A look at the work, people, and lessons from my internship."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-secondary p-3 text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">What I Did</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Write a paragraph describing your internship: where you interned, the team you joined, the
                projects you contributed to, the tools and techniques you used, and what you took away from
                the experience. If you did not complete an internship, you can delete this tab from the
                navigation in <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">src/components/SiteHeader.tsx</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-xl font-semibold text-foreground mb-5">Gallery</h2>
        {gallery.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
            Add photos, slide decks, or data visualizations from your internship by editing the
            <code className="mx-1 rounded bg-secondary px-1.5 py-0.5">gallery</code> array in
            <code className="mx-1 rounded bg-secondary px-1.5 py-0.5">src/routes/internship.tsx</code>.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <figure key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
                <img src={item.src} alt={item.caption} loading="lazy" className="aspect-video w-full object-cover" />
                <figcaption className="p-3 text-sm text-muted-foreground">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
