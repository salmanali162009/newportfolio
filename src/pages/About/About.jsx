import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import JourneyTimeline from "../../components/JourneyTimeline/JourneyTimeline";
import Reveal from "../../components/Reveal/Reveal";
import journeyDetail from "../../data/journeyDetail";
import { developer } from "../../utils/constants";

const focusPoints = [
  {
    id: "01",
    title: "Full Stack Focus",
    text: "Building complete web applications — responsive interfaces with React and TypeScript, backed by Node.js, Express.js and REST APIs."
  },
  {
    id: "02",
    title: "Clean Architecture",
    text: "Writing maintainable code with reusable components, separation of concerns and data-driven design."
  },
  {
    id: "03",
    title: "Interactive UX",
    text: "Crafting polished experiences with purposeful animations and thoughtful micro-interactions."
  },
  {
    id: "04",
    title: "Auth & Cloud Services",
    text: "Implementing authentication and security flows with Firebase Authentication, Firestore and Cloudinary."
  }
];

export default function About() {
  return (
    <section className="container-portfolio py-16 md:py-24" aria-label="About">
      {/* Intro — editorial two column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <span className="numeral">(01)</span>
              <span className="eyebrow">About</span>
            </div>
            <h1 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.04] tracking-tight">
              Full stack developer who cares about the details
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              I'm {developer.name}. I build modern web applications across both
              the frontend and the backend.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <Reveal className="flex flex-col gap-5">
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
              I build with <strong className="text-[var(--text-primary)]">React</strong>,{" "}
              <strong className="text-[var(--text-primary)]">TypeScript</strong> and modern
              frontend technologies on the client side, and with{" "}
              <strong className="text-[var(--text-primary)]">Node.js</strong>,{" "}
              <strong className="text-[var(--text-primary)]">Express.js</strong> and REST APIs on
              the server — always aiming for applications that are visually polished, functional,
              accessible and easy to maintain.
            </p>
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
              My approach is built on clean component architecture, reusable
              code and data-driven design so projects stay scalable. I handle
              authentication and security flows, and I'm continuing into
              databases, GraphQL, Docker, CI/CD and cloud deployment.
            </p>
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
                  {"  "}focus: <span className="text-[var(--text-primary)]">"React + Node.js"</span>,{"\n"}
                  {"  "}stack: <span className="text-[var(--text-primary)]">["React", "TS", "Express"]</span>,{"\n"}
                  {"  "}learning: <span className="text-[var(--text-primary)]">"Databases"</span>,{"\n"}
                  {"  "}mindset: <span className="text-[var(--text-primary)]">"Build. Learn. Improve."</span>,{"\n"}
                  <span className="text-[var(--text-muted)]">{"}"}</span>
                  {"\n"}
                </code>
              </pre>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
              {focusPoints.map((point) => (
                <div key={point.id} className="bg-[var(--bg-primary)] p-6 flex flex-col gap-2">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--accent)]">
                    {point.id}
                  </span>
                  <h3 className="font-display font-semibold text-lg tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/skills" className="btn btn-primary">
              Explore Skills
              <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28">
            <SectionHeader
              align="left"
              index="02"
              eyebrow="Journey"
              title="Development Journey"
              description="The milestones that shaped my skills as a full stack developer."
            />
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <JourneyTimeline items={journeyDetail} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}