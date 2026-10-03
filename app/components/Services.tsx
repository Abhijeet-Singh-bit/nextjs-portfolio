const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern and responsive websites built with React and Next.js, focused on performance, usability and clean design.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Scalable APIs and server-side applications designed to handle real-world data and application requirements.",
  },
  {
    number: "03",
    title: "Database Solutions",
    description:
      "Reliable data storage and management using MongoDB Atlas and Mongoose.",
  },
];

export default function Services() {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            What I do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Building digital products
            <span className="block text-slate-400">
              from idea to reality.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">
                  {service.number}
                </span>

                <span className="text-2xl text-slate-300 transition group-hover:text-blue-600">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8 h-px w-12 bg-slate-300 transition-all duration-300 group-hover:w-full group-hover:bg-blue-600" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}