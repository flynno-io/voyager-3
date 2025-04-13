"use client"
import Image from "next/image"
import { albumOne, albumTwo } from "@/lib/images"

interface Photo {
  src: string
  priority: boolean
  alt: string
}

export default function PhotoStack() {
  // Create a new array of Image components
  function renderImages(array: Photo[]) {
    return [...array, ...array].map((photo: Photo, index: number) => (
      <div
        key={index}
        className="group relative h-64 w-64 overflow-hidden rounded-md shadow-2xl"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          unoptimized
          priority={photo.priority}
          className="object-cover"
        />
        <div className="invisible absolute inset-0 z-10 flex items-center justify-center rounded-md bg-black bg-opacity-60 text-white group-hover:visible">
          <p className="p-5 text-center text-base md:p-10">{photo.alt}</p>
        </div>
      </div>
    ))
  }

  // Create two columns of images
  const PhotoColOne = renderImages(albumOne)
  const PhotoColTwo = renderImages(albumTwo)

  return (
    <div
      className={`mx-5 my-0 flex max-h-screen items-start gap-2 overflow-hidden px-12 py-0`}
    >
      {/* Photo Column One - flow up */}
      <div
        className={`scroll_inner_one hover:pause flex flex-1 animate-slowScrollUp flex-col gap-2`}
      >
        {PhotoColOne}
      </div>
      {/* Photo Column Two - float down */}
      <div
        className={`scroll_inner_two hover:pause hidden flex-1 -translate-y-[50%] transform animate-slowScrollDown flex-col gap-2 xl:flex`}
      >
        {PhotoColTwo}
      </div>
    </div>
  )
}
