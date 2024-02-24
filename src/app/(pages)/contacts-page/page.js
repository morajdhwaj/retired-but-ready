"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import Network from "@/app/components/jaishreeConnectionComponent/Network";
import Suggestion from "@/app/components/jaishreeConnectionComponent/Suggestion";
// import GpsConnection from "@/app/components/jaishreeConnectionComponent/GpsConnection";
// import MyConnection from "@/app/components/jaishreeConnectionComponent/MyConnection";
// import ProfileConnection from "@/app/components/jaishreeConnectionComponent/ProfileConnection";
// import Main from "@/app/components/jaishreeConnectionComponent/Main";
// import WorkConnection from "@/app/components/jaishreeConnectionComponent/WorkConnection";

const page = () => {
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");

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

  console.log(userData, "userId");

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>

        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%]   pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex items-center justify-center gap-2">
                  <Image alt="" src="/assets/110.png" height={50} width={50} />
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
                </div>
                <div className="flex justify-center sm:flex md:flex   lg:flex flex-wrap gap-2">
                  <Link
                    href="/suggestion-page"
                    className="flex items-center  p-1 bg-white rounded-lg "
                  >
                    <h1> SUGGESTION</h1>
                  </Link>
                  <Link
                    href="/followers-page"
                    className="flex items-center p-1 bg-white rounded-lg"
                  >
                    <h1> FOLLOWERS</h1>
                  </Link>
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
              <span className="text-sm font-normal">
                profile
                <br /> Overview
              </span>
            </div>
          </div>
          <div className="  mt-44 sm:mt-32 md:mt-20 mx-5 ">
            <div>
              <Network />
              {/* <Suggestion /> */}
              {/*  <GpsConnection /> */}
              {/* <MyConnection /> */}
              {/* <ProfileConnection /> */}
              {/* <WorkConnection />  */}
              {/* <Main /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;