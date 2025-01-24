import connectDB from "@/lib/connectDB"
import { Post } from "@/lib/models"
import type { IPostCard, IPost } from "@/lib/definitions"
import mongoose from "mongoose"

// Fetch all posts
export async function fetchPostCards(): Promise<IPostCard[]> {
  await connectDB()
  try {
    const posts = await Post.find().lean().select("-__v")
    const postCards = posts.map((post) => {
      return {
        id: post._id.toString(),
        title: post.title,
        description: post.description,
        number: post.number,
      } as IPostCard
    })
    return postCards
  } catch (error) {
    console.error(error)
  }
}

// Get a single post by ID
export async function fetchPostById(id: string): Promise<IPost | null> {
  await connectDB()
  try {
    // Validate the `id`
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(`Invalid _id format: ${id}`)
    }
    const post = await Post.findById(id).select("-__v")
    if (!post) {
      return null
    }
    return {
      id: post._id.toString(),
      title: post.title,
      description: post.description,
      number: post.number,
      author: post.author,
      sol: post.sol,
      content: post.content,
    } as IPost
  } catch (error) {
    console.error(error)
  }
}
