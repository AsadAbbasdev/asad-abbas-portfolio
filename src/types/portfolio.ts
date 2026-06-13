export type SocialLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageLabel: string;
  image: string;
  highlights?: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: "bot" | "brain" | "cpu" | "database" | "workflow" | "plug" | "layers";
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};
