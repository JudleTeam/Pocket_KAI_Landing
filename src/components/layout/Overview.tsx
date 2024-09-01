import macbook from '@/assets/phone-showcase/macbook.png';
import searchedTeachers from '@/assets/phone-showcase/Searched Teachers.png';
import teacherSchedule from '@/assets/phone-showcase/Teacher Drawer.png';
import classicSchedule from '@/assets/phone-showcase/Classic Schedule.png';
import customization from '@/assets/phone-showcase/Customization.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export function Overview() {
  return (
    <div className="container">
      <Swiper
        className="w-full h-[500px] flex justify-center items-center"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="flex justify-center max-h-full">
          <div className="w-full h-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-full h-full relative md:w-[50%]">
              <img
                className="absolute top-1/2 -translate-y-1/2 left-0 "
                src={macbook}
                alt=""
              />
            </div>
            <div className="space-y-4 md:w-[50%]">
              <h3 className="text-5xl">Доступность</h3>
              <p className="text-2xl">
                Без привязки к платформе. Пользуйтесь на ПК, iOs и Android.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center max-h-full">
          <div className="w-full flex flex-col justify-center items-center lg:flex-row">
            <div className="w-full h-[400px] relative md:w-[50%] ">
              <img
                className="absolute -top-10 left-0 "
                src={searchedTeachers}
                alt=""
              />
            </div>
            <div className="space-y-4 md:w-[50%]">
              <h3 className="text-5xl">Поиск преподавателей</h3>
              <p className="text-2xl">
                Найдите преподавателя по своему запросу.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center max-h-full">
          <div className="w-full flex flex-col justify-center items-center md:flex-row">
            <div className="space-y-4 md:w-[50%]">
              <h3 className="text-5xl">Расписание преподавателей</h3>
              <p className="text-2xl">
                Берегите своё время. Быстрый и удобный просмотр расписания
                преподавателей.
              </p>
            </div>
            <div className="w-full h-[400px] relative md:w-[50%] ">
              <img
                className="absolute -top-72 left-0"
                src={teacherSchedule}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div>
            <div>
              <img src={classicSchedule} alt="" />
            </div>
            <div>
              <h3>Полное расписание</h3>
              <p>
                Для ценителей классики. Просмотр расписания на неделю без
                привязки к дате.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div>
            <div>
              <img src={customization} alt="" />
            </div>
            <div>
              <h3>Кастомизация</h3>
              <p>Управляй своим расписанием.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
