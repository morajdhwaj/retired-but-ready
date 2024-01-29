"use-client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { ImProfile } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { SiHsbc } from "react-icons/si";
import { MdOutlineJoinInner } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";

const Network = () => {
  const [connection, setConnection] = useState([]);

  useEffect(() => {
    getConnection();
  }, []);

  const getConnection = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/my-network/6593af5ef4f7ce4f923051f3",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setConnection(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log("ye connecton data h", connection);
  return (
    <div className=" ">
      <div className=" mt-52 sm:mt-5 md:mt-5 lg:mt-10 flex flex-wrap items-center justify-center mx-6 sm:justify-between md:justify-between lg:justify-between bg-scroll ">
        <div className="">
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 p-2">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs "></p>
            </div>
            <Image
              src="/assets/antina.png"
              className=" mx-4 mt-1 "
              alt="antina"
              width={40}
              height={40}
            />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> GPS location
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <ImProfile className=" mx-8 mt-3 size-8 fill-pink-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Profile
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <FaGlobe className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my <br />
            Connectios
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Hiring
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-orange-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Work experience
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <IoPeopleSharp className=" mx-8 mt-3 size-8 fill-green-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> best matches
          </h1>
        </div>
      </div>
      <h1 className="mt-5 text-[#773fc6] font-medium text-sm">
        RetPro's (123456)already in my network
      </h1>
      <div className=" border border-[#9079af] w-[60%] h-0.5" />

      {connection.map((currentElem, key) => (
        <div className="  gap-5 mt-5">
          <div className="border border-gray-300 rounded-md" key={key}>
            <div className=" bg-[#B3CEE2] ">
              <IoMdCloseCircle className="size-8 mx-40  md:mx-24 lg:mx-36" />

              <div className="flex items-center justify-center pb-4">
                {currentElem.from_user_image && (
                  <Image
                    src={currentElem.from_user_image}
                    width={40}
                    height={40}
                    alt="pic"
                    className=" w-24  h-24 rounded-full border-2   border-gray-200 "
                  />
                )}
              </div>
            </div>
            <h1 className="mt-5 flex items-center justify-center font-sans text-xl">
              {currentElem.from_user_full_name}
            </h1>
            <p className="  text-center text-xs mt-1 text-gray-500">
              {currentElem.from_user_full_name}
            </p>
            <p className=" text-center text-sm text-gray-500"> text of the</p>
            <div className="flex  flex-wrap  justify-center items-center gap-2 mt-2">
              <SiHsbc className="fill-red-600 size-8" />
              <h1>HSBC</h1>
            </div>
            <div className="flex justify-center items-center mt-2 gap-1">
              <MdOutlineJoinInner className="text-gray-700" />
              <h1 className="text-gray-500 text-sm font-medium ">
                19 connections
              </h1>
            </div>
            <div className="flex flex-wrap sm:flex md:flex  justify-center gap-0 sm:gap-2 md:gap-2 lg:gap-2 items-center mt-2 mb-4 ">
              <button className=" p-2  px-2 md:px-6  border-2 rounded-md border-[#773fc6]">
                <h1 className="text-[#773fc6] font-medium">Message</h1>
              </button>
              <BsThreeDots className="text-gray-600 size-5" />
            </div>
          </div>
        </div>
      ))}

      <div className="mt-2 ">
        <h1 className="flex justify-center items-center text-[#773fc6] font-medium">
          see all
        </h1>
      </div>
    </div>
  );
};

export default Network;
