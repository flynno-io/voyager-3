import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Error({ message }: { message: string }) {
  return (
    <div
      className={clsx(
        `visible absolute -bottom-20 my-5 flex w-full flex-row items-center justify-start gap-5 rounded-md border-2 border-red-500 p-4 text-base`,
        {
          hidden: !message,
        },
      )}
    >
      <FontAwesomeIcon
        icon={faCircleInfo}
        size="lg"
        className={`text-red-500`}
      />
      <p>{message}</p>
    </div>
  );
}
