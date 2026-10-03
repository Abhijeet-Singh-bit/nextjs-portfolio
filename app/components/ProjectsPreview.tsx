const projects = [
  {
    number: "01",
    title: "AI Code Assistant",
    description:
      "An AI-powered application that helps developers understand and search their codebase.",
    category: "AI / Development",
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    description:
      "A modern online shopping platform with products, users and orders.",
    category: "Web Development",
  },
  {
    number: "03",
    title: "Business Website",
    description:
      "A responsive business website designed for performance and SEO.",
    category: "Web Design",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              My work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-xl text-slate-600">
              A selection of projects I have built using modern technologies
              and development practices.
            </p>
          </div>

          <a
            href="/projects"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            View all projects →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="relative flex h-52 items-center justify-center bg-slate-100">
                <span className="text-5xl font-bold text-slate-200">
                  {project.number}
                </span>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-slate-200 opacity-0 transition duration-300 group-hover:opacity-100" />

                <span className="absolute bottom-4 left-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {project.description}
                </p>

                <a
                  href="/projects"
                  className="mt-6 inline-flex font-medium text-slate-900 transition group-hover:text-blue-600"
                >
                  View project
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}