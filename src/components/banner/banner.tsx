import Image from "next/image";
import { FC } from "react";
interface BannerProps {
  category: string;
  imageUrl: string;
  title: string;
  date?: Date;
}

const Banner: FC<BannerProps> = ({ category, imageUrl, title, date }) => {
  return (
    <div className="relative w-full h-full flex  flex-col bg-green-500">
      <div className="relative w-full h-full aspect-video">
        <Image src={imageUrl} layout="fill" alt="image" />
      </div>
      <div className="flex flex-col w-[80%]  absolute  gap-1 text-slate-50 bottom-5 left-5 z-10">
        <div className="self-start py-1  px-2 rounded-sm  bg-purple-400 text-xs">
          {category}
        </div>
        <div className="text-2xl font-medium w-[80%] ">{title}</div>
        {date != undefined && (
          <div className="text-base">{date.getDate()}</div>
        )}
      </div>
    </div>
  );
};

export default Banner;
