
import { Button } from '../ui/button';
import { BookDown, Globe } from 'lucide-react';
import phone from '@/assets/phone-showcase/Phone.png';
import rustore from '@/assets/images/rustore.svg'
export function Links() {
  return (
    <div className="w-full h-full flex flex-row justify-around">
      <div className='w-[40%] flex flex-col gap-10 justify-center'>
      <div className='flex flex-col gap-5'>
        <h3 className="text-5xl font-bold">Посетите.</h3>
        <h3 className="text-5xl font-bold">Скачайте.</h3>
        <h3 className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-[#f6d365] to-[#fda085] text-transparent">
          Установите.
        </h3>
      </div>
      <p className="text-lg">
        Выберите любой удобный вариант - нашим приложением можно пользоваться из
        браузера, установить как PWA, скачать APK или воспользоваться RuStore.
      </p>
      <div className="w-[50%] flex flex-col gap-3">
      <Button className="flex gap-2 text-xl bg-black py-7 group relative">
          <div className='w-[2rem]'>
          <img className='w-[100%] h-[100%]' src={rustore} alt="Rustore logo" />
          </div>
          <span className='bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300'>Скачать из RuStore</span>
          </Button>
        <Button className="flex gap-2 text-xl bg-black py-7 group">
          <BookDown />
          <span className="bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300">
            Скачать APK
          </span>
        </Button>
        <Button className="flex gap-2 text-xl bg-black py-7 group">
          <Globe />
          <span className="bg-clip-text text-white group-hover:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] group-hover:text-transparent transition-all duration-300">
            Перейти на вебсайт
          </span>
        </Button>
      </div>
      </div>
      <div className='w-[30%] flex justify-center items-center'>
      <img src={phone} alt="" />
      </div>
    </div>
  );
}
