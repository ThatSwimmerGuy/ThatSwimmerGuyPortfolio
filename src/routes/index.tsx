import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-stem.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, Code, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STEM Portfolio — Home" },
      { name: "description", content: "Documenting Essential Skills practiced throughout the STEM Academy." },
      { property: "og:title", content: "STEM Portfolio — Home" },
      { property: "og:description", content: "Background, interests, and capstone work from a STEM Academy student." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-40">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">STEM Academy Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary-foreground max-w-3xl">
            Hi, I'm <span className="text-accent">Markus Nina</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/85">
            A STEM Academy student documenting four years of learning, building, and discovery — from coursework
            and capstone to internships and the Essential Skills that tie it all together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/capstone-project">
                View Capstone <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20">
              <Link to="/coursework">Coursework</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Background &amp; Interests</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
              I am Markus Nina, and I am a student in high school. I am interested 
              in computer science, computer engineering, and game development. I like
              studying about technologies and their implementation and see how
              software and hardware merge into one thing.
              </p>
              <p>
              One of my interests is programming and development. Some
              programming languages I have worked with include Java, as well as
              some knowledge of C#. I have worked with markup languages, such as
              HTML and CSS. With the help of these skills, I could work on some
              personal projects related to programming and development. These 
              projects include development of various games and websites, among others.
              </p>
              <p>
              The goals I would like to accomplish in the future involve learning more
               about technologies, specifically programming and development, and
               finding opportunities connected with software engineering and game development.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 content-start">
            {[
              { icon: Beaker, title: "Curious", body: "Driven by questions and experiments." },
              { icon: Code, title: "Builder", body: "I love turning ideas into things that work." },
              { icon: Lightbulb, title: "Creative", body: "Finding new angles on hard problems." },
              { icon: ArrowRight, title: "Forward", body: "Always learning what's next." },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
