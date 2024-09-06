import searchedTeachers from '@/assets/phone-showcase/Searched Teachers.png';
import teacherSchedule from '@/assets/phone-showcase/Teacher Drawer.png';
import classicSchedule from '@/assets/phone-showcase/Classic Schedule.png';
import customization from '@/assets/phone-showcase/Customization.png';
import macbook from '@/assets/phone-showcase/macbook.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Overview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
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
  const titles = [
    'Доступность',
    'Поиск преподавателей',
    'Расписание преподавателя',
    'Полное расписание',
    'Кастомизация',
  ];
  const texts = [
    'Пользуйтесь на любом устройстве. Доступно на ПК, iOS и Android.',
    'Найдите интересующего вас преподавателя. Узнайте всё.',
    'Расписание любого преподавателя. Легко и быстро.',
    'Для ценителей классики. Расписание в формате плиток без привязки к датам.',
    'Скройте всё ненужное. Выберите свой стиль.',
  ];
  const titleWords = titles[activeIndex].split(' ');
  return (
    <div className="container w-full flex flex-col items-center h-fit max-h-fit py-8 gap-7 lg:max-h-[800px] lg:flex-row lg:gap-10">
      <div className="w-full lg:w-[50%] custom-swiper-wrapper">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
          loop
          grabCursor
          centeredSlides
          spaceBetween={40}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 15,
            depth: 90,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
          slidesPerView={screenWidth < 768 ? 1.5 : 2.1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          <SwiperSlide className="flex justify-center items-center min-h-[390px]">
            {({ isPrev, isNext }) => (
              <img
                className={`max-h-[60%] lg:max-h-full min-w-[300px] lg:min-w-[500px] transition-all duration-300 ${
                  (isPrev || isNext) && 'filter grayscale opacity-30'
                }`}
                src={macbook}
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            {({ isNext, isPrev }) => (
              <img
                className={`max-h-[500px] lg:max-h-full transition-all duration-300 ${
                  (isPrev || isNext) && 'filter grayscale opacity-30'
                }`}
                src={searchedTeachers}
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            {({ isNext, isPrev }) => (
              <img
                className={`max-h-[500px] lg:max-h-full transition-all duration-300 ${
                  (isPrev || isNext) && 'filter grayscale opacity-30'
                }`}
                src={teacherSchedule}
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            {({ isNext, isPrev }) => (
              <img
                className={`max-h-[500px] lg:max-h-full transition-all duration-300 ${
                  (isPrev || isNext) && 'filter grayscale opacity-30'
                }`}
                src={classicSchedule}
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            {({ isNext, isPrev }) => (
              <img
                className={`max-h-[500px] lg:max-h-full transition-all duration-300 ${
                  (isPrev || isNext) && 'filter grayscale opacity-30'
                }`}
                src={customization}
                alt=""
              />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full self-start lg:w-1/2 flex flex-col gap-3">
        {screenWidth > 992 && (
          <h3 className="text-5xl font-bold text-[#272525]">О приложении</h3>
        )}
        <div className="space-x-4 mx-auto lg:mx-0">
          <Button onClick={() => swiperRef.current?.slidePrev()}>
            <ChevronLeft />
          </Button>
          <Button onClick={() => swiperRef.current?.slideNext()}>
            <ChevronRight />
          </Button>
        </div>
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <h2 className="text-4xl font-semibold text-center md:text-left">
            <span className="bg-clip-text bg-gradient-to-r from-[#f6d365] to-[#fda085] text-transparent">
              {titleWords[0]}
            </span>{' '}
            {titleWords.length > 1 && titleWords[1]}
          </h2>

          <p className="text-2xl font-medium text-[#272525] text-center lg:text-left">
            {texts[activeIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
