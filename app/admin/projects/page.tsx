import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { connectDB } from "@/lib/mongodb";
import Project from "@/app/models/Project";

import ProjectForm from "@/app/components/ProjectForm";
import ProjectCard from "@/app/components/ProjectCard";

async function getProjects() {
  await connectDB();

  const projects = await Project.find()
    .sort({ createdAt: -1 })
    .lean();

  return projects.map((project) => ({
    _id: project._id.toString(),
    title: project.title,
    description: project.description,
    category: project.category,
    image: project.image || "",
  }));
}

export default async function AdminProjects() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const projects = await getProjects();

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Admin
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Manage Projects
          </h1>

          <p className="mt-4 text-slate-600">
            Add, edit and delete projects from your portfolio.
          </p>
        </div>

        {/* Add Project */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Add New Project
            </h2>

            <p className="mt-2 text-slate-600">
              Create a new project for your portfolio.
            </p>
          </div>

          <ProjectForm />
        </section>

        {/* Existing Projects */}
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Your Work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Existing Projects
            </h2>
          </div>

          {projects.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-slate-500">
                No projects available yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
}