import { apiFetch } from "@/lib/api";
import { Project } from "@/lib/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Layers } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  
  // 1. Fetch data safely
  let project: Project;
  try {
    project = await apiFetch<Project>(`/projects/${resolvedParams.slug}`);
  } catch (error) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-rose-500/30">
      
      {/* Top Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center">
            {/* Status Badge */}
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              project.status === 'published' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
            }`}>
              {project.status}
            </span>

            {/* Tech Stack Pills */}
            {project.tech_tags.map(tag => (
              <span 
                key={tag.id} 
                className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content (Description) */}
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-invert prose-zinc max-w-none">
              <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
              <p className="leading-relaxed text-lg text-zinc-400">
                {project.full_description || project.short_description}
              </p>
            </div>

            {/* Media Gallery Placeholder (We will hook this up to Real Media later) */}
            <div className="space-y-6">
               <h3 className="text-xl font-semibold text-white">Gallery</h3>
               {project.media && project.media.length > 0 ? (
                 <div className="grid gap-4">
                    {project.media.map(media => (
                      <div key={media.id} className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={media.file_url} alt="Project screenshot" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
               ) : (
                 <div className="p-12 border border-dashed border-zinc-800 rounded-xl text-center bg-zinc-900/30">
                   <p className="text-zinc-600">No images uploaded for this project yet.</p>
                 </div>
               )}
            </div>
          </div>

          {/* Sidebar (Metadata) */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm sticky top-10">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Project Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-rose-500" />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase">Role</p>
                    <p className="font-medium text-zinc-200">{project.role || "Lead Developer"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-rose-500" />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase">Year</p>
                    <p className="font-medium text-zinc-200">{project.year || "2026"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Layers size={18} className="text-rose-500" />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase">Type</p>
                    <p className="font-medium text-zinc-200">{project.project_type || "Web Application"}</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-zinc-800 my-6" />

              <div className="space-y-3">
                {project.live_url && (
                  <a 
                    href={project.live_url} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                
                {project.github_url && (
                  <a 
                    href={project.github_url}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700"
                  >
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}