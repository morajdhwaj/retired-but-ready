"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import Network from "@/app/components/jaishreeConnectionComponent/Network";
import { FaUserCircle } from "react-icons/fa";

import ContactPage from "@/app/components/contact-component/ContactPage";
import FollowingPage from "@/app/components/contact-component/FollowingPage";
import FollowersPage from "@/app/components/contact-component/FollowersPage";
import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  const [toggle, setToggle] = useState(1);

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
                        className="w-20 h-20 rounded-full border-2 border-gray-200"
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

          <div className="  mt-36 sm:mt-32 md:mt-36 lg:mt-40 ">
            <div className="flex  text-black border-b-2 w-full sm:w-[40%] relative">
              <div
                onClick={() => setToggle(1)}
                className={`border-b-2  text-xs sm:text-sm font-medium absolute bottom-[-2px]  ${
                  toggle === 1
                    ? "border-[#A8359C] text-[#A8359C]"
                    : "border-[#D1C9C9]"
                } `}
              >
                Contact
              </div>
              <div
                onClick={() => setToggle(3)}
                className={`border-b-2  text-xs sm:text-sm font-medium absolute bottom-[-2px] left-[35%]  sm:left-[30%]  ${
                  toggle === 3
                    ? "border-[#A8359C] text-[#A8359C]"
                    : "border-gray-200"
                } `}
              >
                Followers
              </div>
              <div
                onClick={() => setToggle(2)}
                className={`border-b-2 text-xs sm:text-sm font-medium absolute bottom-[-2px]  left-[70%] sm:left-[60%]  ${
                  toggle === 2
                    ? "border-[#A8359C] text-[#A8359C]"
                    : "border-gray-200" - []
                } `}
              >
                Following
              </div>
            </div>
            <div className="">
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
