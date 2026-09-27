import { useRef, useEffect } from "react";
import { useGsapUtils } from "../../hooks/useGsapReveal";

export default function JourneyTimeline({ items, compact = false }) {
  const { gsap, ScrollTrigger } = useGsapUtils();
  const railRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (!railRef.current || !progressRef.current) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      progressRef.current.style.transform = "scaleY(1)";
      return undefined;
    }
    gsap.set(progressRef.current, { scaleY: 0 });
    const st = ScrollTrigger.create({
      trigger: railRef.current,
      start: "top 70%",
      end: "bottom 62%",
      scrub: 0.6,
      animation: gsap.to(progressRef.current, { scaleY: 1, ease: "none" })
    });
    return () => st.kill();
  }, [gsap, ScrollTrigger]);

  return (
    <div ref={railRef} className="timeline-rail flex flex-col">
      <div
        ref={progressRef}
        className="timeline-progress"
        style={{ height: "100%" }}
        aria-hidden="true"
      />
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="relative pl-14 pb-10 last:pb-0">
            <span className="absolute left-0 top-0 z-10 grid place-items-center w-10 h-10 border border-[var(--accent-border)] bg-[var(--bg-primary)] text-[var(--accent)]">
              <Icon className="text-base" aria-hidden="true" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {item.period}
            </span>
            <h3
              className={`font-display font-semibold tracking-tight mt-1 ${
                compact ? "text-lg" : "text-xl md:text-2xl"
              }`}
            >
              {item.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)] max-w-xl">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}