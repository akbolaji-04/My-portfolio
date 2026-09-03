"use client";

import { motion } from "framer-motion";
import { Briefcase, Terminal, Server, MapPin, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"] },
    { name: "Backend", items: ["Node.js", "FastAPI (Python)", "PostgreSQL", "Supabase", "Firebase", "REST APIs"] },
    { name: "Tools & Mobile", items: ["Figma", "Laravel", "Git", "Flutter"] },
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
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20">

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Building Robust <br />
            Architectures.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            I'm <strong className="text-white">Abolaji Akorede</strong>, a Full-Stack Software Engineer based in Lagos, Nigeria.
            I specialize in developing scalable, high-performance web applications with a focus on strict architectural standards and clean code.
          </p>
        </div>

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
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">
                Overview
              </h2>
              <div className="prose prose-invert prose-zinc text-lg leading-relaxed">
                <p>
                  I am a Full-Stack Software Engineer specializing in <strong className="text-white">Next.js, React, and TypeScript</strong>, with end-to-end product experience spanning frontend architecture to backend systems like Node.js, PostgreSQL, Supabase, and FastAPI.
                </p>
                <p>
                  I lead development across multiple client and internal projects, ranging from pixel-perfect, high-performance UIs to the databases and APIs that power them. I also manage teams of intern developers, ensuring all deliverables meet strict production-ready standards.
                </p>
                <p>
                  Self-taught across the full stack since 2022, I bridge design fidelity with robust system architecture to consistently ship scalable and maintainable products.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">
                Experience
              </h2>
              <div className="border-l-2 border-zinc-800 ml-3 space-y-10 pl-8 relative">
                {timeline.map((item, i) => (
                  <div key={i} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-black border-2 border-white" />
                    
                    {/* Role Header */}
                    <span className="text-xs font-bold text-zinc-500 mb-1 block uppercase tracking-wider">
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
                      <ul className="list-disc pl-5 space-y-3 text-zinc-400 text-sm max-w-lg marker:text-white">
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
            <div className="p-8 bg-black border border-zinc-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Tech Stack
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
            <div className="p-8 bg-black border border-zinc-800">
              <div className="mb-4">
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Location</p>
                <span className="text-white font-bold text-lg">Lagos, NG</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Open to remote roles and freelance projects.
              </p>
            </div>

            {/* Education */}
            <div className="p-8 bg-black border border-zinc-800">
              <div className="mb-4">
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Education</p>
                <span className="text-white font-bold text-lg">University of Ilorin</span>
              </div>
              <p className="text-sm text-zinc-300 font-medium mb-1">
                B.Sc. Educational Technology
              </p>
              <p className="text-xs text-zinc-400 mb-2">Second Class Upper (4.0 CGPA)</p>
              <p className="text-xs text-zinc-500">(Jan 2021 — Oct 2025)</p>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}