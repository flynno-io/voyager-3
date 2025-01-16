import React from "react"
// import { spaceGrotesk, outfit } from "@/styles/fonts";
import LoginForm from "@/ui/login-signup/login-form";
import PhotoStack from "@/ui/login-signup/photo-stack";

export default function Page() {
	return (
		<main className={`max-h-full`}>
      <div className={`w-full h-full max-h-screen grid grid-cols-12 gap-2`}>
        <div className={`w-full h-full grid col-start-1 col-span-8 justify-center items-center`}>
          <PhotoStack />
        </div>
        <div className={`w-full pe-10 h-full grid col-start-9 justify-center col-span-4 items-center`}>
            <LoginForm />
        </div>
      </div>
		</main>
	)
}