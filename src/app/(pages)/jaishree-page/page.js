"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
// import All from "@/app/components/wallsComponents/All";
// import Reaction from "@/app/components/jaishreeComponent/Reaction";
// import  Message  from "@/app/components/jaishreeComponent/Message";
import Comments from "@/app/components/jaishreeComponent/Comments";
// import Details from "@/app/components/jaishreeComponent/Details";
//import Postpage from "@/app/components/jaishreeComponent/Postpage";
// import Connection from "@/app/components/jaishreeComponent/Connection";
//import Report from "@/app/components/jaishreeComponent/Report";
//import Share from "@/app/components/jaishreeComponent/Share";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiFillTool } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import axios from "axios";

const page = () => {
  const [tab, setTab] = useState(1);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getUserData();
  }, [userId]);

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data);
        setUserData(response?.data);
        setCompanyName(response?.data?.work_history[0].company_name);
        setTitle(response?.data?.work_history[0].title);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleToggle = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  if (userData.length === 0) {
    return <h1 className="mx-5">Loading...</h1>;
  }

  console.log(userData, "userId");
  console.log(tab);

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24 ">
          <div className="relative flex  justify-center  ">
            <div className="absolute w-[96%] pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex items-center justify-center gap-2">
                  <Image alt="" src="/assets/110.png" height={50} width={50} />
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
                </div>
                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5">
                  <button className="flex items-center gap-1 p-2 bg-white rounded-lg">
                    <FaBox size={10} />
                    OVERVIEW
                  </button>
                  <button className="flex items-center gap-1 ">
                    <PiFilesFill size={15} /> TEAMS
                  </button>
                  <button className="flex items-center gap-1 ">
                    <AiFillTool size={15} />
                    PROJECTS
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('/assets/Background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%", // full screen width
                height: "20vh", // full screen height
                borderRadius: 10,
              }}
              className="text-white p-5 flex  justify-between"
            >
              <h2 className="font-semibold text-2xl">My Walls</h2>
            </div>
          </div>
          <div className="mt-20 mx-5">
            <div className="flex justify-between w-full text-gray-500"></div>
            {tab === 1 && (
              <div>
                {/* <All />   */}
                {/* <Reaction />  */}
                {/* <Message/>  */}
                <Comments />
                {/* <Details/>  */}
                {/* <Postpage /> */}
                {/* <Connection/> */}
                {/* <Report/>    */}
                {/* <Share />    */}
              </div>
            )}
            {tab === 2 && <div>Tab2</div>}
            {tab === 3 && <div>Tab3</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
