import { apiFetch } from "@/lib/api";
import { Project } from "@/lib/types";
import { MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import ProjectFilter from "@/components/ProjectFilter";

export const revalidate = 60;

export default async function Home() {
  const projects = await apiFetch<Project[]>("/projects", {
    next: { revalidate: 60 },
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-10">

          {/* Profile Picture */}
          <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden border border-zinc-800">
            <Image
              src="/Abolaji.jpg"
              alt="Abolaji Akorede"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Name & Title */}
          <div className="text-center md:text-left">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Full-Stack Software Engineer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Abolaji Akorede.
            </h1>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-2xl">
          <p className="text-xl text-zinc-400 leading-relaxed mb-6">
            Full-Stack Software Engineer specializing in Next.js, React, and TypeScript, with end-to-end product 
            experience spanning frontend architecture to backend systems. I bridge design fidelity with robust 
            system architecture to ship scalable, maintainable products.
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 text-zinc-500 text-sm font-mono uppercase tracking-widest">
            <MapPin size={14} />
            Lagos, NG
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Featured Work
          </h2>
          <span className="text-zinc-500 font-mono text-sm">
            {projects.length} Projects
          </span>
        </div>

        <ProjectFilter projects={projects} />
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-20 text-center text-zinc-600 text-sm border-t border-zinc-900 mt-20">
        <p>© 2026 Abolaji Akorede. Built with Next.js.</p>
      </footer>
    </main>
  );
}