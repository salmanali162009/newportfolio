import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SkillGrid from "../../components/SkillGrid/SkillGrid";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import JourneyTimeline from "../../components/JourneyTimeline/JourneyTimeline";
import Reveal from "../../components/Reveal/Reveal";
import { useGsapUtils } from "../../hooks/useGsapReveal";
import skillDetail from "../../data/skillDetail";
import projectDetail from "../../data/projectDetail";
import journeyDetail from "../../data/journeyDetail";
import { developer, socialLinks } from "../../utils/constants";

/* ------------------------------------------------------------
   HERO
   ------------------------------------------------------------ */
function Hero() {
  const rootRef = useRef(null);
  const { gsap } = useGsapUtils();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = root.querySelectorAll("[data-hero]");
    if (reduced || !els.length) return undefined;

    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo(
      els,
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" }
    );

    const panelFloat = gsap.fromTo(
      root.querySelector("[data-hero-float]"),
      { y: 0 },
      { y: -8, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut" }
    );

    return () => {
      tl.kill();
      panelFloat.kill();
    };
  }, [gsap]);

  const hasPortrait = Boolean(developer.portrait);

  return (
    <section
      ref={rootRef}
      className="relative bg-glow overflow-hidden border-b border-[var(--hairline)]"
      aria-label="Introduction"
    >
      <div className="container-portfolio pt-14 md:pt-24 pb-16 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left — content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span data-hero className="eyebrow">
            Hello, I'm {developer.name}
          </span>

          <h1 className="font-display font-semibold text-[clamp(2.6rem,6.5vw,4.6rem)] leading-[1.02] tracking-[-0.025em]">
            <span className="block">Full Stack</span>
            <span className="block">
              Developer<span className="text-[var(--accent)]">.</span>
            </span>
          </h1>

          <p
            data-hero
            className="font-mono text-[13px] md:text-sm tracking-[0.08em] text-[var(--accent)] uppercase"
          >
            React &bull; TypeScript &bull; Node.js &bull; Express.js &bull; Modern Web
            Experiences
          </p>

          <p data-hero className="max-w-xl text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
            {developer.intro}
          </p>

          <div data-hero className="flex flex-wrap items-center gap-3 pt-2">
            <Link to="/projects" className="btn btn-primary">
              View Projects
              <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Let's Work Together
            </Link>
          </div>

          <div data-hero className="pt-3">
            <SocialLinks />
          </div>
        </div>

        {/* Right — identity panel */}
        <div data-hero className="lg:col-span-5">
          <div className="relative max-w-md mx-auto lg:ml-auto w-full">
            <div className="identity-panel relative border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 pb-5 overflow-hidden">
              <span className="identity-frame tl" aria-hidden="true" />
              <span className="identity-frame br" aria-hidden="true" />

              <div className="relative w-full aspect-[4/5] bg-[var(--bg-elevated)] border border-[var(--border-color)] overflow-hidden">
                {hasPortrait ? (
                  <img
                    src={developer.portrait}
                    alt={`Portrait of ${developer.name}`}
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="relative grid place-items-center h-full w-full">
                    <span className="pointer-events-none absolute inset-6 border border-[var(--accent-border)]" aria-hidden="true" />
                    <span className="font-display font-semibold text-[clamp(5rem,12vw,8rem)] leading-none text-[var(--accent)] opacity-90">
                      {developer.monogram}
                    </span>
                    <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {developer.role}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 grid grid-cols-3 divide-x divide-[var(--hairline)]">
                {["React", "TypeScript", "Node.js"].map((label) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      Stack
                    </span>
                    <span className="font-display font-semibold text-sm tracking-tight">{label}</span>
                  </div>
                ))}
              </div>

              <div data-hero-float className="absolute -bottom-4 left-5 hidden sm:flex items-center gap-2 px-3 py-2 bg-[var(--bg-primary)] border border-[var(--accent-border)]">
                <span className="relative inline-flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" aria-hidden="true" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-[var(--accent)]" aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-primary)]">
                  Available for projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   ABOUT PREVIEW
   ------------------------------------------------------------ */
function AboutPreview() {
  return (
    <section className="container-portfolio section-spacing" aria-label="About preview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="numeral">(01)</span>
            <span className="eyebrow">About</span>
          </div>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.9rem)] leading-[1.05] tracking-tight">
            Full stack developer building complete web apps
          </h2>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            I build complete web applications — responsive, modern interfaces
            with React and TypeScript, connected to Node.js, Express.js and
            REST APIs on the server. My focus is on clean component
            architecture, reusable code and experiences that feel polished on
            every device.
          </p>
          <div>
            <Link to="/about" className="link-arrow">
              More about me
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)]">
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-color)]">
              <span className="font-mono text-xs tracking-[0.14em] text-[var(--text-muted)]">
                developer.ts
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">
                {developer.monogram}
              </span>
            </div>
            <pre className="p-6 md:p-8 font-mono text-[13px] leading-7 overflow-x-auto">
              <code>
                <span className="text-[var(--text-muted)]">const</span>{" "}
                <span className="text-[var(--accent)]">developer</span>{" "}
                <span className="text-[var(--text-muted)]">=</span>{" "}
                <span className="text-[var(--text-muted)]">{"{"}</span>
                {"\n"}
                {"  "}role: <span className="text-[var(--text-primary)]">"Full Stack Developer"</span>,{"\n"}
                {"  "}focus: <span className="text-[var(--text-primary)]">"React + TypeScript + Node.js"</span>,{"\n"}
                {"  "}stack: <span className="text-[var(--text-primary)]">["React", "Node.js", "Express"]</span>,{"\n"}
                {"  "}mindset: <span className="text-[var(--text-primary)]">"Build. Learn. Improve."</span>,{"\n"}
                <span className="text-[var(--text-muted)]">{"}"}</span>
                {"\n"}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   SKILLS PREVIEW
   ------------------------------------------------------------ */
function SkillsPreview() {
  const previewSkills = (() => {
    const seenCategories = [];
    const collected = [];
    for (const skill of skillDetail) {
      if (skill.category === "Learning") continue;
      if (!seenCategories.includes(skill.category)) {
        if (seenCategories.length >= 3) continue;
        seenCategories.push(skill.category);
      }
      collected.push(skill);
    }
    return collected;
  })();

  return (
    <section
      className="container-portfolio section-spacing border-t border-[var(--hairline)]"
      aria-label="Skills preview"
    >
      <Reveal>
        <SectionHeader
          index="02"
          eyebrow="Stack"
          title="The technology I work with"
          description="A curated set of tools I use daily to design, build and ship full-stack products."
        />
      </Reveal>

      <Reveal targets=".skill-preview-item" stagger={0.04}>
        <SkillGrid
          itemClassName="skill-preview-item"
          skills={previewSkills}
          compact
          grouped
        />
      </Reveal>

      <div className="mt-10 flex justify-center">
        <Link to="/skills" className="link-arrow">
          View all skills
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   FEATURED PROJECTS
   ------------------------------------------------------------ */
function FeaturedProjects() {
  const featured = projectDetail.filter((project) => project.featured);

  return (
    <section
      className="container-portfolio section-spacing border-t border-[var(--hairline)]"
      aria-label="Featured projects"
    >
      <Reveal>
        <SectionHeader
          index="03"
          eyebrow="Portfolio"
          title="Selected work"
          description="A few projects that show how I approach real products — from interactive platforms to Firebase-powered applications."
        />
      </Reveal>

      <Reveal targets=".project-row-item" stagger={0.08}>
        <ProjectGrid
          variant="row"
          itemClassName="project-row-item"
          projects={featured}
        />
      </Reveal>

      <div className="mt-16 flex justify-center">
        <Link to="/projects" className="btn btn-ghost">
          View all projects
          <FaArrowRight className="btn-arrow" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   JOURNEY PREVIEW
   ------------------------------------------------------------ */
function JourneyPreview() {
  return (
    <section
      className="container-portfolio section-spacing border-t border-[var(--hairline)]"
      aria-label="Development journey"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <span className="numeral">(04)</span>
              <span className="eyebrow">Journey</span>
            </div>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.05] tracking-tight">
              The path that shaped how I build
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
              From frontend foundations to the React ecosystem — and now
              building on the server with Node.js, Express.js and REST APIs.
            </p>
            <ul className="mt-2 hidden lg:flex flex-col gap-2 text-[13px] text-[var(--text-muted)] font-mono">
              <li>01 — Foundations</li>
              <li>02 — Core Skills</li>
              <li>03 — React Ecosystem</li>
              <li>04 — UI &amp; Animation</li>
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <JourneyTimeline items={journeyDetail.slice(0, 4)} compact />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   CONTACT CTA
   ------------------------------------------------------------ */
function ContactCta() {
  return (
    <section
      className="container-portfolio section-spacing border-t border-[var(--hairline)]"
      aria-label="Contact call to action"
    >
      <Reveal className="relative">
        <div className="relative border border-[var(--accent-border)] bg-[var(--bg-secondary)] px-8 py-14 md:px-16 md:py-20 overflow-hidden">
          <span
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[var(--accent-glow)] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center text-center gap-6">
            <span className="eyebrow eyebrow-center">Contact</span>
            <h2 className="font-display font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight max-w-2xl">
              Have a project in mind? Let's build it together.
            </h2>
            <p className="max-w-xl text-base text-[var(--text-secondary)]">
              I'm open to opportunities and collaborations. If you have an idea,
              I'd love to hear about it.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a href={`mailto:${developer.email}`} className="btn btn-primary">
                <FaEnvelope aria-hidden="true" />
                Get In Touch
              </a>
              <Link to="/contact" className="btn btn-ghost">
                Contact form
              </Link>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 font-mono text-xs tracking-wide text-[var(--text-muted)]">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------
   PAGE
   ------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <JourneyPreview />
      <ContactCta />
    </>
  );
}