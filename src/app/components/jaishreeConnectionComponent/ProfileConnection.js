import React from "react";
import Image from "next/image";

import { IoMdCloseCircle } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";

const ProfileConnection = () => {
  const gpsData = [
    {
      name: "Moraj",
      position: "One",
    },
    {
      name: "Adnan",
      position: "second",
    },
    {
      name: "Anushka",
      position: "Three",
    },
    {
      name: "Megha",
      position: "Four",
    },
    {
      name: "Jay",
      position: "Five",
    },
    {
      name: "Abhishek",
      position: "Six",
    },
    {
      name: "Aman",
      position: "SubmitEvent",
    },
    {
      name: "Yaseen",
      position: "Eight",
    },
  ];
  return (
    <div>
      <h1 className="mt-5 text-black font-medium text-sm">
        Based on my Profile
      </h1>
      <div className=" border border-[#D9D9D9] w-[15%] h-0.3 mt-2" />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-y-14 gap-x-16">
        {gpsData.map((cardElem, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-lg rounded-lg"
          >
            <div className="bg-[#B3CEE2] h-20">
              <div className="flex justify-end">
                <IoMdCloseCircle className="size-6" />
              </div>

              <div className="flex items-center justify-center pt-2">
                <Image
                  src="/assets/Business-1.png"
                  width={40}
                  height={40}
                  alt="pic"
                  className="w-24 h-24 rounded-full border-2 border-gray-200"
                />
              </div>
            </div>

            <h1 className="mt-10 flex items-center justify-center font-sans text-xl">
              {cardElem.name}
            </h1>

            <p className="text-center text-xs mt-2 text-gray-500">
              {cardElem.position}
            </p>
            <p className="text-center text-sm text-gray-500">text of the</p>

            <div className="flex justify-center items-center mt-4 gap-1">
              <h1 className="text-gray-500 text-sm font-medium">
                19 connections
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-0 sm:gap-2 md:gap-2 lg:gap-2 items-center mt-2 mb-4">
              <button
                className={`p-2 flex px-2 md:px-6 gap-2 border-2 rounded-md border-[#773fc6]`}
              >
                <MdPersonAddAlt1 className="text-md mt-1" />
                <span className="text-black font-medium">Connect</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileConnection;
