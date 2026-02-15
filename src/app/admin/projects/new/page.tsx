import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Add New <span className="text-rose-500">Project</span></h1>
        <ProjectForm />
      </div>
    </main>
  );
}