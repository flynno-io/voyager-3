import { fetchPostById } from "@/lib/data";
import type { Metadata } from "next";

// TODO: dynamically import the blog post meta data
export const meta: Metadata = {
  title: "Blog Slug",
  description: "Description of the blog slug page",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  console.log("params", params);
  const id = Number(params.id);
  const post = await fetchPostById(id);

  // TODO: Add breadcrumb to top of page
  // TODO: Add fetch to get blog post data
  // TODO: Add error handling for fetch
  return (
    <section className="items-left flex h-screen flex-col justify-start space-x-4 space-y-2 overflow-hidden">
      <div className={`items-left ms-4 flex items-baseline gap-5 space-y-2`}>
        <h1 className={`text-4xl font-bold`}>{post.title}</h1>
        <div className={`text-2xl text-gray-400`}>#{post.number}</div>
      </div>
      <div className="flex flex-row items-baseline gap-3 text-gray-400">
        <span>Sol {post.sol}</span>
        <span>|</span>
        <span>{post.author}</span>
      </div>
      <article>
        <p>{post.content}</p>
      </article>
    </section>
  );
}
