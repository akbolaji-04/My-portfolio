"use client";

import { motion } from "framer-motion";
import { Briefcase, Terminal, Server, MapPin, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Flutter", "TypeScript"] },
    { name: "Backend", items: ["Laravel", "Node.js", "PostgreSQL", "MySQL", "Supabase"] },
    { name: "Tools", items: ["Git", "Docker", "Postman", "Figma", "Cloudinary"] },
  ];

  const timeline = [
    {
      year: "2025 - Present",
      title: "Full-Stack Developer",
      company: "Freelance / Lagos",
      desc: "Building scalable applications like EduCore and Loomi. Specialized in bridging the gap between complex backends and buttery-smooth frontends.",
    },
    {
      year: "Mar 2025 - Oct 2025",
      title: "Senior Computer Operator",
      company: "Flora Schools, Ilorin",
      desc: "Managed portal systems and digital operations. This role sharpened my ability to build user-friendly systems for real-world educational institutions.",
    },
    {
      year: "2021 - 2025",
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
            I’m <strong className="text-white">Abolaji Akorede</strong>, a software engineer based in Lagos. 
            My core strength is building fast, scalable web and mobile applications focusing on clean architecture, performance, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: The Narrative & Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* The Story */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Terminal className="text-rose-500" /> The Journey
              </h2>
              <div className="prose prose-invert prose-zinc text-lg leading-relaxed">
                <p>
                  My journey didn't start in a fancy bootcamp; it started with curiosity. 
                  Graduating from the <strong className="text-white">University of Ilorin</strong> with a degree in 
                  Educational Technology gave me a unique perspective: technology is useless if it's not intuitive.
                </p>
                <p>
                  I cut my teeth working as a Senior Operator at <strong className="text-white">Flora Schools</strong>, 
                  where I learned exactly how organizations struggle with data. Seeing how poorly designed software slows 
                  down real organizations had a lasting impact on how I build today.
                </p>
                <p>
                  Those experiences pushed me toward <strong className="text-white">engineering products</strong>, that are not only functional, 
                  but thoughtful—systems that respect users, data, and long-term maintenance.
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
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-[#050505] border-2 border-rose-500 rounded-full" />
                    
                    <span className="text-xs font-mono text-rose-500 mb-1 block uppercase tracking-wider">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-zinc-400 mb-3">{item.company}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Right Column: Skills & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Tech Stack Card */}
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
                        <span key={item} className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-300 font-medium hover:bg-zinc-800 transition-colors cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Card */}
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
            
            {/* Education Card */}
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
              <p className="text-xs text-zinc-500">
                University of Ilorin (2021 - 2025)
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}