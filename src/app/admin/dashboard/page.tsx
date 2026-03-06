"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { Project } from "@/lib/types";
import Link from "next/link";
import { Plus, Trash2, Edit3, ExternalLink } from "lucide-react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const data = await apiFetch<Project[]>("/projects");
      setProjects(data);
    };
    fetchAll();
  }, []);

  const deleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    const token = localStorage.getItem("admin_token");
    await apiFetch(`/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight">Project <span className="text-rose-500">Manager</span></h1>
            <p className="text-zinc-500 mt-2">Managing content for Abolaji Akorede</p>
          </div>
          <Link href="/admin/projects/new" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-rose-500 hover:text-white transition-all">
            <Plus size={18} /> New Project
          </Link>
        </div>

        <div className="grid gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl flex items-center justify-between group hover:border-zinc-700 transition-all">
              <div className="flex items-center gap-6">
                <div className="h-16 w-24 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 relative">
                  {project.media?.[0] ? (
                    <img src={project.media[0].file_url} className="object-cover w-full h-full opacity-60" alt={project.title} />
                  ) : (
                    <div className="w-full h-full bg-zinc-900" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <p className="text-zinc-500 text-xs font-mono">{project.slug}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/projects/${project.slug}`} target="_blank" className="p-3 bg-zinc-800 rounded-full hover:text-rose-500 transition-colors">
                  <ExternalLink size={18} />
                </Link>
              
                <Link href={`/admin/projects/${project.slug}/edit`} className="p-3 bg-zinc-800 rounded-full hover:text-blue-500 transition-colors">
                  <Edit3 size={18} />
                </Link>

                <button onClick={() => deleteProject(project.id)} className="p-3 bg-zinc-800 rounded-full hover:text-rose-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
