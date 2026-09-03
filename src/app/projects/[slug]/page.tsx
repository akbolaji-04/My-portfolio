import { apiFetch } from "@/lib/api";
import { Project } from "@/lib/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Layers } from "lucide-react";

export const revalidate = 60;
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  
  let project: Project;
  try {
    project = await apiFetch<Project>(`/projects/${resolvedParams.slug}`);
  } catch (error) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* Top Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Status: <span className="text-white">{project.status}</span>
            </span>

            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Tech: <span className="text-white">{project.tech_tags.map(tag => tag.name).join(", ")}</span>
            </span>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <div className="prose prose-invert prose-zinc max-w-none">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm text-rose-500">Overview</h3>
              <p className="leading-relaxed text-xl text-zinc-400 whitespace-pre-wrap">
                {project.full_description || project.short_description}
              </p>
            </div>

            {/* Media Gallery */}
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-6">Project Gallery</h3>
               {project.media && project.media.length > 0 ? (
                 <div className="grid gap-6">
                    {project.media.map(media => (
                      <div key={media.id} className="group aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
                        <img src={media.file_url} alt="Project screenshot" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                    ))}
                 </div>
               ) : (
                 <div className="p-12 border border-zinc-800 text-center bg-zinc-900">
                   <p className="text-zinc-600 font-bold uppercase text-xs tracking-widest">Visuals arriving soon.</p>
                 </div>
               )}
            </div>
          </div>

          {/* Sidebar - DYNAMIC DATA */}
          <div className="space-y-8">
            <div className="p-8 bg-zinc-900 border border-zinc-800 sticky top-10">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8">Specifications</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Role</p>
                  <p className="font-bold text-zinc-100">{project.role || "Lead Developer"}</p>
                </div>

                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Year</p>
                  <p className="font-bold text-zinc-100">{project.year || "2026"}</p>
                </div>

                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Type</p>
                  <p className="font-bold text-zinc-100">{project.project_type || "Web Application"}</p>
                </div>
              </div>

              <div className="h-px bg-zinc-800 my-8" />

              <div className="space-y-3">
                {project.live_url && (
                  <a 
                    href={project.live_url} 
                    target="_blank"
                    className="block text-center w-full py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all"
                  >
                    View Live App
                  </a>
                )}
                
                {project.github_url && (
                  <a 
                    href={project.github_url}
                    target="_blank"
                    className="block text-center w-full py-4 bg-transparent text-white font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-800 transition-all border border-zinc-800"
                  >
                    Get Repository
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
