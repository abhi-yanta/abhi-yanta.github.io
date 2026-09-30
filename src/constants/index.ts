import { asset } from "../lib/asset";
export const links = {
  contactEmail: "2508410100001@recsonbhadra.ac.in",
  github: "https://github.com/abhi-yanta",
  linkedin: "https://linkedin.com/in/abhinav-jaiswal-620738278",
  // Paste your Discord profile/invite link here to show the Discord icon in the footer.
  discord: "",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
] as const;

export const myProjects = [
  {
    title: "VaakSetu - Audio-First Document Safety App",
    desc: "VaakSetu is an Android app that scans legal and financial documents with on-device OCR and speaks a plain-language safety summary in 12 Indian languages, built to protect low-literacy users.",
    subdesc:
      "A rule-based hazard engine flags risky clauses such as high interest rates, land collateral and liability waivers. Selected as a Top 20 finalist at Samsung Solve for Tomorrow 2026 (Team itzFOD).",
    href: "https://github.com/abhi-yanta/VaakSetu",
    texture: asset("/textures/project/project1.mp4"),
    logo: asset("/assets/project-logo1.png"),
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: asset("/assets/spotlight1.png"),
    tags: [
      { id: 1, name: "Flutter" },
      { id: 2, name: "Dart" },
      { id: 3, name: "Google ML Kit" },
      { id: 4, name: "flutter_tts" },
    ],
  },
  {
    title: "RapidAid - Web3 Disaster-Relief Bounty Platform",
    desc: "RapidAid lets donors lock crypto bounties in a Solidity smart contract escrow. Volunteers submit photo and GPS proof of completed relief tasks, and Google Gemini multimodal AI verifies each submission.",
    subdesc:
      "Verified submissions trigger an instant, gasless payout. Built for the HackIndia AI, Web3 & FutureTech Hackathon 2026 in Lucknow.",
    href: "https://github.com/abhi-yanta/RapidAid",
    texture: asset("/textures/project/project2.mp4"),
    logo: asset("/assets/project-logo2.png"),
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: asset("/assets/spotlight2.png"),
    tags: [
      { id: 1, name: "Solidity" },
      { id: 2, name: "Hardhat" },
      { id: 3, name: "React" },
      { id: 4, name: "Gemini AI" },
    ],
  },
  {
    title: "Student Performance Predictor",
    desc: "An end-to-end ML system that predicts student academic performance through regression (continuous score) and classification (performance tier), benchmarking 10 algorithms.",
    subdesc:
      "Best regressor reaches R² = 0.65 and best classifier 77% accuracy. SHAP powers explainable predictions, shipped in an interactive Streamlit dashboard with full pytest coverage.",
    href: "https://github.com/abhi-yanta/Student-Performance-Predictor-",
    texture: asset("/textures/project/project3.mp4"),
    logo: asset("/assets/project-logo3.png"),
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: asset("/assets/spotlight3.png"),
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "Scikit-Learn" },
      { id: 3, name: "SHAP" },
      { id: 4, name: "Streamlit" },
    ],
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "Samsung Solve for Tomorrow 2026",
    pos: "Top 20 Finalist (Team itzFOD)",
    duration: "2026",
    title:
      "Reached the Top 20 finalist teams with VaakSetu, an audio-first document-safety app that reads legal and financial documents aloud for low-literacy users.",
    icon: asset("/assets/trophy.svg"),
    animation: "victory",
  },
  {
    id: 2,
    name: "HackIndia AI, Web3 & FutureTech Hackathon",
    pos: "Builder, Lucknow",
    duration: "2026",
    title:
      "Built RapidAid, a Web3 disaster-relief bounty platform with Solidity smart contract escrows and Gemini AI-verified payouts.",
    icon: asset("/assets/code.svg"),
    animation: "clapping",
  },
  {
    id: 3,
    name: "Rajkiya Engineering College, Sonbhadra",
    pos: "B.Tech, Computer Science & Engineering",
    duration: "2025 - 2029",
    title:
      "Pursuing B.Tech in CSE with a CGPA of 7.815. Solved 55+ DSA problems on LeetCode and an active Codeforces participant.",
    icon: asset("/assets/education.svg"),
    animation: "salute",
  },
] as const;

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: asset("/assets/linkedin.svg"),
    url: links.linkedin,
  },
  {
    name: "GitHub",
    icon: asset("/assets/github.svg"),
    url: links.github,
  },
  ...(links.discord
    ? [
        {
          name: "Discord",
          icon: asset("/assets/discord.svg"),
          url: links.discord,
        },
      ]
    : []),
  {
    name: "Email",
    icon: asset("/assets/gmail.svg"),
    url: `mailto:${links.contactEmail}`,
  },
];
