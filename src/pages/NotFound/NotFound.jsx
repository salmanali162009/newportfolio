import { Link } from "react-router";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import Reveal from "../../components/Reveal/Reveal";

export default function NotFound() {
  return (
    <section className="container-portfolio py-24 md:py-32" aria-label="Page not found">
      <div className="flex flex-col items-center text-center gap-6">
        <Reveal className="flex flex-col items-center gap-5">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
            404 / Not Found
            <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
          </span>
          <h1 className="font-display font-semibold text-[clamp(6rem,24vw,16rem)] leading-none text-[var(--accent)] tracking-tight">
            404
          </h1>
          <p className="max-w-md text-[var(--text-secondary)]">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/" className="btn btn-primary">
              <FaHome aria-hidden="true" />
              Go Home
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              <FaArrowLeft className="btn-arrow" aria-hidden="true" />
              View Projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}