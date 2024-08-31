import { Button } from '../ui/button';
import pKLogo from '@/assets/images/white-logo.png';
export function Header() {
  return (
    <header className="w-full flex justify-between items-center py-2 container">
      <div className="w-[60px]">
        <img src={pKLogo} alt="" />
      </div>
      <div className="flex gap-3">
        {/* <Button variant={'outline'}>Обзор</Button>
        <Button variant={'outline'}>Варианты</Button>
        <Button variant={'outline'}>Отзывы</Button>
        <Button variant={'outline'}>О нас</Button> */}
        <Button
          variant={'outline'}
          className="transition-all hover:text-white bg-[length:300%_100%] hover:bg-[100%_0] duration-300 bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70]"
        >
          Скачать
        </Button>
      </div>
    </header>
  );
}
