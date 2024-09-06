import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { HOW_TO_USE } from '@/constants/HOW_TO_USE';
import { useState } from 'react';
//from-[#8454C8] via-[#C850C0] to-[#FFCC70]
export function HowToUse() {
  const [tutorialType, setTutorialType] = useState<string>('');
  const steps = HOW_TO_USE[tutorialType as keyof typeof HOW_TO_USE];
  return (
    <div className="min-h-[600px] h-fit flex flex-col pt-5 pb-10 gap-5 bg-gradient-to-b from-[#000000] to-[#272525]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl text-white font-bold text-center md:text-right">
          Как установить?
        </h2>
        <div className="flex justify-center items-end gap-2 mb-5">
          <p className="text-white text-xl font-medium">Я пользуюсь...</p>
          <Select value={tutorialType} onValueChange={setTutorialType}>
            <SelectTrigger
              data-choosed={!!tutorialType}
              className="mt-7 w-[180px] bg-neutral-900 data-[choosed=true]:bg-transparent border-none pb-0 text-lg text-white data-[choosed=true]:text-3xl data-[choosed=true]:bg-clip-text data-[choosed=true]:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] data-[choosed=true]:text-transparent transition-all duration-300"
            >
              <SelectValue placeholder="Выберите платформу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="android">Android</SelectItem>
              <SelectItem value="pc">ПК</SelectItem>
              <SelectItem value="iphone">iPhone</SelectItem>
              <SelectItem value="mac">Mac</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center">
          {tutorialType &&
            steps?.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-10 w-full md:justify-center"
              >
                <div className="w-[20%] md:w-[5%] flex flex-col items-center">
                  <div
                    data-last={index === steps.length - 1}
                    className={
                      'flex items-center justify-center font-semibold text-lg w-[30px] min-h-[30px] md:w-[40px] md:min-h-[40px] rounded-full bg-white' +
                      ' data-[last=true]:bg-gradient-to-b from-[#C850C0] to-[#FFCC70]'
                    }
                  >
                    {index + 1}
                  </div>
                  {index !== steps.length - 1 && (
                    <div
                      data-second-to-last={index === steps.length - 2}
                      className={
                        'w-[3px] md:w-[4px] min-h-[140px] h-full bg-white ' +
                        'data-[second-to-last=true]:bg-gradient-to-b from-[#ffffff] via-[#8454C8] to-[#C850C0] data-[choosed=true]:text-transparent'
                      }
                    />
                  )}
                </div>
                <div
                  className={
                    'w-[70%] md:w-[30%] text-white flex flex-col gap-2 pb-10' +
                    ''
                  }
                >
                  <p
                    data-last={index === steps.length - 1}
                    className="text-white text-lg sm:text-2xl  data-[last=true]:bg-clip-text data-[last=true]:bg-gradient-to-r data-[last=true]:text-transparent data-[last=true]:text-3xl from-[#f6d365] to-[#fda085] "
                  >
                    {step.title}
                  </p>
                  <p className=" text-white text-sm sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          {!tutorialType && (
            <p className="text-white text-2xl text-center mt-20">
              Выберите вашу платформу
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
