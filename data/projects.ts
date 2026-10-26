/*
 * Single source of truth for portfolio content.
 * Edit here — nothing else needs to change.
 *
 * `status`:  "live" | "dev" | "complete"
 * `tagColor`: controls which pastel tag style is applied
 */

export type TagColor = "amber" | "blue" | "green" | "red" | "plain";

export interface Project {
  id: string;
  title: string;
  description: string;
  hardPart?: string;
  stack: { name: string; color: TagColor }[];
  github: string | null;
  live: string | null;
  linkedin?: string;
  status: "live" | "dev" | "complete";
  year: string;
  featured?: boolean;
  visual: "spectral" | "pitch" | "cosmosbusta" | "voice" | "startup" | "tennis" | "sweatshot";
}

export const projects: Project[] = [
  {
    id: "sweatshot",
    title: "SweatShot",
    description:
      "Fitness accountability app for iOS, in TestFlight beta. Post dual camera proof of your workout to a private friend circle every day. Build streaks, compete on leaderboards, and feel the FOMO when your crew shows up and you don't.",
    hardPart: "Hard part: dual-camera capture in Expo, and streaks and leaderboards that update in real time on Supabase.",
    stack: [
      { name: "React Native", color: "blue" },
      { name: "Expo", color: "blue" },
      { name: "Supabase", color: "green" },
      { name: "Zustand", color: "amber" },
      { name: "TypeScript", color: "blue" },
    ],
    github: null,
    live: "https://sweatshot.app",
    status: "dev",
    year: "2026",
    featured: true,
    visual: "sweatshot",
  },
  {
    id: "spectral-identifier",
    title: "Spectral Identifier",
    description:
      "Open-source tool that identifies minerals from real X-ray diffraction and Raman spectra. Built during the OSI Hackathon 2026 with a 4-person international team. I joined mid-sprint, built the marimo web app (X-ray, Raman and AI literature-search tabs), the core layer connecting the research code to the UI, and 7 pytest tests verifying the app reproduces the benchmark results (93.3% top-1 Raman identification, ~0.003 Å median lattice error).",
    hardPart: "Hard part: wrapping research code in an app without changing its results; tests pin the app to the benchmark numbers.",
    stack: [
      { name: "Python", color: "green" },
      { name: "marimo", color: "amber" },
      { name: "NumPy", color: "blue" },
      { name: "SciPy", color: "blue" },
      { name: "pytest", color: "plain" },
    ],
    github: "https://github.com/WilmerGaspar/spectral-identifier-v1",
    live: null,
    linkedin: "https://www.linkedin.com/in/eugeniobustamante/details/projects/",
    status: "complete",
    year: "2026",
    visual: "spectral",
  },
  {
    id: "voice-calendar",
    title: "VoiceCalendar",
    description:
      "Talk to your calendar. Say what you want to schedule, it transcribes it with Whisper, pulls out the details with Groq, and adds the event to Google Calendar. Works from the web, CLI, or Telegram.",
    hardPart: "Hard part: turning free speech into a valid calendar event: Whisper transcription, LLM extraction, then Pydantic validation before anything is written.",
    stack: [
      { name: "Python", color: "green" },
      { name: "Flask", color: "green" },
      { name: "Groq", color: "amber" },
      { name: "Whisper", color: "amber" },
      { name: "Google API", color: "red" },
    ],
    github: "https://github.com/eugeniobusta/voice-calendar-ai",
    live: "https://voice-calendar-ai.onrender.com/",
    status: "complete",
    year: "2026",
    visual: "voice",
  },
  {
    id: "social-tennis",
    title: "Social Tennis",
    description:
      "Website for DCU's social tennis club. Session listings, gallery, announcements. The committee can update everything through Sanity CMS without touching code.",
    hardPart: "Hard part: giving a non-technical committee full control of the content through a headless CMS.",
    stack: [
      { name: "React", color: "blue" },
      { name: "Vite", color: "amber" },
      { name: "Sanity CMS", color: "red" },
      { name: "JavaScript", color: "amber" },
    ],
    github: "https://github.com/eugeniobusta/dcu-tennis-website",
    live: "https://dcu-tennis-website.vercel.app/",
    status: "complete",
    year: "2026",
    visual: "tennis",
  },
];

export const skills = [
  {
    category: "Languages",
    color: "blue" as TagColor,
    items: ["Python", "TypeScript", "JavaScript", "C"],
  },
  {
    category: "Frameworks",
    color: "green" as TagColor,
    items: ["Next.js", "React", "React Native", "Expo", "Flask", "Node.js"],
  },
  {
    category: "AI / ML",
    color: "amber" as TagColor,
    items: ["Groq", "Whisper", "Claude API", "marimo"],
  },
  {
    category: "Databases",
    color: "plain" as TagColor,
    items: ["PostgreSQL", "Supabase", "SQLite"],
  },
  {
    category: "Tools",
    color: "plain" as TagColor,
    items: ["Git", "Vercel", "Render", "pytest", "Linux"],
  },
];

export const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  dev: "In development",
  complete: "Complete",
};

export const statusColor: Record<Project["status"], TagColor> = {
  live: "green",
  dev: "amber",
  complete: "blue",
};
