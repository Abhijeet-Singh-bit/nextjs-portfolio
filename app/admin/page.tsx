import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import SignOutButton from "@/app/components/SignOutButton";

import { connectDB } from "@/lib/mongodb";
import Project from "@/app/models/Project";
import ContactMessage from "@/app/models/ContactMessage";

async function getProjectCount() {
  await connectDB();

  const count = await Project.countDocuments();

  return count;
}

async function getMessageCount() {
  await connectDB();

  const count = await ContactMessage.countDocuments();

  return count;
}

export default async function Admin() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const projectCount = await getProjectCount();
  const messageCount = await getMessageCount();

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Admin
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              Admin Dashboard
            </h1>

            <p className="mt-4 text-slate-600">
              Welcome back, {session.user?.name || "Admin"}.
            </p>
          </div>

          <SignOutButton />
        </div>

        {/* Admin Navigation */}
        <nav className="mt-10 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="flex flex-wrap gap-2">

            <Link
              href="/admin"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/projects"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Projects
            </Link>

            <Link
              href="/admin/messages"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Messages
            </Link>

            <Link
              href="/"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              View Website
            </Link>

          </div>
        </nav>

        {/* Dashboard Cards */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">

          {/* Projects */}
          <Link
            href="/admin/projects"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              Total Projects
            </p>

            <p className="mt-4 text-4xl font-bold text-slate-900">
              {projectCount}
            </p>

            <p className="mt-2 text-slate-600">
              Projects in your portfolio
            </p>

            <p className="mt-6 font-medium text-slate-900 transition group-hover:text-blue-600">
              Manage Projects →
            </p>
          </Link>

          {/* Messages */}
          <Link
            href="/messages"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              Total Messages
            </p>

            <p className="mt-4 text-4xl font-bold text-slate-900">
              {messageCount}
            </p>

            <p className="mt-2 text-slate-600">
              Messages from your contact form
            </p>

            <p className="mt-6 font-medium text-slate-900 transition group-hover:text-blue-600">
              View Messages →
            </p>
          </Link>

          {/* Website */}
          <Link
            href="/"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              Website
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              View Website
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Open the public website and see what visitors see.
            </p>

            <p className="mt-6 font-medium text-slate-900 transition group-hover:text-blue-600">
              Open Website →
            </p>
          </Link>

        </section>

      </div>
    </main>
  );
}