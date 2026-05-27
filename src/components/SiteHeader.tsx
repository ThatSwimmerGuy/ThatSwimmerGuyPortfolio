import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/capstone-proposal", label: "Capstone Proposal" },
  { to: "/capstone-project", label: "Capstone Project" },
  { to: "/internship", label: "Internship" },
  { to: "/coursework", label: "Coursework" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span>STEM Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium bg-secondary text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="md:hidden flex flex-wrap gap-1 border-t border-border px-2 py-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "rounded-md px-2 py-1 text-xs font-medium bg-secondary text-foreground" }}
            activeOptions={{ exact: true }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground text-center">
        STEM Academy Portfolio &middot; Built with care to document the journey.
      </div>
    </footer>
  );
}
