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
    <div className="container h-[800px] flex flex-col py-5 gap-5 bg-gradient-to-b from-[#000000] to-[#272525]">
      <h2 className="text-4xl md:text-5xl text-white font-bold text-center md:text-right">
        Как пользоваться?
      </h2>
      <div className="flex justify-center items-end gap-2 mb-5">
        <p className="text-white text-xl font-medium">Я пользуюсь...</p>
        <Select value={tutorialType} onValueChange={setTutorialType}>
          <SelectTrigger
            data-choosed={!!tutorialType}
            className="w-[180px] bg-transparent border-none pb-0 text-lg text-white data-[choosed=true]:text-3xl data-[choosed=true]:bg-clip-text data-[choosed=true]:bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] data-[choosed=true]:text-transparent transition-all duration-300"
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
        {steps?.map((step, index) => (
          <div key={step.title} className="flex gap-10 w-full">
            <div className="w-[30%] flex flex-col items-center">
              <div className="flex items-center justify-center font-medium w-[30px] h-[30px] rounded-full bg-white">
                {index + 1}
              </div>
              {index !== steps.length - 1 && (
                <div className="w-[3px] h-[140px] bg-white" />
              )}
            </div>
            <div className="w-[40%] text-white flex flex-col">
              <p className=" text-white text-xl">{step.title}</p>
              <p className=" text-white text-xmd">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
