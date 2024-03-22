"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect, useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import axios from "axios";

import Suggestion from "@/app/components/jaishreeConnectionComponent/Suggestion";
import Link from "next/link";
import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(userIdFromContext);
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
      <div className="flex bg-[#f2f1f3] ">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full p-5 lg:ml-52 pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute  w-full   p-5  pt-24 ">
              <div className="   bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <Link href={`/profile/${userId}`}>
                  <div className="flex items-center justify-center gap-2">
                    {userData.user_image ? (
                      <Image
                        src={userData.user_image}
                        width={40}
                        height={40}
                        alt="pic"
                        className="w-20 h-20 rounded-full border-2 border-gray-200"
                      />
                    ) : (
                      <FaUserCircle
                        color="gray"
                        className="w-20 h-20 rounded-full border-2 border-gray-200 "
                      />
                    )}
                    <div className="font-semibold">
                      <h2>{userData.user_display_name}</h2>
                      <p className="text-gray-500">
                        {userData.last_designation}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="flex gap-5 items-center mr-5">
                  <Link
                    href="/contacts-page"
                    className="flex items-center justify-center  h-8 bg-white rounded-lg font-semibold  p-6  hover:border-opacity-100  border-opacity-0 border-2 border-[#773fc6]  shadow-xl "
                  >
                    <p className="">Contacts</p>
                  </Link>
                  <Link
                    href="/contacts-page"
                    className="flex items-center justify-center  h-8 bg-white rounded-lg font-semibold  py-6  px-5 hover:border-opacity-100  border-opacity-0 border-2 border-[#773fc6] shadow-xl"
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
              <h2 className="font-semibold text-2xl">Connections</h2>
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
