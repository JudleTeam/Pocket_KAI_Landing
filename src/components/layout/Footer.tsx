import plane from '@/assets/images/plane-2.png';
//import pilot from '@/assets/images/pilot.png';
export function Footer() {
  return (
    <footer className="overflow-hidden relative bg-gradient-to-t from-[#000000] to-[#272525]">
      <div className="container relative w-full h-[200px] ">
        <div>
          <p className="text-white text-xl">Judle Team</p>
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
