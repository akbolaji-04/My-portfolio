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
  
  let project: Project;
  try {
    project = await apiFetch<Project>(`/projects/${resolvedParams.slug}`);
  } catch (error) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-rose-500/30">
      
      {/* Top Navigation - Fixed Back Button */}
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
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
              project.status === 'published' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
            }`}>
              {project.status}
            </span>

            {project.tech_tags.map(tag => (
              <span 
                key={tag.id} 
                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-500"
              >
                {tag.name}
              </span>
            ))}
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
               <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm text-rose-500">Project Gallery</h3>
               {project.media && project.media.length > 0 ? (
                 <div className="grid gap-6">
                    {project.media.map(media => (
                      <div key={media.id} className="group aspect-video bg-zinc-900 rounded-[2rem] border border-zinc-800 overflow-hidden transition-all hover:border-zinc-600">
                        <img src={media.file_url} alt="Project screenshot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    ))}
                 </div>
               ) : (
                 <div className="p-12 border border-dashed border-zinc-800 rounded-[2rem] text-center bg-zinc-900/30">
                   <p className="text-zinc-600 font-medium">Visuals arriving soon.</p>
                 </div>
               )}
            </div>
          </div>

          {/* Sidebar - DYNAMIC DATA */}
          <div className="space-y-8">
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md sticky top-10">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8 opacity-50">Specifications</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">My Role</p>
                    <p className="font-bold text-zinc-100">{project.role || "Lead Developer"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Year</p>
                    <p className="font-bold text-zinc-100">{project.year || "2026"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500">
                    <Layers size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Project Type</p>
                    <p className="font-bold text-zinc-100">{project.project_type || "Web Application"}</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-zinc-800/50 my-8" />

              <div className="space-y-3">
                {project.live_url && (
                  <a 
                    href={project.live_url} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-rose-500 hover:text-white transition-all shadow-xl shadow-black/20"
                  >
                    <ExternalLink size={14} /> View Live App
                  </a>
                )}
                
                {project.github_url && (
                  <a 
                    href={project.github_url}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-800 text-zinc-400 font-bold uppercase text-[10px] tracking-widest rounded-2xl hover:bg-zinc-700 hover:text-white transition-all border border-zinc-700/50"
                  >
                    <Github size={14} /> Get Repository
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