export default function Loading() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <div className="mx-auto h-5 w-24 animate-pulse rounded bg-slate-200" />

          <div className="mx-auto mt-4 h-10 w-64 animate-pulse rounded bg-slate-200" />

          <div className="mx-auto mt-4 h-5 max-w-2xl animate-pulse rounded bg-slate-200" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-52 animate-pulse bg-slate-200" />

              <div className="space-y-4 p-6">
                <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />

                <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />

                <div className="h-16 animate-pulse rounded bg-slate-200" />

                <div className="h-10 w-32 animate-pulse rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}