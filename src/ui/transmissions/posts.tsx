"use client"

import { use } from "react"
import PostCard from "@/ui/transmissions/post-card"
import { IPostCard } from "@/lib/definitions"

export default function Posts({ posts }: { posts: Promise<IPostCard[]> }) {
  const allPosts = use(posts)

  function renderPosts() {
    return allPosts.map((post) => {
      return (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          number={post.number}
        />
      )
    })
  }

  return <div>{renderPosts()}</div>
}
