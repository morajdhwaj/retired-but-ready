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
import GpsConnection from "./GpsConnection";
import ProfileConnection from "./ProfileConnection";
import WorkConnection from "./WorkConnection";
import HiringConnection from "../anushkaConnectionComponent/HiringConnection";
import BestConnection from "../anushkaConnectionComponent/BestConnection";
import MyConnection from "./MyConnection";
import Request from "../connection-page-compo/Request";
import axios from "axios";

const Suggestion = () => {
  const [activePage, setActivePage] = useState([null]);
  const [suggestionData, setSuggestionData] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getSuggestions();
  }, [userId]);

  const getSuggestions = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/network/suggestions?user_id=${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSuggestionData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(userId, "usedId");
  console.log(suggestionData, "suggestion ka data");
  const handleToggle = (index) => {
    setSuggestionData([]);
    activePage === index ? setActivePage(0) : setActivePage(index);
  };

  return (
    <div className=" ">
      <Request />
      <div className=" mt-52 sm:mt-5 md:mt-5 lg:mt-10 flex flex-wrap items-center justify-center gap-5 sm:justify-between md:justify-between lg:justify-between bg-scroll ">
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(1)}
        >
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 p-2">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
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

        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(2)}
        >
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                14k+
              </p>
            </div>
            <ImProfile className=" mx-8 mt-3 size-8 fill-pink-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Profile
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(3)}
        >
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                16k+
              </p>
            </div>
            <FaGlobe className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my <br />
            Connectios
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(4)}
        >
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Hiring
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(5)}
        >
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border  border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-orange-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Work experience
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(6)}
        >
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                20k+
              </p>
            </div>
            <IoPeopleSharp className=" mx-8 mt-3 size-8 fill-green-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> best matches
          </h1>
        </div>
      </div>
      <h1 className="mt-5 text-[#773fc6] font-medium text-sm">Suggestion...</h1>
      <div className=" border border-[#9079af] w-[60%] h-0.5" />
      {activePage === 1 && <GpsConnection />}
      {activePage === 2 && <ProfileConnection />}
      {activePage === 3 && <MyConnection />}
      {activePage === 4 && <HiringConnection />}
      {activePage === 5 && <WorkConnection />}
      {activePage === 6 && <BestConnection />}

      <div className="grid grid-col-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-2 ">
        {suggestionData.map((cardElem, index) => (
          <div className="border border-gray-300  rounded-md" key={index}>
            <div className=" bg-[#B3CEE2]   ">
              <div className="flex justify-end mt-2 mx-2">
                <IoMdCloseCircle className="size-8 " />
              </div>

              <div className="flex items-center justify-center pb-4">
                <Image
                  src={
                    cardElem.user_image
                      ? cardElem.user_image
                      : "/assets/Ellipse-39.png"
                  }
                  width={40}
                  height={40}
                  alt="pic"
                  className=" w-24  h-24 rounded-full border-2   border-gray-200 "
                />
              </div>
            </div>
            <h1 className="mt-5 flex items-center justify-center font-sans text-xl">
              {cardElem.user_display_name}
            </h1>
            <p className="  text-center text-xs mt-1 text-gray-500">postion</p>
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
        ))}
      </div>

      <div className="mt-2 ">
        <h1 className="flex justify-center items-center text-[#773fc6] font-medium">
          see all
        </h1>
      </div>
    </div>
  );
};

export default Suggestion;
