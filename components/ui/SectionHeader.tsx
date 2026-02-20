import ScrollReveal from './ScrollReveal';

export default function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
  headingId,
}: {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  headingId?: string;
}) {
  return (
    <ScrollReveal className="text-center mb-14">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-8 bg-gold" />
        <span className="text-gold font-medium uppercase tracking-wider text-sm">
          {label}
        </span>
        <div className="h-px w-8 bg-gold" />
      </div>
      <h2
        id={headingId}
        className={`text-3xl md:text-4xl font-serif ${light ? 'text-white' : 'text-ocean-deep'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
