"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14 max-w-3xl"
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#666]">
        <span className="text-[#0070f3]">—</span> {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#888] md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.header>
  );
}
