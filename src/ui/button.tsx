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
          "bg-white text-black hover:bg-slate-100 active:bg-slate-200 border border-black":
            !isPrimary,
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
