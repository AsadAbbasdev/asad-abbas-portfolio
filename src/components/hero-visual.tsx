"use client";

import { motion } from "framer-motion";
import { Cpu, FolderGit2, Layers, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-center justify-center lg:min-h-[480px]">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="animate-orb-float absolute -left-8 top-1/4 h-48 w-48 rounded-full bg-[#0070f3]/25 blur-[80px]" />
        <div
          className="animate-orb-float absolute -right-4 bottom-1/4 h-56 w-56 rounded-full bg-[#7928ca]/20 blur-[90px]"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="animate-orb-pulse absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/15 blur-[60px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel relative w-full max-w-md overflow-hidden rounded-3xl p-1"
      >
        <div className="relative rounded-[22px] bg-[#0a0a0a] p-6 md:p-8">
          {/* Scan line */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]">
            <div className="animate-scan absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0070f3]/60 to-transparent" />
          </div>

          {/* Header bar */}
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#666]">
              inference.engine
            </span>
          </div>

          {/* Circular Profile Image with HUD style */}
          <div className="relative mx-auto aspect-square max-w-[240px] flex items-center justify-center my-6">
            {/* Rotating outer dashed circle */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              <div className="h-full w-full rounded-full border border-dashed border-[#0070f3]/25" />
            </motion.div>
            
            {/* Rotating inner dashed circle */}
            <motion.div
              className="absolute inset-2.5"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="h-full w-full rounded-full border border-dashed border-[#7928ca]/20" />
            </motion.div>

            {/* Profile Image container */}
            <div className="relative h-[82%] w-[82%] rounded-full overflow-hidden border border-white/10 bg-neutral-950 p-1 shadow-[0_0_35px_rgba(0,112,243,0.12)]">
              <div className="h-full w-full rounded-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="/profile/asad-abbas.png"
                  alt="Asad Abbas"
                  className="h-full w-full object-cover object-center scale-[1.05] transition duration-500 hover:scale-[1.1]"
                />
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0070f3]/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Pulse glow background */}
            <div className="absolute inset-0 rounded-full bg-[#0070f3]/8 blur-xl -z-10 animate-pulse" />
          </div>

          {/* Status metrics */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              { icon: FolderGit2, label: "Projects Built", value: "7+" },
              { icon: Cpu, label: "ML • DL • RAG", value: "Specialist" },
              { icon: Layers, label: "AI Applications", value: "Full Stack" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-1.5 py-3 text-center flex flex-col justify-between min-h-[84px]"
              >
                <Icon className="mx-auto mb-1.5 h-3.5 w-3.5 text-[#0070f3]" />
                <div>
                  <p className="font-mono text-[11px] font-semibold text-white tracking-tight leading-none">{value}</p>
                  <p className="mt-1 text-[8.5px] uppercase tracking-wider text-[#666] leading-none">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-[#0070f3]/20 bg-[#0070f3]/5 px-3 py-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#0070f3]" />
            <span className="font-mono text-xs text-[#888]">
              <span className="text-[#10b981]">●</span> systems online — RAG · LLM · ML
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
