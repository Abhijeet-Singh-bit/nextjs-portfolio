"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Project = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [category, setCategory] = useState(project.category);
  const [image, setImage] = useState(project.image || "");

  const [message, setMessage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsUpdating(true);
    setMessage("Updating...");

    try {
      const response = await fetch(`/api/projects/${project._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          category,
          image,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Project updated successfully!");
        setIsEditing(false);
        setIsUpdating(false);
        router.refresh();
      } else {
        setMessage("Failed to update project.");
        setIsUpdating(false);
      }
    } catch (error) {
      console.error("Update error:", error);
      setMessage("Something went wrong.");
      setIsUpdating(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);
    setMessage("Deleting...");

    try {
      const response = await fetch(`/api/projects/${project._id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        router.refresh();
      } else {
        setIsDeleting(false);
        setMessage("Failed to delete project.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      setIsDeleting(false);
      setMessage("Something went wrong.");
    }
  }

  // =========================
  // EDIT MODE
  // =========================

  if (isEditing) {
    return (
      <article className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
        {/* Image Preview */}
        {image && (
          <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Edit Project
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            Update your project
          </h2>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor={`title-${project._id}`}
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Project Title
            </label>

            <input
              id={`title-${project._id}`}
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor={`description-${project._id}`}
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Description
            </label>

            <textarea
              id={`description-${project._id}`}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor={`category-${project._id}`}
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Category
            </label>

            <input
              id={`category-${project._id}`}
              type="text"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor={`image-${project._id}`}
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Project Image URL
            </label>

            <input
              id={`image-${project._id}`}
              type="url"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isUpdating}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUpdating ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setMessage("");
              }}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>

          {message && (
            <p className="text-sm font-medium text-slate-600">
              {message}
            </p>
          )}
        </form>
      </article>
    );
  }

  // =========================
  // NORMAL PROJECT CARD
  // =========================

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

      {/* PROJECT IMAGE */}
      {project.image && (
        <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* CATEGORY + ICON */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {project.category}
        </span>

        <span className="text-2xl text-slate-200 transition group-hover:text-blue-500">
          ↗
        </span>
      </div>

      {/* TITLE */}
      <h2 className="mt-7 text-xl font-bold text-slate-900">
        {project.title}
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-3 flex-1 leading-7 text-slate-600">
        {project.description}
      </p>

      {/* BUTTONS */}
      <div className="mt-7 flex gap-3 border-t border-slate-100 pt-5">
        <Link
          href={`/projects/${project._id}`}
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          View
        </Link>

        <button
          type="button"
          onClick={() => {
            setIsEditing(true);
            setMessage("");
          }}
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Edit
        </button>

        <button
          type="button"
          disabled={isDeleting}
          onClick={handleDelete}
          className="rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>

      {message && (
        <p className="mt-4 text-sm font-medium text-slate-600">
          {message}
        </p>
      )}
    </article>
  );
}