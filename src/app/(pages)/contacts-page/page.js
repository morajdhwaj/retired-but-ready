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

import ContactPage from "@/app/components/contact-component/ContactPage";
import FollowingPage from "@/app/components/contact-component/FollowingPage";
import FollowersPage from "@/app/components/contact-component/FollowersPage";

const page = () => {
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  const [toggle, setToggle] = useState(1);

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
    <div className="h-[100vh]">
      <Navbar />
      <div className="bg-[#B0B0B1] p-10 ">
        <div className="hidden lg:flex  ">
          <Sidebar />
        </div>
        <div className="  lg:ml-52  bg-[#F2F2F2] rounded  mt-20 p-10">
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
            ></div>
          </div>

          <div className=" mt-36 sm:mt-32 md:mt-36 lg:36  ">
            <div className="flex w-3/4 text-black">
              <div
                onClick={() => setToggle(1)}
                className={`border-b-2 w-1/2 text-md font-medium   ${
                  toggle === 1
                    ? "border-[#A8359C] text-[#A8359C]"
                    : "border-[#D1C9C9]"
                } `}
              >
                Contact
              </div>
              <div
                onClick={() => setToggle(2)}
                className={`border-b-2 w-1/2 text-md font-medium  ${
                  toggle === 2
                    ? "border-[#A8359C] text-[#A8359C]"
                    : "border-gray-200"
                } `}
              >
                Following
              </div>
              <div
                onClick={() => setToggle(3)}
                className={`border-b-2  w-1/2 text-md font-medium   ${
                  toggle === 3
                    ? "border-[#A8359C] text-[#A8359C]"
                    : "border-gray-200"
                } `}
              >
                Followers
              </div>
            </div>
            <div className=" p-5">
              {toggle === 1 && <ContactPage />}
              {toggle === 2 && <FollowingPage />}
              {toggle === 3 && <FollowersPage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
