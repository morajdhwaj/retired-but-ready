"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import Suggestion from "@/app/components/jaishreeConnectionComponent/Suggestion";

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
    <div className=" w-full">
      <Navbar />
      <div className="flex bg-[#B1B0B1] ">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full p-5 lg:ml-52 pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute  w-full   p-5  pt-24 ">
              <div className="   bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex items-center justify-center gap-2">
                  {/* <Image alt="" src="/assets/110.png" height={50} width={50} /> */}
                  {userData.user_image ? (
                    <Image
                      src={userData.user_image}
                      width={40}
                      height={40}
                      alt="pic"
                      className="w-20 h-20 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle className="w-20 h-20 rounded-full border-2 border-gray-200 fill-gray-400" />
                  )}
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Link
                    href="/contacts-page"
                    className="flex items-center  px-4 py-2 bg-white rounded-lg "
                  >
                    <p>Contacts</p>
                  </Link>
                  <Link
                    href="/followers-page"
                    className="flex items-center  px-4 py-2 bg-white rounded-lg "
                  >
                    <p>Followers</p>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('/assets/Background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "96%",
                // full screen width
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
          <div className="flex items-center justify-center">
            <div className=" bg-[#FFFFFF] mt-40 sm:mt-32 md:mt-20 w-[96%]  p-10  rounded-md">
              {<Suggestion />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
