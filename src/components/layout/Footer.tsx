import plane from '@/assets/images/plane-2.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { Button } from '../ui/button';
//import pilot from '@/assets/images/pilot.png';
export function Footer() {
  return (
    <footer className="overflow-hidden relative bg-[#272525]">
      <div className="container flex flex-col justify-end gap-2 w-full h-[200px] pb-5">
        <div className="flex flex-col">
          <p className="text-white text-lg md:text-2xl">Judle Team</p>
          <p className="text-white text-md md:text-xl">
            Разработано с любовью.
          </p>
        </div>
        <div>
          {/* <p className="text-white text-sm">© 2022. Все права защищены.</p> */}
          <Button variant={'outline'} className="space-x-2 z-10">
            <FaTelegramPlane />
          </Button>
        </div>
        {/* <div className="absolute right-0 top-1/3 w-[250px]">
          <img src={pilot} alt="" />
        </div> */}
      </div>
      <div className="absolute right-0 bottom-1 w-[250px]">
        <img src={plane} alt="" />
      </div>
    </footer>
  );
}
