"use client";

import { motion } from "framer-motion";
import { Briefcase, Terminal, Server, MapPin, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Flutter", "TypeScript"] },
    { name: "Backend", items: ["Laravel", "Node.js", "PostgreSQL", "Firebase", "Supabase"] },
    { name: "Tools", items: ["Git", "Docker", "Postman", "Figma", "Cloudinary"] },
  ];

  const timeline = [
    {
      year: "2025 — Present",
      title: "Lead Full-Stack Developer",
      company: "Frontier Dynamics Limited · Lagos",
      desc: "Leading the engineering team to build the technical foundation for FDL's emerging digital products. Because I operate with high autonomy and an agile, milestone-driven workflow, I am able to scale their architecture rapidly while maintaining the flexibility to take on select freelance engineering contracts.",
      highlights: [
        {
          label: "Rapid Deployment",
          text: "Architected, developed, and successfully deployed the official corporate web platform from scratch in exactly 1 month.",
        },
        {
          label: "Complex System Architecture",
          text: "Currently engineering Hostel Connect, a scalable marketplace featuring a strict 4-tier Role-Based Access Control (RBAC) architecture and a secure escrow payment pipeline.",
        },
        {
          label: "Engineering Leadership",
          text: "Directing and mentoring a team of 5 development interns. I manage code reviews, assign technical deliverables, and enforce production-grade architecture standards.",
        },
      ],
    },
    {
      year: "2024 — Present",
      title: "Full-Stack Developer",
      company: "Freelance",
      desc: "Designing and building web and mobile solutions for clients, focusing on performance, maintainability, and clean user experience.",
    },
    {
      year: "2023 — 2025",
      title: "Senior Computer Operator",
      company: "Flora Schools · Ilorin",
      desc: "Supported academic and administrative systems, strengthening my understanding of how real users interact with technology in non-ideal conditions.",
    },
    {
      year: "2021 — 2025",
      title: "B.Sc. Ed in Educational Technology",
      company: "University of Ilorin",
      desc: "Graduated with a focus on integrating technology into learning systems. This academic background drives my passion for building EdTech solutions.",
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
            I'm <strong className="text-white">Abolaji Akorede</strong>, a software developer based in Lagos, Nigeria.
            I build scalable digital products across web and mobile, with a strong focus on performance, clean
            architecture, and real-world usability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Narrative & Timeline */}
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
                  My work spans web applications using modern React frameworks, mobile applications
                  with <strong className="text-white">Flutter</strong>, and backend systems & APIs that support
                  real production traffic.
                </p>
                <p>
                  While I'm particularly strong with <strong className="text-white">Next.js</strong>, I'm
                  comfortable working across the stack and choosing tools based on the problem—not trends.
                </p>
                <p>
                  Graduating from the <strong className="text-white">University of Ilorin</strong> with a degree
                  in Educational Technology gave me a unique perspective: technology is only as good as its
                  usability. That conviction shapes every system I build.
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

                    {/* Role Highlights (Conditional Render) */}
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

          {/* Right Column: Skills & Info */}
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
