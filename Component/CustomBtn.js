import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Playwrite_AU_QLD, Winky_Rough } from "next/font/google";
const play = Winky_Rough({
  subsets: ["latin"],
  weight: ["300", "900"],
});
export default function CustomBtn() {
  return (
    <div className=" flex justify-center items-center ">
      <div
        className={` ${play.className} group hover:bg-[#0d0d0d] hover:shadow-[0px_0px_35px_15px_rgba(59,_130,_246,_0.5)] mb-4 shadow-blue-500/20 transition-colors duration-1000 ease-in-out flex flex-col justify-center leading-0 items-center bg-white text-black py-4 px-10 text-2xl font-[600] rounded-full cursor-pointer`}
      >
        <div className=" flex gap-4 justify-center translate-y-3 items-center group-hover:rotate-x-90 group-hover:translate-y-0 transition-all duration-700 ease-in-out ">
          Let's Connect
          <span className="">
            <FaArrowUpLong className=" rotate-90  " />
          </span>
        </div>
        <div className=" rotate-x-90 flex gap-4 text-white justify-center items-center group-hover:-translate-y-3 group-hover:rotate-x-0 transition-all duration-700 ease-in-out ">
          Let's Connect
          <span className="">
            <FaArrowUpLong className=" rotate-90" />
          </span>
        </div>
      </div>
    </div>
  );
}
