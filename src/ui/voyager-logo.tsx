import { spaceMono, spaceGrotesk } from "@/fonts/*";

export default function VoyagerLogo() {
  return (
    <div
      className={`${spaceGrotesk.className} my-10 flex flex-col items-center justify-center leading-none text-black`}
    >
      <h1 className="text-center text-[55px]">VOYAGER III</h1>
      <p className={`${spaceMono.className} text-md text-center text-gray-800`}>
        The journey of one lifetime
      </p>
    </div>
  );
}
