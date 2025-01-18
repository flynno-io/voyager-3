import LoginForm from "@/ui/login-signup/login-form";
import type { Metadata } from "next";

export const meta: Metadata = {
  title: "Login",
  description: "Login to continue following the Voyager III mission.",
};

export default function Page() {

	return (
		<section>
      <LoginForm />
		</section>
	)
}