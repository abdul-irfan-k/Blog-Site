import React from "react";
import Card from "../card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  imageUrl: string;
  category: string;
  title: string;
  content: string;
  author?: string;
  date?: Date;
}
interface CardRowContainerProps {
  category: string;
  cardRowData: CardProps[];
}

const CardRowContainer = ({ category, cardRowData }: CardRowContainerProps) => {
  const a = ["", "", ""];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center text-4xl font-bold">
        <div>{category}</div>
        <div className="text-xl font-normal">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="relative md:grid-cols-3 sm:grid-cols-2  grid grid-cols-1  gap-5">
        {cardRowData.map((elm) => {
          return (
            <Card {...elm} />
          );
        })}
      </div>
    </div>
  );
};

export default CardRowContainer;
