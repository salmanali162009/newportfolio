import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll-reveal hook.
 * Runs once on mount. To re-animate after a data/state change, remount the
 * subtree (e.g. `key` it) so the effect re-runs against fresh DOM.
 */
export function useGsapReveal(options = {}) {
  const ref = useRef(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    const {
      y = 28,
      opacity = 0,
      duration = 0.85,
      delay = 0,
      trigger = el,
      start = "top 85%",
      once = true,
      stagger = 0,
      targets = null,
      x = 0,
      scale = 1,
      ease = "power3.out"
    } = optionsRef.current;

    const elements = targets ? el.querySelectorAll(targets) : el;

    gsap.set(elements, { y, x, opacity, scale });

    const tween = gsap.to(elements, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration,
      delay,
      stagger,
      ease
    });

    const triggerObj = ScrollTrigger.create({
      trigger,
      start,
      once,
      animation: tween
    });

    return () => {
      triggerObj.kill();
    };
  }, []);

  return ref;
}

/**
 * Convenience hook returning gsap + reduced-motion guard for imperative
 * effects (hero intro, timeline scrub, parallax).
 */
export function useGsapUtils() {
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = prefersReducedMotion();
  }, []);

  return { gsap, ScrollTrigger, isReduced: () => reducedRef.current };
}