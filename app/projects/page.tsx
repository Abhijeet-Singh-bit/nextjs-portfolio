import { connectDB } from "@/lib/mongodb";
import Project from "@/app/models/Project";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getProjects() {
  try {
    await connectDB();

    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Projects page error:", error);
    throw new Error("Unable to load projects. Please try again.");
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            My work
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            My Projects
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore the projects I have built using modern technologies.
          </p>
        </div>

        {/* Projects */}
        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map(
              (project: {
                _id: string;
                title: string;
                description: string;
                category: string;
                image?: string;
              }) => (
                <article
                  key={project._id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  {/* Project Image */}
                  {project.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <p className="text-sm font-semibold text-blue-600">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-xl font-bold text-slate-900">
                      {project.title}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <Link
                      href={`/projects/${project._id}`}
                      className="mt-6 inline-block rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                    >
                      View Project →
                    </Link>
                  </div>
                </article>
              )
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-slate-500">
              No projects available yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}