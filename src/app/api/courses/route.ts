// Get data from "Real database"
import { NextResponse } from "next/server";
import { getPrisma } from "@lib/getPrisma";

export const GET = async () => {
  const prisma = getPrisma();

  try {
    const courses = await prisma.course.findMany();
    return NextResponse.json({ ok: true, courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({ ok: false, error: "Failed to fetch courses" }, { status: 500 });
  }
};
