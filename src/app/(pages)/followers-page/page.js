"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaBox } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import Link from "next/link";

// import FollowOne from "@/app/components/followers/FollowOne";
// import FollowTwo from "@/app/components/followers/FollowTwo";
// import FollowThree from "@/app/components/followers/FollowThree";
// import FollowFour from "@/app/components/followers/FollowFour";
// import FollowFive from "@/app/components/followers/FollowFive";
// import FollowSix from "@/app/components/followers/FollowSix";

const page = () => {
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  const [followers, setFollower] = useState([]);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getUserData();
    getFollowers();
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

  // Follower

  const getFollowers = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-followers/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setFollower(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(followers, "Ye followers ka data");

  console.log(userId, "userId");
  console.log(userData, "userData");
  console.log(followers, "userData");

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
                <div className="flex gap-5">
                  <Link href="/followers-page">
                    <h1> FOLLOWERS</h1>
                  </Link>
                  <Link href="/suggestion-page">
                    <h1> SUGGESTION</h1>
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
              <h1 className="font-semi-bold text-lg">Followers</h1>
              {followers.map((curelem, key) => {
                return (
                  <div>
                    <div className="mt-2 flex  justify-between" key={key}>
                      <div className=" flex  ">
                        <div>
                          <Image
                            alt=""
                            src="/assets/110.png"
                            height={50}
                            width={50}
                          />
                        </div>
                        <div className="lg:mx-1 ">
                          <h1 className="text-[#8942a1b1] font-bold">
                            {curelem.from_user_full_name}
                          </h1>
                          <p>Post name</p>

                          <p>Connected today</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="border-2 border-black h-10 p-1 rounded-full ">
                          Remove
                        </button>
                        <IoIosSend className="mt-3 font-[20px]" />
                      </div>
                    </div>
                    <div className="w-full h-0.5 border border-gray-200 mt-5" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
