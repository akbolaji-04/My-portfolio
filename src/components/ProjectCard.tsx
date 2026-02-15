"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Layers } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/types";

// 👇 THIS LINE IS WHAT FIXES YOUR ERROR
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-[2.5rem] overflow-hidden hover:bg-zinc-900/60 hover:border-rose-500/40 transition-all duration-500"
    >
      {/* Visual Proof Section */}
      <div className="aspect-video w-full overflow-hidden relative bg-zinc-950">
        {project.media && project.media.length > 0 ? (
          <img
            src={project.media[0].file_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-800">
            <Layers size={60} strokeWidth={1} />
          </div>
        )}
        
        {/* Hover Overlay with Links */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
          {project.github_url && (
            <a href={project.github_url} target="_blank" className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all">
              <Github size={24} />
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all">
              <Globe size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-8 text-white">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_tags.map((tag) => (
            <span key={tag.id} className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/50">
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-3xl font-bold group-hover:text-rose-500 transition-colors">{project.title}</h3>
          <ArrowUpRight size={24} className="text-zinc-600 group-hover:text-rose-500 transition-all" />
        </div>
        <p className="text-zinc-400 leading-relaxed mb-10 line-clamp-2">{project.short_description}</p>
        <Link href={`/projects/${project.slug}`} className="flex items-center justify-center w-full py-4 rounded-2xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl shadow-black/50">
          View Case Study
        </Link>
      </div>
    </motion.div>
  );
}