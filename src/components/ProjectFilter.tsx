"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import { Layers, Terminal, Layout } from "lucide-react";

const BACKEND_TAGS = ["Python", "FastAPI", "Backend", "API", "Celery"];

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"All" | "Frontend" | "Backend">("All");

  const filteredProjects = projects.filter((project) => {
    const isBackend =
      project.project_type === "Backend Service" ||
      project.tech_tags?.some((t) => BACKEND_TAGS.includes(t.name));

    if (filter === "All") return true;
    if (filter === "Backend") return isBackend;
    if (filter === "Frontend") return !isBackend;
    return true;
  });

  const filters = [
    { key: "All" as const, label: "All Projects", Icon: Layers },
    { key: "Frontend" as const, label: "UI & Full-Stack", Icon: Layout },
    { key: "Backend" as const, label: "Backend & Architecture", Icon: Terminal },
  ];

  return (
    <div className="w-full">
      {/* Filter Links */}
      <div className="flex flex-wrap items-center justify-start gap-8 mb-12 border-b border-zinc-900 pb-4">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 pb-4 -mb-[17px] ${
              filter === key
                ? "text-white border-b-2 border-white"
                : "text-zinc-600 hover:text-zinc-300 border-b-2 border-transparent"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        {filteredProjects.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-20 border border-zinc-800 text-center bg-black"
          >
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">No projects in this category.</p>
          </motion.div>
        ) : (
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}