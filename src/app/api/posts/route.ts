import { NextResponse } from "next/server"
import { posts } from "@/lib/test-data" // Adjust the import path to match your file structure

export async function GET() {
  return NextResponse.json(posts)
}
