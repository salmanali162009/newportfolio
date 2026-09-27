import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid place-items-center w-11 h-11 border border-[var(--border-strong)] bg-[var(--bg-secondary)]/90 backdrop-blur text-[var(--text-secondary)] transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}