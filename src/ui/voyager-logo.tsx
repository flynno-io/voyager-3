import { spaceMono, spaceGrotesk } from "@/fonts/*"
import Link from "next/link"
import clsx from "clsx"

export default function VoyagerLogo({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        `${spaceGrotesk.className} mx-2 my-5 flex flex-col items-center justify-center leading-none text-black`,
        className,
      )}
    >
      <Link href="/">
        <p className="text-center text-[55px]">VOYAGER III</p>
        <p
          className={`${spaceMono.className} ${className} text-md text-center text-gray-800`}
        >
          The journey of one lifetime
        </p>
      </Link>
    </div>
  )
}
