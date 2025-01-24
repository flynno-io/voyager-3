import Posts from "@/ui/transmissions/posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to continue following the Voyager III mission.",
}

export default async function Page() {
  return (
    <section>
      <p className={`py-2`}>Breadcumb / will / go / here</p>
      <h1 className={`mb-4 text-4xl font-bold`}>Transmissions</h1>
      <Posts />
    </section>
  )
}
