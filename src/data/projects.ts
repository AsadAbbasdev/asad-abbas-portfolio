import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "AI Travel Planner (RAG Based)",
    description:
      "Intelligent travel planning system that uses Retrieval-Augmented Generation to produce contextual plans and recommendations.",
    techStack: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "Vector DB"],
    githubUrl: "https://github.com/AsadAbbasdev/ai-travel-planner-hackathon",
    liveUrl: "https://example.com/",
    imageLabel: "RAG Travel Planner",
    image: "/projects/wanderai.png",
    highlights: [
      "Retrieval-Augmented Generation itinerary planning",
      "Integrated OpenAI API & Vector Database search",
      "Interactive map and budget calculation engine",
    ],
  },
  {
    title: "AI-Powered Cybersecurity Defense System",
    description:
      "A next-generation cybersecurity solution combining AI, machine learning, and cyber defense strategies to identify threats, predict malicious activities, and enable proactive incident response.",
    techStack: ["Python", "FastAPI", "Scikit-Learn", "Threat Intelligence APIs"],
    githubUrl: "https://github.com/",
    liveUrl: "https://a2sentinel.vercel.app/",
    imageLabel: "AI Cyber Defense",
    image: "/projects/cyber-defense.png",
    highlights: [
      "Anomaly detection via trained ML models",
      "Threat intelligence API ingestion pipelines",
      "Real-time automated incident alerts",
    ],
  },
  {
    title: "AI Virtual Voice Assistant (Final Year Project)",
    description:
      "Voice-enabled AI assistant with natural language interaction and task execution capabilities.",
    techStack: ["Python", "NLP", "Speech Processing", "LLMs"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    imageLabel: "Voice Assistant",
    image: "/projects/voice-assistant.png",
    highlights: [
      "Speech-to-text & text-to-speech processing",
      "Local LLM reasoning & command orchestration",
      "Zero-latency multi-turn conversations",
    ],
  },
  {
    title: "Rice Disease Classification",
    description:
      "AI-powered image classification system for crop disease detection and agricultural decision support.",
    techStack: ["TensorFlow", "Computer Vision", "Python", "Deep Learning"],
    githubUrl: "https://github.com/AsadAbbasdev/rice-disease-classifier-webapp",
    liveUrl: "https://example.com/",
    imageLabel: "Rice Disease AI",
    image: "/projects/rice-disease.png",
    highlights: [
      "Deep CNN classifier built on TensorFlow",
      "95%+ crop pathology identification accuracy",
      "Agricultural decision support reporting",
    ],
  },
  {
    title: "Phishing URL Detection using Machine Learning",
    description:
      "Cybersecurity-focused ML solution that detects malicious URLs and reduces phishing risk.",
    techStack: ["Machine Learning", "Python", "Flask", "Feature Engineering"],
    githubUrl: "https://github.com/AsadAbbasdev/Phishing-URL-Detection-using-ML",
    liveUrl: "https://phishing-url-detector-webapp.streamlit.app/",
    imageLabel: "Phishing Detection",
    image: "/projects/phishing-detection.png",
    highlights: [
      "Feature extraction from dynamic web URLs",
      "Ensemble classification (Random Forest & XGBoost)",
      "Sleek Python Flask inference backend",
    ],
  },
  {
    title: "Heart Disease Prediction using Machine Learning",
    description:
      "Predictive healthcare application that estimates heart disease risk through trained ML models.",
    techStack: ["Scikit-Learn", "Python", "Data Analysis", "Model Evaluation"],
    githubUrl: "https://github.com/AsadAbbasdev/CardioAI-Heart-Disease-prediction-WebApp",
    liveUrl: "https://cardioai-heart-disease-prediction-webapp.streamlit.app/",
    imageLabel: "Heart Disease ML",
    image: "/projects/heart-disease.png",
    highlights: [
      "Scikit-Learn predictive health analytics",
      "Feature engineering of clinical health markers",
      "Rigorous cross-validation model evaluation",
    ],
  },
  {
    title: "Quiz App",
    description:
      "Modern interactive quiz platform with dynamic questions and responsive UX.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    imageLabel: "Quiz Platform",
    image: "/projects/quiz-app.png",
    highlights: [
      "Fully responsive Next.js dynamic client state",
      "Animated transitions & interactive gameplay",
      "Centralized question banks and score logging",
    ],
  },
];
