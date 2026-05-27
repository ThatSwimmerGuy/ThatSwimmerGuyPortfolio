interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-gradient-to-b from-secondary/40 to-background">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
