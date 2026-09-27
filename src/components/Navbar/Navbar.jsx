import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router";
import { FaMoon, FaSun, FaArrowRight } from "react-icons/fa";
import { useGsapUtils } from "../../hooks/useGsapReveal";
import { navLinks, developer } from "../../utils/constants";

function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="Salman Ali — home"
    >
      <span className="grid place-items-center w-9 h-9 border border-[var(--border-strong)] text-[var(--accent)] font-bold font-display text-sm tracking-tight transition-colors duration-300 group-hover:border-[var(--accent)]">
        {developer.monogram}
      </span>
      <span className="hidden sm:inline font-display font-semibold tracking-[0.18em] text-sm uppercase">
        Salman Ali
      </span>
    </Link>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const menuInnerRef = useRef(null);
  const { gsap } = useGsapUtils();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || !menuInnerRef.current) return undefined;
    const links = menuInnerRef.current.querySelectorAll(".mobile-menu-link");
    const tl = gsap.timeline();
    tl.set(links, { opacity: 0, y: 18 });
    tl.to(links, {
      opacity: 1,
      y: 0,
      stagger: 0.06,
      duration: 0.5,
      ease: "power3.out"
    });
    return () => {
      tl.kill();
    };
  }, [open, gsap]);

  const underlineClass = ({ isActive }) =>
    [
      "relative px-1 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200",
      isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
    ].join(" ");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[var(--hairline)]" : "border-b border-transparent"
      }`}
    >
      {scrolled && (
        <div
          className="absolute inset-0 bg-[var(--bg-primary)]/85 backdrop-blur-xl"
          aria-hidden="true"
        />
      )}
      <nav
        className="relative container-portfolio flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        <Logo onClick={closeMenu} />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={underlineClass}
              end={link.path === "/"}
            >
              {({ isActive }) => (
                <span className="relative inline-flex flex-col items-center">
                  {link.name}
                  <span
                    className={`absolute -bottom-[7px] h-px bg-[var(--accent)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid place-items-center w-9 h-9 rounded-md border border-[var(--border-color)] text-[var(--text-secondary)] transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)]"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-md border border-[var(--border-color)] transition-colors duration-300 hover:border-[var(--accent)]"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-px w-4 bg-current transition-all duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-all duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden fixed inset-0 top-16 z-40 bg-[var(--bg-primary)] overflow-y-auto"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div ref={menuInnerRef} className="container-portfolio pt-8 pb-16 flex flex-col gap-8 min-h-full">
            <div className="flex flex-col">
              <span className="eyebrow mb-8">Navigation</span>
              <nav className="flex flex-col gap-2" aria-label="Mobile pages">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `mobile-menu-link ${isActive ? "text-[var(--accent)]" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="mt-auto pt-10 border-t border-[var(--border-color)] flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="eyebrow mb-2">Connect</span>
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${developer.email}`} className="link-underline w-fit">
                    {developer.email}
                  </a>
                  <a href={developer.github} target="_blank" rel="noopener noreferrer" className="link-underline w-fit">
                    GitHub
                  </a>
                  <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline w-fit">
                    LinkedIn
                  </a>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary w-fit">
                Let's Work Together
                <FaArrowRight className="btn-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}