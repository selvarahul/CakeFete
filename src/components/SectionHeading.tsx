import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2
        className={`font-heading text-3xl font-700 md:text-5xl ${
          light ? "text-white" : "text-chocolate"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-gold" />
        <span className="h-2 w-2 rotate-45 bg-gold" />
        <span className="h-px w-8 bg-gold" />
      </div>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg ${
            light ? "text-cream/80" : "text-subtle"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
