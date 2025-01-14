import React from "react"
import Image from "next/image"
import { spaceGrotesk, outfit } from "@/styles/fonts";

export default function Page() {
	return (
		<main>
      <div className={`w-full`}>
			<Image
				src="/voyager_2_launch_1.webp"
				width={1500}
				height={1800}
				className="absolute inset-0 w-full h-full object-top object-cover"
				alt="The Voyager II spacecraft"
			/>
      <div className={`${outfit.className} absolute top-[100px] right-[50px] text-white text-6xl`}>
        <div className={`py-5 px-10 rounded-[25px] bg-transparent border-spacing-2 border-4 border-white shadow-md`}>Voyager III</div>
      </div>
      </div>
		</main>
	)
}
