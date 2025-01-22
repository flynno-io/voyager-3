import PostCard from "@/ui/transmissions/post-card"
import { fetchPosts } from "@/lib/data"

export default async function Posts() {
  const posts = await fetchPosts()

  function renderPosts() {
    return posts.map((post) => {
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
