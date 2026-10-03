import type { Metadata } from "next";
import { notFound } from "next/navigation";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Project from "@/app/models/Project";

type ProjectDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

// SEO metadata for each project
export async function generateMetadata(
  { params }: ProjectDetailsProps
): Promise<Metadata> {
  const { id } = await params;

  // Check if the ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return {
      title: "Project Not Found | My Portfolio",
      description: "The requested project could not be found.",
    };
  }

  await connectDB();

  const project = await Project.findById(id).lean();

  if (!project) {
    return {
      title: "Project Not Found | My Portfolio",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
  };
}

// Project details page
export default async function ProjectDetails({
  params,
}: ProjectDetailsProps) {
  const { id } = await params;

  // Check if the ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    notFound();
  }

  await connectDB();

  const project = await Project.findById(id).lean();

  // Project doesn't exist
  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">

        {/* Category */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          {project.category}
        </p>

        {/* Title */}
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          {project.title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {project.description}
        </p>

      </div>
    </main>
  );
}