import { fetchPostById } from "@/lib/data"
import type { Metadata } from "next"
import ReactMarkdown from "react-markdown"

// TODO: dynamically import the blog post meta data
export const meta: Metadata = {
  title: "Blog Slug",
  description: "Description of the blog slug page",
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const id = params.id
  const post = await fetchPostById(id)

  // TODO: Add breadcrumb to top of page
  // TODO: Add fetch to get blog post data
  // TODO: Add error handling for fetch
  return (
    <section className="items-left flex h-screen flex-col justify-start space-x-4 space-y-3 overflow-hidden overflow-y-scroll">
      <div className={`items-left ms-4 flex items-baseline gap-5 space-y-2`}>
        <h1 className={`text-4xl font-bold`}>{post.title}</h1>
        <div className={`text-2xl text-gray-400`}>#{post.number}</div>
      </div>
      <div className="mb-2 flex flex-row items-baseline gap-3 text-gray-400">
        <span>Sol {post.sol}</span>
        <span>|</span>
        <span>{post.author}</span>
      </div>
      <article
        className={`me-10 flex flex-col gap-4 pe-6 text-justify text-lg font-extralight`}
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  )
}
