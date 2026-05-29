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
      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {filters.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === key
                ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.35)]"
                : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <Icon size={15} />
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
            className="p-20 border border-dashed border-zinc-800 rounded-3xl text-center bg-zinc-900/20"
          >
            <Terminal className="mx-auto mb-4 text-zinc-700" size={48} />
            <p className="text-zinc-500">No projects in this category yet.</p>
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