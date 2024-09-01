import { Button } from '../ui/button';
import SmartphoneScene from '../modules/SmartphoneScene';
import schedulePhone from '@/assets/phone-showcase/Schedule.png';
import plane from '@/assets/images/plane.png';

export function Main() {
  return (
    <main className="flex flex-1 justify-center md:justify-between max-h-screen items-center container">
      <div className="flex flex-col items-center gap-10">
        <div className="absolute -left-20 top-0 w-[400px]">
          <img src={plane} alt="" />
        </div>
        <h1 className="text-6xl font-bold text-center text-white z-10">
          <span className="bg-clip-text bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] text-transparent">
            <span className="font-[400]">Pocket</span>KAI
          </span>
          - весь КАИ в твоём кармане.
        </h1>
        <p className="text-2xl text-center  text-white">
          Делай больше. Будь лучше.
        </p>
        <Button className="w-[200px] text-2xl py-7 rounded-[20px] transition-all bg-[length:300%_100%] hover:bg-[100%_0] duration-300 bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70]">
          Скачать
        </Button>
      </div>
      <div className=" hidden md:block h-[800px] min-w-[400px] transition-all duration-500 translate-x-28 hover:translate-x-20 hover:-rotate-12">
        <img className="h-full min-w-full" src={schedulePhone} alt="Phone" />
      </div>
      <SmartphoneScene />
    </main>
  );
}
