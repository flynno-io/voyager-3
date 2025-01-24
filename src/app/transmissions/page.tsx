import Posts from "@/ui/transmissions/posts"
import type { Metadata } from "next"
import { Suspense } from "react"
import { fetchPostCards } from "@/lib/data"
import { IPostCard } from "@/lib/definitions"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to continue following the Voyager III mission.",
}

export default async function Page() {
  const posts: Promise<IPostCard[]> = fetchPostCards()

  return (
    <section>
      <p className={`py-2`}>Breadcumb / will / go / here</p>
      <h1 className={`mb-4 text-4xl font-bold`}>Transmissions</h1>
      <Suspense fallback={<div>Loading Posts...</div>}>
        <Posts posts={posts} />
      </Suspense>
    </section>
  )
}
