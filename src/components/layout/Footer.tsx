import plane from '@/assets/images/plane-2.png';
export function Footer() {
  return (
    <footer className="overflow-hidden bg-gradient-to-b from-[#000000] to-[#272525]">
      <div className="container relative w-full h-[200px] ">
        <div className="absolute right-0 top-0 w-[250px]">
          <img src={plane} alt="" />
        </div>
      </div>
    </footer>
  );
}
