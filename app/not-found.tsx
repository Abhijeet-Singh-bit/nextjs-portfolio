import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-slate-950 px-6 py-20">

      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

        <div className="absolute -left-20 top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl animate-float" />

        <div className="absolute -right-20 bottom-20 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl animate-float-delayed" />
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-blue-400 animate-ping" />
        <div className="absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 animate-ping [animation-delay:700ms]" />
        <div className="absolute bottom-[25%] left-[25%] h-2 w-2 rounded-full bg-indigo-400 animate-ping [animation-delay:1200ms]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* 404 */}
        <div className="relative select-none">
          <h1 className="text-[clamp(8rem,25vw,18rem)] font-black leading-none tracking-tighter text-white/5">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl font-black tracking-tight text-white sm:text-9xl">
              404
            </span>
          </div>
        </div>

        {/* Small label */}
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          Page not found
        </div>

        {/* Heading */}
        <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Oops! You took a wrong turn.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry — let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30"
          >
            <span>←</span>
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800"
          >
            Explore Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

        {/* Bottom message */}
        <p className="mt-12 text-sm text-slate-600">
          Error code: <span className="font-mono text-slate-500">404</span>
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/20 to-transparent" />
    </main>
  );
}