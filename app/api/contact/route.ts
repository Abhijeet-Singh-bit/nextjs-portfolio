import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactMessage from "@/app/models/ContactMessage";
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const contactMessage = await ContactMessage.create({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact message saved successfully!",
        contactMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save contact message.",
      },
      { status: 500 }
    );
  }
}