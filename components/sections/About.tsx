"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Briefcase } from "@phosphor-icons/react";

/* Header slides from left */
const fromLeft = {
  hidden:  { opacity: 0, x: -50, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0,   filter: "blur(0px)",
    transition: { type: "spring" as const, damping: 20, stiffness: 180 } },
};

/* Paragraphs bounce up */
const bounceUp = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, damping: 18, stiffness: 220, delay: i * 0.1 },
  }),
};

/* Stats slide in from right */
const fromRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { type: "spring" as const, damping: 18, stiffness: 200, delay: i * 0.12 },
  }),
};

const stats = [
  { icon: GraduationCap, value: "85%",    label: "Year 1, First Class Honours" },
  { icon: Trophy,        value: "Top 20", label: "of 280 in my year"           },
  { icon: Briefcase,     value: "6+",     label: "client projects at Bynle"    },
];

const experience = [
  {
    role: "Co-founder & software developer",
    org: "Bynle",
    period: "May 2025 – now",
    detail: "3-person studio building custom websites and web apps for small businesses. 6+ clients.",
  },
  {
    role: "Undergraduate lab tutor",
    org: "DCU School of Computing",
    period: "Sept 2026 – now",
    detail: "Weekly labs (4 h/week) for first-year Computer Programming I and II (Python).",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-frame">
      <div className="container">

        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <span className="eyebrow mb-4 block">About</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink max-w-2xl">
            CS student.
            <br />
            <span className="text-muted font-serif">Habitual builder.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Text column */}
          <div className="space-y-5">
            {[
              "CS student based in Dublin. I got into AI before it was everywhere and never really stopped. Most of my time outside of college goes into building things and seeing if they actually hold up.",
              "I pick up projects mostly because I want to know how something really works. Usually that means I end up building it rather than just reading about it.",
              "I want to be the kind of developer who can take an idea and make it real without needing a big team or a budget. That's what I'm working toward.",
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={bounceUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="text-base text-muted leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            <div className="divider my-6" />

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.1 }}
            >
              <div className="text-xs text-muted uppercase tracking-widest mb-4 font-medium">
                Experience
              </div>
              <div className="space-y-4">
                {experience.map(({ role, org, period, detail }) => (
                  <div key={org} className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-ink font-medium">{role} — {org}</div>
                      <div className="text-xs text-muted mt-0.5 leading-relaxed">{detail}</div>
                    </div>
                    <div className="text-xs text-muted font-mono shrink-0">{period}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats column — each card flies from right */}
          <div className="flex flex-col gap-4 md:sticky md:top-28">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex items-center gap-4 p-4 rounded-xl border border-frame bg-surface"
              >
                <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "var(--paper)" }}>
                  <Icon size={18} weight="duotone" className="text-muted" />
                </span>
                <div>
                  <div className="font-serif text-2xl leading-none text-ink tracking-tight">{value}</div>
                  <div className="text-xs text-muted mt-0.5">{label}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              custom={3}
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="p-4 rounded-xl border border-frame mt-2"
              style={{ background: "var(--surface)" }}
            >
              <div className="text-xs text-muted uppercase tracking-widest mb-2 font-medium">
                Currently studying
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["DSA", "C", "DevOps", "Japanese"].map((t) => (
                  <span key={t} className="tag tag-amber">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
