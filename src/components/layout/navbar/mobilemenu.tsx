"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div>
      <div className="font-medium text-2xl">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
        />
      </div>

      {isOpenMenu && (
        <div className="lg:hidden flex flex-col fixed h-screen w-[80vw]  bg-white z-20 top-0 left-0">
          <div className="ml-auto p-5 text-lg">
            <FontAwesomeIcon
              icon={faX}
              onClick={() => {
                setIsOpenMenu(false);
              }}
            />
          </div>

          <div className="flex flex-col gap-5 pl-5  justify-center">
            <Link href={"/"}>
              <span className="text-slate-950">Home</span>
            </Link>
            <Link href={"/stockmarket"}>
              <span>Stock</span>
            </Link>
            <Link href={"/tecnology"}>
              <span>Tecnology</span>
            </Link>
            <Link href={"/politics"}>
              <span>Politics</span>
            </Link>
            <Link href={"/automobile"}>
              <span>Automobile</span>
            </Link>
            <Link href={"/health"}>
              <span>Health</span>
            </Link>
            <Link href={"/interactivesession"}>
              <span> Sessions</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
