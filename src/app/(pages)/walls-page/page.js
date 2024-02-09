"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import All from "@/app/components/wallsComponents/All";
import Trending from "@/app/components/wallsComponents/Trending";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiFillTool } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox, FaUserCircle } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import axios from "axios";
import PostInput from "@/app/components/post-components/PostInput";
import toast from "react-hot-toast";

const page = () => {
  const [feeds, setFeeds] = useState([]);
  const [tab, setTab] = useState(1);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [addPost, setAddPost] = useState(false);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getUserData();
    getFeeds();
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

  const getFeeds = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-feed/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setFeeds(response?.data);
      })
      .catch(function (error) {
        console.error(error);
        // toast.error(error?.response?.data?.detail);
      });
  };

  const handleToggle = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  if (userData.length === 0) {
    return <h1 className="mx-5">Loading...</h1>;
  }

  console.log(userData, "userId");

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:mx-60 pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%]   pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex items-center justify-center gap-2">
                  {userData?.user_image ? (
                    <Image
                      alt=""
                      src={userData?.user_image}
                      height={50}
                      width={50}
                    />
                  ) : (
                    <FaUserCircle size={50} />
                  )}
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
                </div>
                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5">
                  <button
                    onClick={() => setAddPost(!addPost)}
                    className="flex items-center gap-1 p-2 bg-white rounded-lg hover:bg-gray-100"
                  >
                    <FaBox size={10} />
                    Add Post
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
          {addPost && (
            <div className="mt-44 sm:mt-32 md:mt-20">
              <PostInput
                feeds={feeds}
                userData={userData}
                setFeeds={setFeeds}
                getFeeds={getFeeds}
                userId={userId}
              />
            </div>
          )}

          <div className={`${!addPost && "mt-44 sm:mt-32 md:mt-20"} mx-5 `}>
            <div className="flex justify-between w-full text-gray-500">
              <button
                onClick={() => setTab(1)}
                className={`border-b-4 w-1/2 text-sm md:text-xl font-medium p-2  ${
                  tab === 1
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "border-gray-200"
                } `}
              >
                All
              </button>
              <button
                onClick={() => setTab(2)}
                className={`border-b-4  text-sm md:text-xl font-medium w-1/2 p-2 ${
                  tab === 2
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "border-gray-200"
                } `}
              >
                <span className="text-red-500">Trending</span> News
              </button>
              {/* <button
                onClick={() => setTab(3)}
                className={`border-b-4  text-sm md:text-xl font-medium w-1/3 p-2 ${
                  tab === 3
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "border-gray-200"
                } `}
              >
                Surprise Me!
              </button> */}
            </div>

            {tab === 1 && (
              <div>
                <All
                  feeds={feeds}
                  setFeeds={setFeeds}
                  getFeeds={getFeeds}
                  userId={userId}
                />
              </div>
            )}
            {tab === 2 && <Trending />}
            {/* {tab === 3 && <div>Tab3</div>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
