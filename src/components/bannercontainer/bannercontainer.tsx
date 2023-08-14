import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Banner from "../banner/banner";

interface Banner {
  category: string;
  imageUrl: string;
  title: string;
  date?: Date;
}
interface BannerContainerProps {
  BannersTitle: string;
  BannersData: Banner[];
}
const BannerContainer = ({ BannersTitle ,BannersData}: BannerContainerProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center text-4xl font-bold">
        <div>{BannersTitle}</div>
        <div className="text-xl font-normal">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className="relative grid md:grid-cols-2 md:gap-0 md:gap-y-5  grid-cols-1 flex-col  gap-5">
        {BannersData.map((elm) => {
          return (
            <Banner {...elm} />
          );
        })}
      </div>
    </div>
  );
};

export default BannerContainer;
