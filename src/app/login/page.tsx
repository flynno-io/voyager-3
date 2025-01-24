import LoginForm from "@/ui/login-signup/login-form"
import VoyagerLogo from "@/ui/voyager-logo"
import type { Metadata } from "next"
import Link from "next/link"

export const meta: Metadata = {
  title: "Login",
  description: "Login to continue following the Voyager III mission.",
}

export default function Page() {
  return (
    <section className="relative mx-5 my-10 flex h-screen flex-col items-center justify-start space-y-5">
      <Link
        className={`absolute left-0 top-5 min-w-fit rounded-lg bg-blue-500 p-2 text-white`}
        href="/"
      >
        Home
      </Link>
      <VoyagerLogo />
      <h1
        className={`w-full px-10 text-center text-5xl font-bold leading-snug md:px-5`}
      >
        Login to follow the mission
      </h1>
      <LoginForm />
    </section>
  )
}
