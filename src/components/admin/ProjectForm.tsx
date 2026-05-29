"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import { Project } from "@/lib/types";
import { Loader2, UploadCloud, X } from "lucide-react";

interface ProjectFormProps {
  initialData?: Project; 
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    short_description: initialData?.short_description || "",
    full_description: initialData?.full_description || "",
    live_url: initialData?.live_url || "",
    github_url: initialData?.github_url || "",
    status: initialData?.status || "published",
    role: initialData?.role || "",
    year: initialData?.year || "",
    project_type: initialData?.project_type || "Web Application",
    media: initialData?.media?.[0]?.id
      ? [initialData.media[0].id]
      : ([] as string[]),
    tech_tags: initialData?.tech_tags?.map((t) => t.name) || ([] as string[]),
  });

  //  Tech Tags Logic
  const [tagInput, setTagInput] = useState("");
  const handleAddTag = () => {
    if (tagInput && !formData.tech_tags.includes(tagInput)) {
      setFormData({
        ...formData,
        tech_tags: [...formData.tech_tags, tagInput],
      });
      setTagInput("");
    }
  };
  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tech_tags: formData.tech_tags.filter((t) => t !== tagToRemove),
    });
  };

  // Image Upload Logic
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setUploading(true);

    const fileBody = new FormData();
    fileBody.append("file", e.target.files[0]);

    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/media/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json", 
          },
          body: fileBody,
        },
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Upload failed");
      }
      
      setFormData({ ...formData, media: [data.id] }); 
    } catch (error) {
      alert("Upload failed. Check console.");
    } finally {
      setUploading(false);
    }
  };

  // 🚀 Submit Logic (Create or Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("admin_token");

    try {
      const url = initialData ? `/projects/${initialData.id}` : "/projects";

      const method = initialData ? "PUT" : "POST";

      await apiFetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData),
      });

      router.push("/admin/dashboard");
      router.refresh();
    } catch (error) {
      alert("Something went wrong. Check the console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
      {/* 1. Basic Info */}
      <div className="grid gap-4">
        <label className="text-xs font-bold text-zinc-500 uppercase">
          Project Title
        </label>
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-white focus:border-rose-500 outline-none"
          placeholder="e.g. EduCore System"
          required
        />

        <label className="text-xs font-bold text-zinc-500 uppercase">
          Slug (URL)
        </label>
        <input
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-white focus:border-rose-500 outline-none"
          placeholder="e.g. educore-system"
          required
        />
      </div>

      {/* 2. Media Upload (The Hero Image) */}
      <div>
        <label className="text-xs font-bold text-zinc-500 uppercase mb-2 block">
          Hero Image
        </label>
        <div className="border-2 border-dashed border-zinc-800 rounded-xl p-8 text-center hover:border-zinc-600 transition-colors relative">
          <input
            type="file"
            onChange={handleFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          {uploading ? (
            <Loader2 className="animate-spin mx-auto text-rose-500" />
          ) : formData.media.length > 0 ? (
            <div className="text-emerald-500 font-bold flex flex-col items-center">
              <CheckCircle size={32} className="mb-2" />
              Image Uploaded & Linked!
            </div>
          ) : (
            <div className="flex flex-col items-center text-zinc-500">
              <UploadCloud size={32} className="mb-2" />
              <p>Click or Drag to Upload Screenshot</p>
            </div>
          )}
        </div>
      </div>

      {/* 3. Tech Tags*/}
      <div>
        <label className="text-xs font-bold text-zinc-500 uppercase mb-2 block">
          Tech Stack
        </label>
        <div className="flex gap-2 mb-3">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-white outline-none"
            placeholder="Type tag (e.g. React) and press Add"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="bg-zinc-800 px-6 rounded-xl font-bold hover:bg-zinc-700"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.tech_tags.map((tag) => (
            <span
              key={tag}
              className="bg-rose-500/10 text-rose-500 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2"
            >
              {tag}
              <button type="button" onClick={() => removeTag(tag)}>
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* 4. Details */}
      <div className="grid gap-4">
        <label className="text-xs font-bold text-zinc-500 uppercase">
          Short Description
        </label>
        <textarea
          value={formData.short_description}
          onChange={(e) =>
            setFormData({ ...formData, short_description: e.target.value })
          }
          className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-white focus:border-rose-500 outline-none h-32"
          placeholder="What does this project do?"
        />
        {/* New Project Metadata Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-800/50">
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">
              Your Role
            </label>
            <input
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-rose-500"
              placeholder="e.g. Lead Developer"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">
              Project Year
            </label>
            <input
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-rose-500"
              placeholder="2026"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">
              Project Type
            </label>
            <select
              value={formData.project_type}
              onChange={(e) =>
                setFormData({ ...formData, project_type: e.target.value })
              }
              className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-white outline-none focus:border-rose-500 appearance-none"
            >
              <option value="Web Application">Web Application</option>
              <option value="Mobile Application">Mobile Application</option>
              <option value="Full-Stack System">Full-Stack System</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Backend Service">Backend Service</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-zinc-500 uppercase">
              Live URL
            </label>
            <input
              value={formData.live_url}
              onChange={(e) =>
                setFormData({ ...formData, live_url: e.target.value })
              }
              className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-white"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-zinc-500 uppercase">
              Github URL
            </label>
            <input
              value={formData.github_url}
              onChange={(e) =>
                setFormData({ ...formData, github_url: e.target.value })
              }
              className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-white"
            />
          </div>
        </div>
      </div>

      <button
        disabled={loading}
        className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-rose-500 hover:text-white transition-all"
      >
        {loading
          ? "Saving..."
          : initialData
            ? "Update Project"
            : "Create Project"}
      </button>
    </form>
  );
}

// Helper icon
function CheckCircle({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
