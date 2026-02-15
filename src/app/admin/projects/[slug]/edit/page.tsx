"use client";

import { useEffect, useState, use } from "react";
import { apiFetch } from "@/lib/api";
import { Project } from "@/lib/types";
import ProjectForm from "@/components/admin/ProjectForm";
import { Loader2 } from "lucide-react";

export default function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const [project, setProject] = useState<Project | null>(null);
  
  // Unwrap params (Next.js 15 requirement)
  const [unwrappedParams, setUnwrappedParams] = useState<{ slug: string } | null>(null);

  useEffect(() => {
    params.then(setUnwrappedParams);
  }, [params]);

  useEffect(() => {
    if (!unwrappedParams?.slug) return;

    // Fetch by Slug
    apiFetch<Project>(`/projects/${unwrappedParams.slug}`)
      .then(setProject)
      .catch((err) => alert("Failed to load project"));
  }, [unwrappedParams]);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white pt-32 flex justify-center">
        <Loader2 className="animate-spin text-rose-500" size={48} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-2 text-zinc-400">Editing</h1>
        <h2 className="text-5xl font-black mb-8 text-white tracking-tight">{project.title}</h2>
        <ProjectForm initialData={project} />
      </div>
    </main>
  );
}