import SignUpForm from "@/ui/login-signup/signup-form"
import VoyagerLogo from "@/ui/voyager-logo"
import type { Metadata } from "next"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export const meta: Metadata = {
  title: "Sign Up",
  description: "Create an account to begin follwing the Voyager III mission.",
}

export default function Page() {
  return (
    <section className="relative mx-5 my-10 flex h-screen flex-col items-center justify-start space-y-5">
      <div
        className={`group absolute left-0 top-0 -mt-5 flex w-fit cursor-pointer items-center justify-start space-x-1 md:left-5 md:top-5`}
      >
        <FontAwesomeIcon
          className={`m-1 transition-all duration-300 ease-in-out group-hover:me-3`}
          icon={faChevronLeft}
        />
        <Link href="/" className="text-blue-500">
          Back to Home
        </Link>
      </div>
      <VoyagerLogo className={`mb-5`} />
      <h1
        className={`px-10 text-center text-5xl font-bold leading-snug md:px-5`}
      >
        Sign up to follow the mission
      </h1>
      <SignUpForm />
    </section>
  )
}
