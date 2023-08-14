import Image from "next/image";
import React from "react";

interface CardProps {
  imageUrl: string;
  category: string;
  title: string;
  author?: string;
  date?: Date;
}

const CardRow: React.FC<CardProps> = ({
  imageUrl,
  category,
  title,
  author,
  date,
}) => {
  return (
    <div className="flex gap-5 ">
      <div className="relative bg-red-500 flex-1" style={{aspectRatio:'4/2.3'}}>
        <Image src={imageUrl} layout="fill" alt="image" />
      </div>
      <div className=" flex flex-col justify-center gap-1 flex-[1.5] ">
        <div className="self-start py-1  px-2 rounded-sm  bg-purple-400 text-xs">
          {category}
        </div>
        <div className="text-xl font-medium w-[80%] ">{title}</div>
        <div className="flex gap-3 text-sm">
          {author != undefined && <div>{author}</div>}
          {date != undefined && <div>{date.getDate()}</div>}
        </div>
      </div>
    </div>
  );
};

export default CardRow;
