import { NextResponse } from "next/server";
import { posts } from "@/lib/posts"; // Adjust the import path to match your file structure

export async function GET() {
  return NextResponse.json(posts);
}
