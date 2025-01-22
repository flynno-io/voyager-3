import Button from "@/ui/button";
import Link from "next/link";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  number: number;
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
      className={`my-3 flex h-28 items-start justify-between rounded-md border border-slate-300 p-3 shadow-sm`}
    >
      <p
        className={`flex h-full min-w-16 flex-col items-start justify-center p-2 text-2xl text-gray-400`}
      >
        #{number}
      </p>
      <div className={`m-0 flex w-full flex-col p-0`}>
        <h2 className={`text-2xl font-bold`}>{title}</h2>
        <p className={`text-gray-500`}>{description}</p>
      </div>
      <Link
        className={`flex h-full w-[200px] flex-col justify-center p-2`}
        href={`/transmissions/${id}`}
      >
        <Button isPrimary={true}>Read More</Button>
      </Link>
    </article>
  );
}
