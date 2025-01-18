import { spaceMono, spaceGrotesk } from '@/fonts/*';

export default function VoyagerLogo() {
  return (
    <div
      className={`${spaceGrotesk.className} my-10 flex flex-col justify-center items-center leading-none text-black`}
    >
      <h1 className="text-[55px] text-center">VOYAGER III</h1>
      <p className={`${spaceMono.className} text-md text-gray-800 text-center`}>The journey of one lifetime</p>
    </div>
  );
}
