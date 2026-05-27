import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, FileText } from "lucide-react";

export const Route = createFileRoute("/capstone-project")({
  head: () => ({
    meta: [
      { title: "Capstone Project — STEM Portfolio" },
      { name: "description", content: "Project description, Essential Skills, and 18 supporting artifacts." },
      { property: "og:title", content: "Capstone Project" },
      { property: "og:description", content: "The capstone project plus artifacts showing Essential Skills in practice." },
    ],
  }),
  component: CapstoneProject,
});

interface Artifact {
  title: string;
  description: string;
  link?: string;
  image?: string;
}

interface SkillSection {
  skill: string;
  summary: string;
  artifacts: Artifact[];
}

// Artifacts pulled from weekly logs (Jan – Apr) on the VTOL capstone team.
const skills: SkillSection[] = [
  {
    skill: "1. Critical Thinking & Problem Solving",
    summary: "Diagnosing why hardware/firmware wasn't behaving and reasoning through fixes.",
    artifacts: [
      {
        title: "Servo + Pixhawk troubleshooting (2/23 – 3/2)",
        description:
          "Servos refused to run when plugged into the Pixhawk. I tracked down oscilloscope prongs, probed the signal lines to isolate the fault, then followed the ArduPilot documentation to re-clock the servos and get them moving correctly.",
      },
      {
        title: "ESC + motor calibration sprint (2/2 – 2/9)",
        description:
          "All three motors would spin on the RC radio but the Pixhawk wouldn't calibrate the ESCs. I worked through alternative calibration paths and parameter combinations until we identified what was blocking Mission Planner from seeing them.",
      },
    ],
  },
  {
    skill: "2. Oral & Written Communication",
    summary: "Presentations to outside audiences and written documentation for the team.",
    artifacts: [
      {
        title: "OtterCares presentation (2/16 – 2/20)",
        description:
          "Built the slide template, rehearsed, took critique, and delivered the OtterCares presentation explaining our VTOL capstone to a non-technical audience.",
      },
      {
        title: "Parameter + flight-mode research doc (3/2 – 3/9, 3/29 – 4/2)",
        description:
          "Wrote up our parameter list and a comparison of ArduPilot flight modes so the rest of the team could pick the right mode for our airframe without redoing the research.",
      },
    ],
  },
  {
    skill: "3. Collaboration & Teamwork",
    summary: "Pairing with teammates and supporting adjacent sub-teams.",
    artifacts: [
      {
        title: "Final VTOL assembly support (4/20 – 4/24)",
        description:
          "Worked alongside George on the final assembly and sourced bonding agents for him, then served as a second pair of hands for Lukas while he dialed in the last details needed to actually fly.",
      },
      {
        title: "V-tail + third-motor build with Lukas (4/6 – 4/10, 3/29 – 4/2)",
        description:
          "Co-mounted the V-tail and integrated the third motor on the V1 airframe, and paired with Lukas on setting/finalizing parameters so the VTOL could fly mostly automatically.",
      },
    ],
  },
  {
    skill: "4. Creativity & Innovation",
    summary: "Coming up with new approaches when the default path didn't work.",
    artifacts: [
      {
        title: "DSHOT on the AUX ports (3/2 – 3/9)",
        description:
          "Standard motor output wasn't giving us what we needed, so I researched and configured DSHOT specifically on the Pixhawk's AUX ports — an unusual routing that let us drive the motors the way our design required.",
      },
      {
        title: "Wireless telemetry concept (3/29 – 4/2)",
        description:
          "Proposed and researched a wireless link to the VTOL so we could read live telemetry on the laptop during flight instead of being tethered by USB during testing.",
      },
    ],
  },
  {
    skill: "5. Research & Information Literacy",
    summary: "Pulling answers from ArduPilot docs and applying them to our build.",
    artifacts: [
      {
        title: "Flight-mode comparison (3/29 – 4/2)",
        description:
          "Researched each individual ArduPilot flight mode, documented what each one does, and recommended the modes that best fit our VTOL's mission profile.",
      },
      {
        title: "RCIN → Pixhawk conversion research (3/22 – 3/27)",
        description:
          "Figured out from documentation how to first spin the motors via RCIN, then how to hand control over to the Pixhawk so the flight controller does most of the work.",
      },
    ],
  },
  {
    skill: "6. Technology Use",
    summary: "Hands-on with the flight controller, ground station, and bench tools.",
    artifacts: [
      {
        title: "Mission Planner parameter tuning (2/16 – 2/20)",
        description:
          "Set the parameters required to enable VTOL mode in Mission Planner and got the servos running end-to-end through the ground station.",
      },
      {
        title: "Oscilloscope servo debugging (2/23 – 3/2)",
        description:
          "Used the oscilloscope to read the PWM signals coming out of the Pixhawk, which is how we confirmed where the servo issue actually was.",
      },
    ],
  },
  {
    skill: "7. Self-Direction & Initiative",
    summary: "Pushing work forward without being asked.",
    artifacts: [
      {
        title: "Parts run to Ace Hardware (2/2 – 2/9)",
        description:
          "Went out to Ace on my own to find specialized hardware so the team wouldn't be blocked once the rest of the parts arrived and we were ready to assemble.",
      },
      {
        title: "Salvaging components with Dannahour (1/20 – 1/23)",
        description:
          "Took the initiative to dig through previous projects with Dannahour, sort the components, and identify what we could reuse on the VTOL instead of buying new.",
      },
    ],
  },
  {
    skill: "8. Adaptability & Flexibility",
    summary: "Adjusting when the plan or the hardware changed on us.",
    artifacts: [
      {
        title: "Pivot from RCIN to Pixhawk control (3/22 – 3/27)",
        description:
          "After getting the VTOL working over RCIN, we changed direction mid-week and converted the setup so the Pixhawk would handle control — re-wiring and re-configuring on the fly.",
      },
      {
        title: "Backfilling for the robotics-competition week (4/6 – 4/10)",
        description:
          "With most of the team away at their robotics competition, I shifted into cleaning up programming errors, re-clocking servos, and adding the third motor so progress didn't stall.",
      },
    ],
  },
  {
    skill: "9. Productivity & Accountability",
    summary: "Owning the small stuff that keeps the project moving.",
    artifacts: [
      {
        title: "Shop organization system (4/6 – 4/10)",
        description:
          "After losing a servo horn and not being able to recover it, I built an organization system for our parts so the team would stop losing small hardware and lose less time searching.",
      },
      {
        title: "Wiring + cable management support (3/2 – 3/9)",
        description:
          "Helped the electrical sub-team with wiring and cable management so the airframe stayed serviceable as we kept iterating on motors and the flight controller.",
      },
    ],
  },
  {
    skill: "10. Leadership & Responsibility",
    summary: "Coordinating the team and following through on commitments.",
    artifacts: [
      {
        title: "VTOL team coordination (1/20 – 1/23, 2/9 – 2/16)",
        description:
          "Coordinated the VTOL sub-team over email with mentors and messaged the group overnight to align on where everyone was and what still needed to be done after school.",
      },
      {
        title: "Owning the parameter handoff (3/29 – 4/2)",
        description:
          "Took responsibility for finalizing old parameters and setting new ones with Lukas so the airframe was actually ready to fly, instead of leaving it half-tuned for the next person.",
      },
    ],
  },
];

function CapstoneProject() {
  const totalArtifacts = skills.reduce((sum, s) => sum + s.artifacts.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Project"
        title="Capstone Project"
        description="My capstone, the Essential Skills it stretched, and the artifacts that tell the story."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-bold text-foreground">Project Description</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My capstone was a VTOL (vertical take-off and landing) aircraft built and flown with my
            sub-team. Starting in January, we sourced and salvaged electronics, brought up a Pixhawk
            flight controller with ESCs, motors, GPS, and servos, and pushed through a long arc of
            firmware, parameter, and wiring problems in Mission Planner. By spring we had the airframe
            converted from raw RCIN control to Pixhawk-driven flight, DSHOT running on the AUX ports,
            the V-tail and third motor mounted, and the parameters tuned far enough that the aircraft
            could fly mostly automatically. My role moved between troubleshooting (oscilloscope work
            on the servos, ESC calibration), research (flight modes, wireless telemetry), team
            coordination, and hands-on assembly during the final build.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Essential Skills &amp; Artifacts</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Each skill below lists the artifacts that demonstrate how I practiced it.
            </p>
          </div>
          <div className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            {totalArtifacts} / 18 artifacts
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 space-y-12">
        {skills.map((section) => (
          <div key={section.skill}>
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-foreground">{section.skill}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{section.summary}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {section.artifacts.map((artifact, i) => (
                <article
                  key={i}
                  className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
                >
                  {artifact.image && (
                    <img
                      src={artifact.image}
                      alt={artifact.title}
                      loading="lazy"
                      className="mb-4 aspect-video w-full rounded-lg object-cover"
                    />
                  )}
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-secondary p-2 text-primary">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{artifact.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {artifact.description}
                      </p>
                      {artifact.link && (
                        <a
                          href={artifact.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent"
                        >
                          View artifact <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
