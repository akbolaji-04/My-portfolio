"use client";

import { motion } from "framer-motion";
import { Briefcase, Terminal, Server, MapPin, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Core Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"] },
    { name: "Frameworks & Libraries", items: ["React", "Next.js", "Tailwind CSS", "Vite", "Figma", "Laravel"] },
    { name: "Backend & Database", items: ["Node.js", "PostgreSQL", "Supabase", "Firebase", "REST APIs"] },
  ];

  const timeline = [
    {
      year: "Feb 2026 — Present",
      title: "Lead Developer",
      company: "Frontier Dynamics Limited (Remote)",
      desc: "Engineered the frontend architecture using Next.js, guaranteeing a 100% responsive, high-performance user interface across all desktop and mobile devices.",
      highlights: [
        {
          label: "Team Leadership",
          text: "Delegated feature development across the FDL platform, HIS Influence Church, and Hostel Connect projects to a team of intern developers to foster their practical skills.",
        },
        {
          label: "Quality Assurance",
          text: "Supervised the intern team by conducting rigorous code reviews, mentoring, and refining their output to ensure all deliverables met production-ready standards.",
        },
        {
          label: "Optimization & Backend",
          text: "Implemented advanced SEO architecture and core web vital optimizations, while integrating backend services to support growing client traffic.",
        },
      ],
    },
    {
      year: "Jan 2022 — Present",
      title: "Front-End Software Engineer",
      company: "Independent Developer (Remote)",
      desc: "Designed, developed, and deployed multiple web applications using Next.js, React, and TypeScript.",
      highlights: [
        {
          label: "UI/UX Execution",
          text: "Converted high-fidelity Figma designs into fully responsive, production-ready user interfaces.",
        },
        {
          label: "Full-Stack Integrations",
          text: "Built scalable backend services using PostgreSQL, Firebase, Supabase, and REST APIs to support frontend client architectures.",
        },
        {
          label: "Performance",
          text: "Optimized assets and workflows to achieve Lighthouse performance scores of 90+ across platforms.",
        },
      ]
    },
    {
      year: "Mar 2025 — Oct 2025",
      title: "Computer Instructor & IT Support",
      company: "Flora College",
      desc: "Managed a centralized student and staff database portal supporting over 500 users.",
      highlights: [
        {
          label: "Training",
          text: "Trained administrative and teaching staff on school management software, improving data accuracy and efficiency.",
        }
      ]
    },
    {
      year: "Jan 2021 — Oct 2025",
      title: "B.Sc. in Educational Technology",
      company: "University of Ilorin, Nigeria",
      desc: "Graduated with a focus on integrating technology into learning systems.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-rose-500 selection:text-white pt-32 pb-20">
      
      {/* Background Glow */}
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-rose-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-rose-500 mb-4">
            <Code2 size={20} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">The Developer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            More Than Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">
              Lines of Code.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            I'm <strong className="text-white">Abolaji Akorede</strong>, a Front-End Software Engineer based in Lagos, Nigeria.
            I build scalable digital products across web and mobile, with a strong focus on performance, clean
            architecture, and real-world usability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Narrative & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* What I Do */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Terminal className="text-rose-500" /> What I Do
              </h2>
              <div className="prose prose-invert prose-zinc text-lg leading-relaxed">
                <p>
                  I specialize in building highly responsive, performant, and visually engaging web applications using <strong className="text-white">React, Next.js, and TypeScript</strong>.
                </p>
                <p>
                  While my primary expertise lies in translating high-fidelity designs into pixel-perfect, scalable user interfaces and optimizing core web vitals, I also bring practical full-stack experience. I am fully capable of engineering robust backend services and databases (<strong className="text-white">Node.js, PostgreSQL, Firebase</strong>) to support end-to-end product development.
                </p>
                <p>
                  This allows me to bridge the gap between design and robust system architecture, ensuring the platforms I build can effortlessly scale with business growth.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-8">
                <Briefcase className="text-rose-500" /> Experience
              </h2>
              <div className="border-l-2 border-zinc-800 ml-3 space-y-10 pl-8 relative">
                {timeline.map((item, i) => (
                  <div key={i} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-[#050505] border-2 border-rose-500 rounded-full" />
                    
                    {/* Role Header */}
                    <span className="text-xs font-mono text-rose-500 mb-1 block uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-zinc-400 mb-3">{item.company}</p>
                    
                    {/* Role Description */}
                    <p className={`text-zinc-500 text-sm leading-relaxed max-w-lg ${item.highlights ? 'mb-4' : ''}`}>
                      {item.desc}
                    </p>

                    {/* Role Highlights */}
                    {item.highlights && (
                      <ul className="list-disc pl-5 space-y-3 text-zinc-400 text-sm max-w-lg marker:text-rose-500">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx}>
                            <strong className="text-zinc-200">{highlight.label}: </strong>
                            {highlight.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Skills & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <Server size={16} className="text-rose-500" /> Tech Stack
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <h4 className="text-xs text-zinc-500 mb-3 uppercase font-bold tracking-wider">{skill.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-300 font-medium hover:bg-zinc-800 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-900/20 to-zinc-900/50 border border-rose-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-rose-500/20 rounded-full text-rose-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-rose-400 uppercase font-bold">Location</p>
                  <span className="text-white font-bold text-lg">Lagos, NG</span>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Open to remote roles and high-impact freelance projects.
              </p>
            </div>

            {/* Education */}
            <div className="p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-500">
                  <GraduationCap size={20} />
                </div>
                <span className="text-white font-bold text-lg">Education</span>
              </div>
              <p className="text-sm text-zinc-300 font-medium mb-1">
                B.Sc. Ed, Educational Technology
              </p>
              <p className="text-xs text-zinc-500">University of Ilorin (2021 — 2025)</p>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}