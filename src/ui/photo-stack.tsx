"use client"
import Image from "next/image"

interface Photo {
  src: string
  priority: boolean
  alt: string
}

const albumOne = [
  // 10 images
  {
    src: "/images/voyager_launch_op.jpg",
    priority: true,
    alt: "The Voyager II launch",
  },
  {
    src: "/images/voyager_construction_op.jpg",
    priority: false,
    alt: "Scientists constructing the Voyager II probe",
  },
  {
    src: "/images/golden_record_op.jpg",
    priority: false,
    alt: "The Golden Record - Sounds of Earth (back)",
  },
  {
    src: "/images/jupiter_op.jpg",
    priority: false,
    alt: "Three views of Jupiter",
  },
  {
    src: "/images/payload_assembly_op.jpg",
    priority: false,
    alt: "Inspection of the Voyager payload before assembly",
  },
  {
    src: "/images/saturn_profile_op.jpg",
    priority: false,
    alt: "Saturn and its rings",
  },
  {
    src: "/images/voyager_2_in_space_op.jpg",
    priority: false,
    alt: "The Voyager II spacecraft - digital rendition",
  },
  {
    src: "/images/spaceship_generator_op.jpg",
    priority: false,
    alt: "The Voyager II generator",
  },
  {
    src: "/images/pale_blue_dot_op.webp",
    priority: true,
    alt: "The Pale Blue Dot - Earth from Voyager I",
  },
  {
    src: "/images/voyager_patch_op.webp",
    priority: false,
    alt: "The Voyager mission patch",
  },
]

const albumTwo = [
  // 10 images
  {
    src: "/images/neptune_op.jpg",
    priority: false,
    alt: "The planet Neptune",
  },
  {
    src: "/images/payload_loading_op.jpg",
    priority: false,
    alt: "Loading the Voyager payload into the capsule",
  },
  {
    src: "/images/earth_chemical_composition_op.jpg",
    priority: false,
    alt: "Picture of earth with its chemical composition",
  },
  {
    src: "/images/voyager_launch_ascending_op.webp",
    priority: false,
    alt: "Voyager II ascending into space",
  },
  {
    src: "/images/cassiopeia_op.jpg",
    priority: false,
    alt: "The constellation Cassiopeia",
  },
  {
    src: "/images/the_moon_op.jpg",
    priority: false,
    alt: "The surface of the Moon",
  },
  {
    src: "/images/capsule_assembly_op.jpg",
    priority: false,
    alt: "The Voyager II capsule being loaded onto the rocket",
  },
  {
    src: "/images/jupiter_atmosphere_op.jpg",
    priority: true,
    alt: "Jupiter's great red spot.",
  },
  {
    src: "/images/sounds_of_earth_op.jpg",
    priority: false,
    alt: "The Sounds of Earth - the Golden Record (front)",
  },
  {
    src: "/images/payload_contents_op.jpg",
    priority: false,
    alt: "The contents of the Voyager payload",
  },
]

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
