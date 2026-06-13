"use client";

import { motion } from "framer-motion";

type AnimatedBadgesProps = {
  items: string[];
};

export function AnimatedBadges({ items }: AnimatedBadgesProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-2">
      {items.map((badge, index) => (
        <motion.span
          key={badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35 + index * 0.06,
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{ scale: 1.03, borderColor: "rgba(0, 112, 243, 0.4)" }}
          className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-[#a1a1aa] transition-colors"
        >
          {badge}
        </motion.span>
      ))}
    </div>
  );
}
