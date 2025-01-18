import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isPrimary?: boolean;
}

export default function Button({
  isPrimary,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `flex h-10 items-center justify-center rounded-lg px-4 align-middle text-sm font-medium outline-none transition-colors focus-visible:ring-4 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`,
        {
          "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600":
            isPrimary,
          "acive:border-gray-500 border border-black bg-white text-black hover:border-gray-400 hover:bg-gray-400 hover:text-white active:bg-gray-500 active:text-white":
            !isPrimary,
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
