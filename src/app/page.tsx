import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Cpu,
  Code2,
  Database,
  Globe,
  Layers,
  Mail,
  Plug,
  Sparkles,
  Workflow,
} from "lucide-react";
import { AnimatedBadges } from "@/components/animated-badges";
import { HeroVisual } from "@/components/hero-visual";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { SiteNav } from "@/components/site-nav";
import { experienceTimeline } from "@/data/experience";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skillCategories } from "@/data/skills";
import { heroBadges, siteConfig, socialLinks } from "@/lib/site";

const iconMap = {
  bot: Bot,
  brain: Brain,
  cpu: Cpu,
  database: Database,
  workflow: Workflow,
  plug: Plug,
  layers: Layers,
};

const strengths = [
  "Real-world AI solutions",
  "Clean and maintainable code",
  "Scalable architectures",
  "Deployment-ready applications",
  "Strong problem-solving mindset",
  "Modern development practices",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-[#ededed]">
      <SiteNav />

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="page-grid absolute inset-0" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#0070f3]/8 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[500px] rounded-full bg-[#7928ca]/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section
          id="hero"
          className="flex min-h-[92vh] flex-col justify-center pb-16 pt-28 md:pt-32 lg:pb-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="max-w-2xl lg:max-w-none">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-[#888]">
                <Sparkles className="h-3.5 w-3.5 text-[#0070f3]" />
                <span className="text-[#ededed]">{siteConfig.name}</span>
                <span className="text-[#444]">·</span>
                AI Engineer &amp; Consultant
              </p>

              <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
                <span className="text-gradient">AI Engineer</span>
                <br />
                helping startups &amp; founders
                <br />
                <span className="text-gradient-accent">build AI apps at scale.</span>
              </h1>

              <p className="mt-4 max-w-2xl font-mono text-xs leading-relaxed text-[#666] sm:text-sm">
                AI Engineer | ML, DL &amp; RAG Specialist
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#888] md:text-lg">
                I design and deploy robust machine learning models, deep learning systems, and Retrieval-Augmented Generation (RAG) pipelines to solve complex business challenges. Let's transform your ideas into intelligent, production-ready applications.
              </p>

              <AnimatedBadges items={heroBadges} />

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="btn-primary rounded-full px-6 py-2.5 text-sm font-medium"
                >
                  View Projects
                </a>
                <a
                  href="/resume/Asad_Abbas_Resume.pdf"
                  download="Asad_Abbas_Resume.pdf"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium"
                >
                  <svg
                    className="h-4.5 w-4.5 text-[#0070f3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download Resume</span>
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[#0070f3]/30 bg-[#0070f3]/10 px-6 py-2.5 text-sm font-medium text-[#60a5fa] transition hover:bg-[#0070f3]/20"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-8">
                <span className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] whitespace-nowrap">
                  Verification &amp; Networks
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-[#a1a1aa] transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <svg className="h-4 w-4 text-[#ededed]" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href={socialLinks[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-[#a1a1aa] transition hover:border-[#0070f3]/40 hover:bg-[#0070f3]/5 hover:text-white"
                  >
                    <svg className="h-4 w-4 text-[#0070f3]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-[#a1a1aa] transition hover:border-[#7928ca]/40 hover:bg-[#7928ca]/5 hover:text-white"
                  >
                    <Mail size={15} className="text-[#7928ca]" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <div className="section-divider" />

        {/* About */}
        <section id="about" className="py-24 md:py-32">
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-center">
              {/* Left: Profile Image with Premium styling */}
              <div className="relative group mx-auto max-w-sm lg:max-w-none w-full">
                {/* Ambient background glows for the image */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0070f3] to-[#7928ca] opacity-20 blur-xl transition duration-500 group-hover:opacity-35" />
                
                {/* Border frame */}
                <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-3 shadow-2xl">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-900">
                    <img
                      src="/profile/asad-abbas.png"
                      alt="Asad Abbas"
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Inner soft gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Custom watermark badge */}
                    <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] uppercase tracking-widest text-white/70 bg-black/60 backdrop-blur px-2.5 py-1.5 rounded-md border border-white/10">
                      AI Specialist
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Personal details */}
              <div>
                <SectionHeading
                  eyebrow="About Me"
                  title="AI Engineer &amp; ML, DL &amp; RAG Specialist"
                />
                <div className="space-y-4 text-base leading-relaxed text-[#888] md:text-lg">
                  <p>
                    I am an AI Engineer specializing in building intelligent, production-grade applications. My work bridges the gap between complex machine learning theory and scalable, real-world software engineering. I design and implement custom Machine Learning models, Deep Learning systems, and Retrieval-Augmented Generation (RAG) pipelines that drive tangible business value.
                  </p>
                  <p className="text-base text-[#666]">
                    By working closely with startups, founders, and enterprises, I help build automation tools, custom agentic workflows, and full-stack AI integrations. I focus on shipping clean, maintainable code, optimizing API latencies, and ensuring production readiness.
                  </p>
                </div>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "RAG Systems",
                    "Large Language Models",
                    "AI Agentic Workflows",
                    "Full Stack AI Apps",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs font-mono text-[#a1a1aa] transition hover:border-[#0070f3]/30 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="/resume/Asad_Abbas_Resume.pdf"
                    download="Asad_Abbas_Resume.pdf"
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="btn-secondary rounded-full px-6 py-2.5 text-sm font-medium"
                  >
                    Let's Collaborate
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>

        <div className="section-divider" />

        {/* Skills */}
        <section id="skills" className="py-24 md:py-32">
          <SectionReveal>
            <SectionHeading
              eyebrow="Skills"
              title="Technical Expertise"
              description="Categorized strengths across AI, backend, frontend, and deployment."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((skill, i) => (
                <article
                  key={skill.category}
                  className="card-glow group rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition hover:bg-white/[0.02]"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {skill.category}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-[#888] transition group-hover:text-[#a1a1aa]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </SectionReveal>
        </section>

        <div className="section-divider" />

        {/* Projects */}
        <section id="projects" className="py-24 md:py-32">
          <SectionReveal>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected AI and Product Work"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </SectionReveal>
        </section>

        <div className="section-divider" />

        {/* Experience */}
        <section id="experience" className="py-24 md:py-32">
          <SectionReveal>
            <SectionHeading
              eyebrow="Experience"
              title="Professional Timeline"
            />
            <ol className="relative space-y-0">
              {experienceTimeline.map((item, i) => (
                <li
                  key={item.role}
                  className="relative grid gap-6 border-l border-white/[0.08] pb-12 pl-8 last:pb-0 md:grid-cols-[140px_1fr] md:gap-10 md:pl-10"
                >
                  <span
                    className={`timeline-glow absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#0070f3] ${
                      i === 0 ? "ring-4 ring-[#0070f3]/20" : ""
                    }`}
                  />
                  <p className="font-mono text-sm text-[#666]">{item.period}</p>
                  <div className="card-glow rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition hover:border-white/[0.12]">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-[#0070f3]">{item.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#888]">
                      {item.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </SectionReveal>
        </section>

        <div className="section-divider" />

        {/* Services */}
        <section id="services" className="py-24 md:py-32">
          <SectionReveal>
            <SectionHeading
              eyebrow="Services"
              title="How I Can Help You Build"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <article
                    key={service.title}
                    className="card-glow group rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.02]"
                  >
                    <div className="mb-4 inline-flex rounded-xl border border-white/[0.08] bg-[#0070f3]/10 p-2.5 text-[#60a5fa] transition group-hover:bg-[#0070f3]/20">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#888]">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </SectionReveal>
        </section>

        <div className="section-divider" />

        {/* Why work with me */}
        <section id="why-work-with-me" className="py-24 md:py-32">
          <SectionReveal>
            <SectionHeading
              eyebrow="Why Work With Me"
              title="Engineering Focused on Business Outcomes"
            />
            <div className="grid gap-3 md:grid-cols-2">
              {strengths.map((strength) => (
                <article
                  key={strength}
                  className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-5 transition hover:border-white/[0.12]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                    <BriefcaseBusiness className="text-[#0070f3]" size={16} />
                  </div>
                  <p className="text-sm leading-relaxed text-[#a1a1aa]">
                    {strength}
                  </p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </section>

        <div className="section-divider" />

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32">
          <SectionReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s Build Something Amazing Together"
            />
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <form
                className="glass-panel rounded-2xl p-6 md:p-8"
                action={`mailto:${siteConfig.email}`}
                method="post"
                encType="text/plain"
              >
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#a1a1aa]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-premium mb-5 w-full rounded-xl px-4 py-2.5 text-sm text-white"
                />
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#a1a1aa]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input-premium mb-5 w-full rounded-xl px-4 py-2.5 text-sm text-white"
                />
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#a1a1aa]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input-premium w-full rounded-xl px-4 py-2.5 text-sm text-white"
                />
                <button
                  type="submit"
                  className="btn-primary mt-6 rounded-full px-6 py-2.5 text-sm font-medium"
                >
                  Send Message
                </button>
              </form>

              <aside className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 md:p-8">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    Connect Directly
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#888]">
                    Available for freelance projects, startup collaborations,
                    and AI product consulting.
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-flex items-center gap-3 text-sm text-[#a1a1aa] transition hover:text-white"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                          <Mail size={16} className="text-[#0070f3]" />
                        </span>
                        {siteConfig.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={socialLinks[1].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm text-[#a1a1aa] transition hover:text-white"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                          <Globe size={16} className="text-[#0070f3]" />
                        </span>
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href={socialLinks[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm text-[#a1a1aa] transition hover:text-white"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                          <Code2 size={16} className="text-[#0070f3]" />
                        </span>
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="mt-8 font-mono text-xs text-[#444]">
                  {siteConfig.name} · {siteConfig.tagline}
                </p>
              </aside>
            </div>
          </SectionReveal>
        </section>
      </div>

      <footer className="relative z-10 mt-8 border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-[#666] sm:flex-row sm:px-6 lg:px-8">
          <p>
            <span className="text-white">{siteConfig.name}</span>
            <span className="text-[#444]"> · </span>
            AI Engineer &amp; ML Specialist
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
