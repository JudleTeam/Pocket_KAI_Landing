import { Button } from '../ui/button';
import { BookDown, Globe } from 'lucide-react';
import phone from '@/assets/phone-showcase/Phone.png';
import schedule from '@/assets/phone-showcase/Schedule.png';
import rustore from '@/assets/images/rustore.svg';

import { useEffect, useState } from 'react';
export function Links() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setScreenWidth]);
  return (
    <div
      id="links"
      className="container w-full h-[850px] flex flex-row justify-between items-start overflow-hidden relative md:h-full md:items-baseline"
    >
      <div className="w-full md:w-[60%] lg:w-[40%] flex flex-col gap-8 justify-center py-5">
        <div className="flex flex-col gap-3 items-center text-center md:text-left md:items-start">
          <h3 className="text-5xl font-bold">Посетите.</h3>
          <h3 className="text-5xl font-bold">Скачайте.</h3>
          <h3 className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-[#f6d365] to-[#fda085] text-transparent">
            Будьте в курсе.
          </h3>
        </div>
        <p className="text-lg font-medium text-center md:text-left">
          Выберите любой удобный вариант - нашим приложением можно пользоваться
          из браузера, установить как PWA, скачать APK или воспользоваться
          RuStore.
        </p>
        <div className="w-full md:w-[80%] lg:w-[80%] flex flex-col gap-3">
          <a href="https://pocket-kai.ru" target="_blank">
            <Button className="w-full flex gap-2 text-xl bg-black py-7 group">
              <Globe />
              <span className="bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300">
                Перейти на вебсайт
              </span>
            </Button>
          </a>
          <a
            href="https://www.rustore.ru/catalog/app/ru.pocket_kai.www?rsm=1&mt_link_id=l394r2"
            target="_blank"
          >
            <Button className="w-full flex gap-2 text-xl bg-black py-7 group relative">
              <div className="w-6">
                <img src={rustore} alt="Rustore logo" />
              </div>
              <span className="bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300">
                Скачать из RuStore
              </span>
            </Button>
          </a>
          <a href="/PocketKAI.apk" download="Pocket KAI.apk" target="_blank">
            <Button className="w-full flex gap-2 text-xl bg-black py-7 group">
              <BookDown />
              <span className="bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300">
                Скачать APK
              </span>
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute top-[83%] left-1/2 -translate-x-1/2 w-[80%] xs:top-[79%] sm:w-[60%]  sm:top-[65%] md:translate-x-0 md:-right-3 md:top-32  md:w-[55%]  lg:right-5 lg:top-7  lg:w-[50%]">
        <img src={screenWidth > 768 ? phone : schedule} alt="" />
      </div>
    </div>
  );
}
