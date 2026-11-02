type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
      <p className={centered ? 'mt-4 text-base text-slate-600' : 'mt-4 text-base text-slate-600'}>{subtitle}</p>
    </div>
  );
}
