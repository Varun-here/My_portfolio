import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const highlights = [
  { value: "65%", label: "less manual data entry" },
  { value: "40%", label: "faster processing and APIs" },
  { value: "97%", label: "resume extraction accuracy" },
  { value: "5K+", label: "concurrent users supported" },
];

const projects = [
  {
    title: "AI-Powered Career Hub",
    label: "Flagship AI Platform",
    description:
      "A full-stack career intelligence platform that parses resumes, scores ATS alignment, detects skill gaps, and generates personalized job recommendations using structured LLM workflows.",
    details: [
      "Built 10+ user modules with React, Node.js, Prisma, and PostgreSQL.",
      "Integrated OpenAI APIs with structured prompt design and response validation.",
      "Reduced heavy query latency by 70% using indexing, caching, and query optimization.",
    ],
    metric: "97% extraction accuracy",
    stack: ["React", "Node.js", "Prisma", "PostgreSQL", "OpenAI", "JWT"],
    link: "https://github.com/Varun-here/Career_Advisor",
  },
  {
    title: "AI Document Automation",
    label: "Enterprise AI Workflow",
    description:
      "A document automation platform for operations teams, combining OCR, NLP classification, entity extraction, summarization, secure access control, and asynchronous processing queues.",
    details: [
      "Built upload, tracking, analytics, and processing workflows using React and Node.js.",
      "Used Python OCR and LLM APIs to automate document understanding.",
      "Deployed with Docker, GitHub Actions, and Jenkins CI/CD pipelines.",
    ],
    metric: "65% less manual entry",
    stack: ["React", "Node.js", "Python", "Tesseract", "PostgreSQL", "Docker"],
    link: "#experience",
  },
  {
    title: "FairShare",
    label: "Real-Time AI App",
    description:
      "An AI-powered expense manager with OCR receipt scanning, LSTM-based forecasting, and real-time group synchronization for collaborative expense tracking.",
    details: [
      "Supported 5,000+ concurrent users with stable real-time data sync.",
      "Reduced manual receipt entry by 70% using OCR extraction.",
      "Built WebSocket updates with sub-50ms synchronization latency.",
    ],
    metric: "5,000+ users supported",
    stack: ["Angular", "Node.js", "Express", "MongoDB", "Python", "WebSockets"],
    link: "https://github.com/Varun-here/FairShare",
  },
  {
    title: "WIN Bricks Enterprise Website",
    label: "Freelance Production Build",
    description:
      "A polished business website designed for speed, responsiveness, discoverability, and production reliability with reusable UI and SEO-focused implementation.",
    details: [
      "Reduced page load time by 40% with optimized assets and front-end structure.",
      "Achieved 95+ Lighthouse performance and accessibility scores.",
      "Managed Vercel deployment and GoDaddy DNS configuration.",
    ],
    metric: "95+ Lighthouse score",
    stack: ["React", "Tailwind", "Vercel", "SEO", "GoDaddy"],
    link: "https://www.winbricks.shop/",
  },
];

const skillGroups = [
  { title: "Interface", items: ["React", "Angular", "Next.js", "Tailwind CSS", "Responsive UI"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Microservices", "Background Jobs"] },
  { title: "AI Systems", items: ["OpenAI", "LLM APIs", "OCR", "NLP", "Entity Extraction", "Predictive Models"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Indexing", "Caching"] },
  { title: "Cloud", items: ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions", "Jenkins"] },
  { title: "Quality", items: ["JWT", "RBAC", "Testing", "Code Reviews", "Monitoring", "Debugging"] },
];

const experience = [
  {
    role: "Software Engineer, AI & Full Stack",
    company: "IHS Markit",
    period: "Nov 2023 - Jul 2024",
    summary:
      "Built an AI-powered document automation platform for SMB operations teams, combining React interfaces, Node.js APIs, Python OCR, LLM workflows, PostgreSQL, Docker, and CI/CD automation.",
    wins: ["65% reduction in manual data entry", "40% faster document processing", "50% faster release cycle"],
  },
  {
    role: "Full Stack Engineer",
    company: "Holistic MD LLP",
    period: "Aug 2022 - Aug 2023",
    summary:
      "Developed marketplace, practitioner, and member dashboard modules with Angular, React, Node.js, Express, secure APIs, optimized queries, and production release workflows.",
    wins: ["30% higher API throughput", "40% lower API latency", "25% fewer production defects"],
  },
  {
    role: "Student Developer",
    company: "SKCET Student Association",
    period: "Jul 2021 - Aug 2022",
    summary:
      "Created secure voting and event-management systems with React, Node.js, Express, PostgreSQL, transactional queries, JWT authentication, and role-based access control.",
    wins: ["200+ concurrent users", "Secure voting flow", "Reliable event workflows"],
  },
];

function SectionHeader({ tag, title, text }) {
  return (
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-cyan-300/80">{tag}</p>
      <h2 className="text-4xl font-black tracking-[-0.07em] text-white md:text-6xl">{title}</h2>
      {text && <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">{text}</p>}
    </div>
  );
}

function GlowCard({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-2xl ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
      {children}
    </div>
  );
}

function TinyPill({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-slate-300">{children}</span>;
}

function ApexCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
      setIsVisible(true);

      const target = event.target;
      const interactive = target.closest("a, button, .apex-hover");
      setIsActive(Boolean(interactive));
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-screen md:block"
        animate={{
          x: cursor.x,
          y: cursor.y,
          scale: isPressed ? 0.88 : 1,
        }}
        transition={{ type: "spring", stiffness: 520, damping: 34, mass: 0.35 }}
      >
        <motion.div
          className="relative flex items-center justify-center rounded-full"
          animate={{
            width: isActive ? 86 : 42,
            height: isActive ? 86 : 42,
            x: isActive ? -43 : -21,
            y: isActive ? -43 : -21,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-300/10 blur-xl" />
          <div className="absolute inset-0 rounded-full border border-cyan-300/80 bg-cyan-300/[0.035] shadow-[0_0_40px_rgba(34,211,238,0.35)] backdrop-blur-sm" />
          <motion.div
            className="absolute h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,0.95)]"
            animate={{ scale: isActive ? 0.45 : 1 }}
            transition={{ duration: 0.2 }}
          />
          
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        animate={{ x: cursor.x - 3, y: cursor.y - 3 }}
        transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
      </motion.div>
    </>
  );
}

export default function PortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const navItems = useMemo(() => ["Apex", "Work", "Stack", "Experience", "Contact"], []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("varunsambath02@outlook.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    }
  };

  const openGmailCompose = () => {
    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent("Hi Varun,\n\nI visited your portfolio and would like to connect.\n\nBest,");
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=varunsambath02@outlook.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen cursor-none overflow-hidden bg-[#03040a] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <ApexCursor />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_32%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#03040a]/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#apex" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-xs font-black tracking-widest text-cyan-100 shadow-2xl shadow-cyan-500/20">
              <span>VS</span>
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Varun Sambath Kumar</p>
              <p className="text-xs text-slate-500">Full-Stack AI Engineer</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-cyan-200">
                {item}
              </a>
            ))}
          </div>

          <a href="mailto:varunsambath02@outlook.com" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:inline-flex">
            Start a Conversation
          </a>

          <button className="md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            <span className="text-2xl text-white">{menuOpen ? "×" : "☰"}</span>
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/[0.08] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm text-slate-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="apex" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-950/20">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60" />
              Open to Software Engineering, Full-Stack, and AI roles
            </div>

            <h1 className="max-w-6xl text-6xl font-black leading-[0.88] tracking-[-0.085em] text-white md:text-8xl lg:text-[7.8rem]">
              Engineering at the edge of software and intelligence.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
              I build scalable, cloud-ready products with polished interfaces, secure backend systems, optimized databases, and practical AI workflows that turn raw data into useful automation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#work" className="apex-hover group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:bg-white">
                View Apex Work <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="https://github.com/Varun-here" className="apex-hover inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]">
                GitHub Profile
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>Dallas, Texas</span>
              <a href="https://www.linkedin.com/in/varun-s2002" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="https://my-portfolio-bjqm.vercel.app" className="hover:text-white">Portfolio</a>
              <a href="mailto:varunsambath02@outlook.com" className="hover:text-white">varunsambath02@outlook.com</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, rotate: -1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.12 }} className="relative">
            <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-fuchsia-500/20 blur-3xl" />
            <GlowCard className="p-6">
              <div className="rounded-[1.8rem] border border-white/10 bg-[#060816]/80 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.38em] text-cyan-300/80">Apex Profile</p>
                    <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white">Systems. AI. Product polish.</h2>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-black text-cyan-100">01</div>
                </div>
                <p className="mt-6 leading-8 text-slate-400">
                  My work sits at the intersection of full-stack development, AI automation, database performance, and user-centered product engineering.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                      <p className="text-3xl font-black text-white">{item.value}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {["Portable", "Reusable", "Adaptable", "Scalable"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Principle</p>
              <p className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="relative z-10 px-6 py-28 lg:px-8">
        <SectionHeader
          tag="Selected Work"
          title="Projects with architecture, intelligence, and measurable outcomes."
          text="More than portfolio cards, these are product systems shaped around performance, automation, usability, and engineering quality."
        />

        <div className="mx-auto max-w-7xl space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <a href={project.link} className="block text-inherit no-underline">
                <GlowCard className="apex-hover p-6 transition hover:-translate-y-1 hover:border-cyan-300/25">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="rounded-[1.8rem] border border-white/10 bg-[#070a16]/80 p-7">
                    <div className="flex items-center justify-between gap-4">
                      <p className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-1.5 text-xs font-bold text-cyan-200">{project.label}</p>
                      <span className="text-2xl text-slate-500 transition group-hover:text-cyan-300">↗</span>
                    </div>
                    <h3 className="mt-8 text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">{project.title}</h3>
                    <p className="mt-5 text-lg leading-8 text-slate-400">{project.description}</p>
                    <p className="mt-7 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">{project.metric}</p>
                  </div>

                  <div className="p-2 lg:p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-500">Build Notes</p>
                    <div className="mt-5 space-y-3">
                      {project.details.map((detail) => (
                        <div key={detail} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                          <p className="leading-7 text-slate-300">{detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => <TinyPill key={tech}>{tech}</TinyPill>)}
                    </div>
                  </div>
                </div>
              </GlowCard>
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="stack" className="relative z-10 px-6 py-28 lg:px-8">
        <SectionHeader
          tag="Technical Stack"
          title="A full-stack toolkit for shipping production-grade AI products."
          text="Organized by how I build: interface, backend, AI systems, data, cloud, and engineering quality."
        />

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <GlowCard className="h-full p-7">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300/70">{group.title}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => <TinyPill key={item}>{item}</TinyPill>)}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 px-6 py-28 lg:px-8">
        <SectionHeader
          tag="Experience"
          title="Real engineering work, compressed into proof of impact."
          text="Each role reflects a different layer of my growth: AI automation, production full-stack development, and secure web systems."
        />

        <div className="mx-auto max-w-6xl">
          <div className="relative space-y-6 before:absolute before:left-6 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300 before:via-white/15 before:to-transparent md:before:left-1/2">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>div]:col-start-2" : ""}`}
              >
                <span className="absolute left-4 top-8 z-10 h-4 w-4 rounded-full border-4 border-[#03040a] bg-cyan-300 shadow-lg shadow-cyan-300/30 md:left-1/2 md:-translate-x-1/2" />
                <GlowCard className="ml-12 p-7 md:ml-0">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-white">{item.role}</h3>
                      <p className="mt-1 text-cyan-300">{item.company}</p>
                    </div>
                    <p className="text-sm text-slate-500">{item.period}</p>
                  </div>
                  <p className="mt-5 leading-8 text-slate-400">{item.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.wins.map((win) => <TinyPill key={win}>{win}</TinyPill>)}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-white/[0.045] to-violet-500/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-cyan-300/80">Engineering Signature</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.07em] text-white md:text-6xl">I build for clarity, speed, and scale.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Modular", "Components and APIs designed to evolve without breaking the whole system."],
                ["Secure", "Authentication, authorization, validation, and careful data handling built in."],
                ["Measurable", "Performance, reliability, and usability tracked through real outcomes."],
                ["AI-ready", "LLM and OCR workflows designed around structure, validation, and practical use."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.75rem] border border-white/10 bg-[#050711]/50 p-5">
                  <p className="font-black text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-cyan-300/80">Contact</p>
          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.08em] text-white md:text-7xl">Let’s create the next standout product.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I’m open to software engineering, full-stack, AI engineering, and product-focused roles where speed, quality, and intelligence matter.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={openGmailCompose}
              className="apex-hover inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 font-black text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:bg-white"
            >
              Email Me
            </button>
            <button
              type="button"
              onClick={copyEmail}
              className="apex-hover inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-bold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
            >
              {emailCopied ? "Copied" : "Copy Email"}
            </button>
            <a href="https://www.linkedin.com/in/varun-s2002" target="_blank" rel="noopener noreferrer" className="apex-hover inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-bold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.08] px-6 py-8 text-center text-sm text-slate-600">
        © 2026 Varun Sambath Kumar · Designed as an APEX portfolio experience
      </footer>
    </main>
  );
}
