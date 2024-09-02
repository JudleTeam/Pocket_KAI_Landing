import plane from '@/assets/images/plane-2.png';
import pilot from '@/assets/images/pilot.png'
export function Footer() {
  return (
    <footer className="overflow-hidden bg-gradient-to-b from-[#000000] to-[#272525]">
      <div className="container relative w-full h-[200px] ">
        <div className='absolute left-0 top-1/3 w-[250px]'>
          <img src={pilot} alt="" />
        </div>
        <div className="absolute right-0 top-0 w-[250px]">
          <img src={plane} alt="" />
        </div>
      </div>
    </footer>
  );
}
