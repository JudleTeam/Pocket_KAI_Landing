import pKLogo from '@/assets/images/white-logo.png';
import { Button } from '../ui/button';
import { FaTelegramPlane } from 'react-icons/fa';
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
        <a href="https://t.me/pocket_kai" target="_blank">
          <Button variant={'outline'} className="space-x-2 z-10">
            <FaTelegramPlane />
            <span>Telegram</span>
          </Button>
        </a>
      </div>
    </header>
  );
}
