import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons'
import { spaceMono } from '@/fonts/*';

export default function VoyagerLogo() {
  return (
    <div
      className={`${spaceMono.className} my-5 flex flex-row justify-center items-center leading-none text-black`}
    >
      {/* <FontAwesomeIcon icon={faShuttleSpace} className="h-12 w-12 -rotate-[45deg]" /> */}
      <p className="text-[55px]">VOYAGER 3</p>
    </div>
  );
}
