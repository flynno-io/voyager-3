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
        `flex h-10 w-full items-center justify-center rounded-lg px-4 align-middle text-sm font-medium outline-none transition-colors focus-visible:ring-4 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`,
        {
          "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600":
            isPrimary,
          "acive:border-gray-500 border border-gray-500 bg-white text-black hover:border-gray-200 hover:bg-gray-200 active:bg-gray-300":
            !isPrimary,
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
