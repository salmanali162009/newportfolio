import { Link } from "react-router";
import { developer, navLinks } from "../../utils/constants";
import SocialLinks from "../SocialLinks/SocialLinks";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-[var(--hairline)]">
      <div className="container-portfolio py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Identity */}
          <div className="flex flex-col gap-4">
            <p className="font-display font-semibold text-3xl tracking-tight">
              {developer.name}
            </p>
            <p className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-muted)]">
              {developer.title}
            </p>
            <SocialLinks />
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-mono text-[13px] tracking-wide text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--hairline)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[13px] text-[var(--text-muted)]">
          <p>
            &copy; {year} {developer.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wide">
            Designed &amp; built by {developer.name}
          </p>
        </div>
      </div>
    </footer>
  );
}