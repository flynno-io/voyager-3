import Button from "@/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`m-0 flex h-auto w-64 flex-col gap-1 space-y-2 p-0`}>
      <Link href="/sign-up">
        <Button isPrimary={true} className={`w-full`}>
          Sign Up
        </Button>
      </Link>
      <Link href="/login">
        <Button isPrimary={false} className={`w-full`}>
          Login
        </Button>
      </Link>
    </div>
  );
}
