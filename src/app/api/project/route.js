import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Buat instance PrismaClient
const prisma = new PrismaClient();

export async function GET() {
  try {
    // Ambil data project dari database
    const projects = await prisma.project.findMany();

    // Disconnect Prisma client after the query
    await prisma.$disconnect();

    // Kirim data sebagai JSON response
    return NextResponse.json(projects); // Returning just the array without the "projects" wrapper
  } catch (error) {
    console.error("Gagal Mengambil Project:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
