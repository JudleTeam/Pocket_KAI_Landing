import searchedTeachers from '@/assets/phone-showcase/Searched Teachers.png';
import teacherSchedule from '@/assets/phone-showcase/Teacher Drawer.png';
import classicSchedule from '@/assets/phone-showcase/Classic Schedule.png';
import customization from '@/assets/phone-showcase/Customization.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

export function Overview() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)
  const titles = [
      'Расписание преподавателя',
      'Полное расписание',
      'Кастомизация',
      'Поиск преподавателей'
  ]
  const texts = [
    "Нужно сдать долги? Легко можно узнать расписание нужного преподавателя!",
    "Позволяет смотреть ваше расписание в привычном виде! Пары выводятся одним списком по дням с разделением по чётности недели. Будьте внимательны, пары с нестандартными датами помечены оранжевой подсветкой!",
    "Настраивайте приложение под себя!",
    "Найдите любого преподавателя и смотрите его расписание!"
  ];
  return (
    <div className="w-full flex h-[600px] ">
      <div className='w-[60%] h-[100%]'>
      <Swiper
      className='w-[100%] h-[100%]'
      loop
      navigation
      grabCursor
      effect='coverflow'
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true} 
      modules={[EffectCoverflow, Navigation]}
      slidesPerView={3}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide className='flex justify-center items-center'>
          <img className='h-[100%]' src={searchedTeachers} alt="" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img className='h-[100%]' src={teacherSchedule} alt="" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img className='h-[100%]' src={classicSchedule} alt="" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img className='h-[100%]' src={customization} alt="" />
        </SwiperSlide>
      </Swiper>

      </div>
      <div className='w-[50%] flex flex-col gap-[100px]'>
        <h1 className='text-5xl font-bold'>О приложении</h1>
        <div>
          <h2 className='text-2xl font-bold'>{titles[activeIndex]}</h2>
          <h2 className='text-xl font-medium'>{texts[activeIndex]}</h2>
        </div>
      </div>
    </div>
  );
}
