import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    category: "Artificial Intelligence",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models",
      "NLP",
      "Prompt Engineering",
      "AI Automation",
    ],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "API Integrations"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "AI Frameworks",
    items: [
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "Vector Databases",
    ],
  },
  {
    category: "Deployment",
    items: [
      "GitHub",
      "Vercel",
      "Railway",
      "Render",
      "Cloud Deployment (AWS/GCC/Azure)",
    ],
  },
];
