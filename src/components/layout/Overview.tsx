import macbook from '@/assets/phone-showcase/macbook.png';
import searchedTeachers from '@/assets/phone-showcase/Searched Teachers.png';
import teacherSchedule from '@/assets/phone-showcase/Teacher Drawer.png';
import classicSchedule from '@/assets/phone-showcase/Classic Schedule.png';
import customization from '@/assets/phone-showcase/Customization.png';
import { OverviewBlock } from '../modules/OverviewBlock';

export function Overview() {
  return (
    <div className=" flex flex-col gap-5 items-center container">
      <OverviewBlock
        imgPlacement="left"
        brightSpan="Доступность"
        title=""
        description="Без привязки к платформе. Пользуйтесь на ПК, iOs и Android."
      >
        <div className="max-w-[40%]">
          <img
            className="hover:translate-x-4 transition-all duration-500"
            src={macbook}
            alt="macbook"
          />
        </div>
      </OverviewBlock>
      <OverviewBlock
        imgPlacement="right"
        brightSpan="Поиск"
        title="преподавателей"
        description="Найдите преподавателя по своему запросу.
"
      >
        <div className="flex justify-center min-w-[50%] h-[600px]">
          <img
            className="h-full -rotate-12 hover:-translate-y-5 transition-all duration-500"
            src={searchedTeachers}
            alt="search teachers"
          />
        </div>
      </OverviewBlock>
      <OverviewBlock
        imgPlacement="left"
        title="Расписание"
        brightSpan="преподавателей"
        spanLocation="right"
        description="Берегите своё время. Быстрый и удобный просмотр расписания преподавателей."
      >
        <div className="flex justify-center min-w-[50%] h-[600px]">
          <img
            className="h-full hover:-translate-x-8 -translate-y-76 transition-all duration-500"
            src={teacherSchedule}
            alt="teacher schedule"
          />
        </div>
      </OverviewBlock>
      <OverviewBlock
        imgPlacement="right"
        brightSpan="Полное"
        title="расписание"
        description="Для ценителей классики. Просмотр расписания на неделю без привязки к дате."
      >
        <div className="flex justify-center min-w-[50%] h-[600px]">
          <img
            className="h-full -translate-y-28 hover:translate-x-8 transition-all duration-500"
            src={classicSchedule}
            alt="teacher schedule"
          />
        </div>
      </OverviewBlock>
      <OverviewBlock
        imgPlacement="left"
        brightSpan="Кастомизация"
        title=""
        description="Управляй своим расписанием."
      >
        <div className="flex justify-center min-w-[50%] h-[600px]">
          <img
            className="h-full rotate-12 hover:translate-x-8 transition-all duration-500"
            src={customization}
            alt="Customization"
          />
        </div>
      </OverviewBlock>
    </div>
  );
}
