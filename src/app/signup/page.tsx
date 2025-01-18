import SignUpForm from "@/ui/login-signup/signup-form";
import type { Metadata } from "next";

export const meta: Metadata = {
  title: "Sign Up",
  description: "Create an account to begin follwing the Voyager III mission.",
};

export default function Page() {

	return (
		<section>
      <SignUpForm />
		</section>
	)
}