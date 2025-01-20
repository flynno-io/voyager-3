import SignUpForm from "@/ui/login-signup/signup-form";
import VoyagerLogo from "@/ui/voyager-logo";
import type { Metadata } from "next";

export const meta: Metadata = {
  title: "Sign Up",
  description: "Create an account to begin follwing the Voyager III mission.",
};

export default function Page() {
  return (
    <section className="mx-5 mb-20 flex h-full flex-col items-center justify-start space-y-5 md:mb-0">
      <VoyagerLogo />
      <h1
        className={`px-10 text-center text-5xl font-bold leading-snug md:px-5`}
      >
        Sign up to follow the mission
      </h1>
      <SignUpForm />
    </section>
  );
}
