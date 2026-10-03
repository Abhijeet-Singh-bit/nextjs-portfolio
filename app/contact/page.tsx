"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setStatus("Sending...");

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  const data = await response.json();

  if (data.success) {
    setStatus("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  } else {
    setStatus("Failed to send message.");
  }
}
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Get in touch
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let's work together.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Have a project, idea or opportunity? Send me a message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Message
              </label>

              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg"
            >
              Send Message →
            </button>

            {status && (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}