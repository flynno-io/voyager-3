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
      className={`mb-6 flex justify-between rounded-lg bg-yellow-50 p-6 shadow-md`}
    >
      <div className={`flex w-full flex-1 flex-col items-start justify-normal`}>
        <div className={`flex items-center justify-between gap-3`}>
          <h2 className={`text-2xl font-bold`}>{title}</h2>
          <p className={`text-gray-400`}>#{number}</p>
        </div>
        <p className={`text-gray-500`}>{description}</p>
      </div>
      <div
        className={`mt-4 flex max-w-32 flex-1 flex-col items-center justify-between`}
      >
        <Link href={`/transmissions/${id}`}>
          <Button isPrimary={true}>Read More</Button>
        </Link>
      </div>
    </article>
  );
}
