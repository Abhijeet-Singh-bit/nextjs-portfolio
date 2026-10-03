import { auth } from "@/auth";
import { redirect } from "next/navigation";

import ProjectForm from "@/app/components/ProjectForm";
import ProjectCard from "@/app/components/ProjectCard";

async function getProjects() {
  const response = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch projects");
  }

  return data;
}

export default async function AdminProjects() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const data = await getProjects();

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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.projects.map(
              (project: {
                _id: string;
                title: string;
                description: string;
                category: string;
              }) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              )
            )}
          </div>
        </section>

      </div>
    </main>
  );
}