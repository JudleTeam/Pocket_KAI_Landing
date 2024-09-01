import rustore from '@/assets/images/rustore-logo.png';
import { Button } from '../ui/button';
import { BookDown, Globe } from 'lucide-react';

export function Links() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center container">
      <h3 className="text-3xl ">Посетите.</h3>
      <h3 className="text-3xl">Скачайте.</h3>
      <h3 className="text-3xl bg-clip-text bg-gradient-to-r from-[#f6d365] to-[#fda085] text-transparent">
        Установите.
      </h3>
      <p className="text-center text-lg">
        Выберите любой удобный вариант - нашим приложением можно пользоваться из
        браузера, установить как PWA, скачать APK или воспользоваться RuStore.
      </p>
      <div className="flex flex-col gap-3">
        <div className="cursor-pointer">
          <img src={rustore} alt="Rustore logo" />
        </div>
        <Button className="flex gap-2 text-xl bg-black py-6 group">
          <BookDown />
          <span className="bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300">
            Скачать APK
          </span>
        </Button>
        <Button className="flex gap-2 text-xl bg-black py-6 group">
          <Globe />
          <span className="bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300">
            Перейти на вебсайт
          </span>
        </Button>
      </div>
    </div>
  );
}
