import connectDB from "@/lib/connectDB"
import { Post, User } from "@/lib/models"
import mongoose from "mongoose"

// Fetch all posts
export async function fetchPosts() {
  await connectDB()
  try {
    const posts = await Post.find()
    return posts
  } catch (error) {
    console.error(error)
  }
}

// Get a single post by ID
export async function fetchPostById(id: string) {
  await connectDB()
  try {
    // Validate the `id`
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(`Invalid _id format: ${id}`)
    }
    const post = await Post.findById(id)
    return post
  } catch (error) {
    console.error(error)
  }
}
