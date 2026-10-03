export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Available for new projects
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Welcome to my website
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          Building modern
          <span className="block text-blue-600">
            digital experiences.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          I build fast, modern and scalable web applications using
          Next.js, React and MongoDB.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/projects"
            className="rounded-xl bg-slate-900 px-7 py-3.5 font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            View Projects →
          </a>

          <a
            href="/about"
            className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
          >
            About Me
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 border-y border-slate-200 py-8">
          <div>
            <p className="text-2xl font-bold text-slate-900">3+</p>
            <p className="mt-1 text-sm text-slate-500">Projects</p>
          </div>

          <div className="border-x border-slate-200">
            <p className="text-2xl font-bold text-slate-900">Next.js</p>
            <p className="mt-1 text-sm text-slate-500">Framework</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-slate-900">MongoDB</p>
            <p className="mt-1 text-sm text-slate-500">Database</p>
          </div>
        </div>
      </div>
    </section>
  );
}