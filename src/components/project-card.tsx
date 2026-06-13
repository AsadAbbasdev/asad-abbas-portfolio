"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="card-glow group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]"
    >
      {/* Project visual header - Browser Mockup */}
      <div className="relative h-60 overflow-hidden bg-black/40 border-b border-white/[0.06] flex items-center justify-center p-4">
        {/* Blurred background version of the image for depth */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110 pointer-events-none"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent z-10 pointer-events-none" />

        {/* Mockup screen containing the screenshot */}
        <div className="relative z-20 w-full h-full rounded-lg overflow-hidden border border-white/[0.1] bg-neutral-900 shadow-2xl transition duration-500 group-hover:scale-[1.01] group-hover:border-white/[0.18] flex flex-col">
          {/* Mockup browser window header */}
          <div className="flex h-6 items-center gap-1.5 border-b border-white/[0.06] bg-neutral-950/80 px-3 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            <span className="mx-auto text-[8px] font-mono tracking-wider text-neutral-500 uppercase select-none">
              {project.imageLabel}
            </span>
          </div>
          {/* Screenshot image container */}
          <div className="relative flex-1 bg-[#0d0d0d] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
            />
            {/* Soft inner glow overlay */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
          </div>
        </div>
        
        <div className="absolute right-6 top-6 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 shadow-lg">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </div>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="text-xl font-semibold tracking-tight text-white transition group-hover:text-[#60a5fa] md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#888] md:text-[15px]">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mt-4 space-y-2 text-xs text-[#a1a1aa] border-t border-white/[0.04] pt-4">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#0070f3] shadow-[0_0_8px_rgba(0,112,243,0.8)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-[#a1a1aa]"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Code2 size={15} />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            Live Demo
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
