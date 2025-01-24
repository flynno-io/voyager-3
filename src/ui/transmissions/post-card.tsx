import Button from "@/ui/button"
import Link from "next/link"

interface PostCardProps {
  id: string
  title: string
  description: string
  number: number
}

export default function PostCard({
  id,
  title,
  description,
  number,
}: PostCardProps) {
  return (
    <article
      key={id}
      className={`md:h-30 my-3 flex flex-col rounded-md border border-slate-300 shadow-sm md:flex-row md:items-start md:justify-between md:p-3`}
    >
      <p
        className={`flex min-w-16 flex-col items-start justify-start p-2 text-2xl text-gray-400 md:h-full md:px-2`}
      >
        #{number}
      </p>
      <div className={`m-0 flex w-full flex-col p-2 md:p-0`}>
        <h2 className={`text-2xl font-bold`}>{title}</h2>
        <p className={`text-gray-500`}>{description}</p>
      </div>
      <Link
        className={`flex h-full w-full flex-col justify-center md:w-[185px] md:p-2`}
        href={`/transmissions/${id}`}
      >
        <Button
          className={`rounded-bl-sm rounded-br-sm rounded-tl-none rounded-tr-none md:rounded-md`}
          isPrimary={true}
        >
          Read More
        </Button>
      </Link>
    </article>
  )
}
