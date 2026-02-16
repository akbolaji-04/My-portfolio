import { apiFetch } from "@/lib/api";
import { Project } from "@/lib/types";
import ProjectCard from "@/components/ProjectCard";
import { Layers, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  // 🔥 Server-side fetching with 1-minute revalidation
  const projects = await apiFetch<Project[]>("/projects", {
    next: { revalidate: 60 } 
  });

  

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-rose-500 selection:text-white overflow-x-hidden">
      {/* 🌌 Background Decoration (Subtle & Performance Friendly) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* ⚡ HERO SECTION (Identity First) */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-10">
          
          {/* 📸 Profile Picture (The "Abolaji" Factor) */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl">
              {/* Ensure "Abolaji.jpeg" is inside your "public" folder! */}
              <Image 
                src="/Abolaji.jpg" 
                alt="Abolaji Akorede"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 📛 Name & Title */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-rose-500 mb-2">
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Full-Stack Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Abolaji <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">Akorede.</span>
            </h1>
          </div>
        </div>

        {/* 📝 Bio / Introduction */}
        <div className="max-w-2xl">
          <p className="text-xl text-zinc-400 leading-relaxed mb-6">
            Building scalable, high-performance systems with <span className="text-zinc-200 font-semibold">Next.js, Flutter, Firebase, and PostgressQL</span>. 
            I'm passionate about crafting software that’s not just functional, but also thoughtful and maintainable.
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm">
            <MapPin size={16} className="text-rose-500" />
            Based in Lagos, Nigeria
          </div>
        </div>
      </section>

      {/* 📂 Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Featured Work</h2>
          <span className="text-zinc-500 font-mono text-sm">{projects.length} Projects</span>
        </div>

        {projects.length === 0 ? (
          <div className="p-20 border border-dashed border-zinc-800 rounded-3xl text-center bg-zinc-900/20">
            <Layers className="mx-auto mb-4 text-zinc-700" size={48} />
            <p className="text-zinc-500">Connecting to CMS...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* 📧 Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-20 text-center text-zinc-600 text-sm border-t border-zinc-900 mt-20">
        <p>© 2026 Abolaji Akorede. Built with Next.js & Laravel.</p>
      </footer>
    </main>
  );
}