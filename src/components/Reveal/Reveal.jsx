import { useGsapReveal } from "../../hooks/useGsapReveal";

export default function Reveal({
  children,
  className = "",
  targets = null,
  y = 28,
  duration = 0.85,
  stagger = 0,
  delay = 0,
  start = "top 85%",
  ...rest
}) {
  const ref = useGsapReveal({ y, duration, stagger, delay, start, targets });

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}