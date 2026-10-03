import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/app/models/Project";
import { auth } from "@/auth";

// CREATE PROJECT
export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    await connectDB();

    const body = await request.json();

    const project = await Project.create({
      title: body.title,
      description: body.description,
      category: body.category,
      image: body.image || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully!",
        project,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Project creation error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create project",
      },
      { status: 500 }
    );
  }
}

// GET PROJECTS
export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error("Project fetching error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch projects. Please try again later.",
      },
      { status: 500 }
    );
  }
}