import Image from "next/image";
import React from "react";
interface CardProps {
  imageUrl: string;
  category: string;
  title: string;
  content: string;
  author?: string;
  date?: Date;
}

const Card = ({
  imageUrl,
  category,
  title,
  content,
  author,
  date,
}: CardProps) => {
  return (
    <div className="w-full flex flex-col pb-10 gap-2 ">
      <div className="relative aspect-video">
        <Image src={imageUrl} alt="image" layout="fill" />
      </div>
      <span className="text-sm text-blue-800">{category}</span>
      <div className="text-xl font-medium">{title}</div>
      <div className="flex gap-3 text-sm">
        {author != undefined && <div>{author}</div>}
        {date != undefined && <div>{date.getDate()}</div>}
      </div>
      <span className="text-base">{content}</span>
    </div>
  );
};

export default Card;
