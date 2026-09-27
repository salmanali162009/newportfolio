import { useGsapReveal } from "../../hooks/useGsapReveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  index
}) {
  const ref = useGsapReveal({ y: 24, duration: 0.8 });

  const isCenter = align === "center";

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-5 mb-14 md:mb-20 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <div className={`flex items-center gap-4 ${isCenter ? "justify-center" : "justify-start"}`}>
        {index && <span className="numeral">({index})</span>}
        <span className={`eyebrow ${isCenter ? "eyebrow-center" : ""}`}>{eyebrow}</span>
      </div>
      <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] tracking-tight max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base md:text-lg text-[var(--text-secondary)] ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}