import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/app/models/Project";
import { auth } from "@/auth";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;   // gets the ID from the URL.
    const body = await request.json();

    const project = await Project.findByIdAndUpdate(
      id,
      {
        title: body.title,
        description: body.description,
        category: body.category,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project updated successfully!",
      project,
    });
  } catch (error) {
    console.error("Project update error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update project",
      },
      { status: 500 }
    );
  }
}


//  ====================== Deletion =============================== //
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully!",
      project,
    });
  } catch (error) {
    console.error("Project deletion error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete project",
      },
      { status: 500 }
    );
  }
}