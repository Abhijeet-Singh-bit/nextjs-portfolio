"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Something went wrong
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Unable to load projects
        </h1>

        <p className="mt-4 text-slate-600">
          We couldn't load the projects right now. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          Try Again
        </button>

      </div>
    </main>
  );
}