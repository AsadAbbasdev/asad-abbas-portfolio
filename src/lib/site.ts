import type { SocialLink } from "@/types/portfolio";

export const siteConfig = {
  name: "Asad Abbas",
  title: "AI Engineer | ML, DL & RAG Specialist",
  company: "A2 AI Labs",
  tagline: "Building Intelligent AI-Powered Applications",
  description:
    "Asad Abbas is an AI Engineer and ML, DL & RAG Specialist building premium AI-powered applications, automation systems, and scalable LLM products.",
  url: "https://asad-abbas-portfolio.vercel.app",
  email: "asadabbas.contact@gmail.com",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/AsadAbbasdev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asad-abbas-it/" },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export const heroBadges = [
  "ML Engineer",
  "Deep Learning",
  "RAG Systems",
  "LLM Apps",
  "API Integrations",
];
