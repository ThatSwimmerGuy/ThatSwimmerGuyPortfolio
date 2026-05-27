import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/coursework")({
  head: () => ({
    meta: [
      { title: "Coursework — STEM Portfolio" },
      { name: "description", content: "STEM Survey, Seminar, and 20 credits of supporting coursework." },
      { property: "og:title", content: "Coursework" },
      { property: "og:description", content: "Classes I took to meet the STEM Academy coursework benchmark." },
    ],
  }),
  component: Coursework,
});

interface Course {
  name: string;
  credits?: string;
  description: string;
  reflection: string;
}

const required: Course[] = [
  {
    name: "STEM Survey",
    description: "Brief description of the course content and goals.",
    reflection: "Reflect on the skills you learned and how they shaped your capstone, internship, or STEM thinking.",
  },
  {
    name: "STEM Seminar",
    description: "Brief description of the course content and goals.",
    reflection: "Reflect on the skills you learned and how they shaped your capstone, internship, or STEM thinking.",
  },
];

const electives: Course[] = [
  {
    name: "AP Computer Science A (APCSA)",
    credits: "5 credits",
    description: "College-level introduction to Java programming covering object-oriented design, classes and inheritance, data structures (arrays, ArrayLists, 2D arrays), recursion, sorting/searching algorithms, and program analysis.",
    reflection: "APCSA sharpened my problem-decomposition and debugging skills, which directly translated to writing cleaner Pixhawk parameter logic and reasoning through control-flow issues on the VTOL. Working through algorithm problems built the patience and systematic thinking I lean on whenever a hardware bug needs to be isolated.",
  },
  {
    name: "Course name",
    credits: "5 credits",
    description: "Brief description of the course.",
    reflection: "What skills did this class give you and how did they contribute?",
  },
  {
    name: "Course name",
    credits: "5 credits",
    description: "Brief description of the course.",
    reflection: "What skills did this class give you and how did they contribute?",
  },
  {
    name: "Course name",
    credits: "5 credits",
    description: "Brief description of the course.",
    reflection: "What skills did this class give you and how did they contribute?",
  },
  {
    name: "Course name",
    credits: "5 credits",
    description: "Brief description of the course.",
    reflection: "What skills did this class give you and how did they contribute?",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-md bg-secondary p-2 text-primary">
            <BookOpen className="h-4 w-4" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{course.name}</h3>
        </div>
        {course.credits && (
          <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground whitespace-nowrap">
            {course.credits}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">About: </span>
        {course.description}
      </p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Reflection: </span>
        {course.reflection}
      </p>
    </article>
  );
}

function Coursework() {
  const totalElectiveCredits = electives.reduce((sum, c) => {
    const n = parseInt(c.credits ?? "0", 10);
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Coursework"
        description="Required STEM Academy classes plus the 20 credits of supporting coursework I took to meet the benchmark."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Required STEM Academy Classes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {required.map((c) => <CourseCard key={c.name} course={c} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
          <h2 className="text-2xl font-bold text-foreground">Supporting Coursework (20 credits)</h2>
          <div className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            {totalElectiveCredits} / 20 credits
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {electives.map((c, i) => <CourseCard key={i} course={c} />)}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Note: If you haven't finished all 20 credits yet, update this list senior year before graduation.
        </p>
      </section>
    </>
  );
}
