"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import All from "@/app/components/wallsComponents/All";
import Trending from "@/app/components/wallsComponents/Trending";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import PostInput from "@/app/components/post-components/PostInput";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { UserIdContext } from "@/context/UserIdContext";
import { IoIosAddCircleOutline } from "react-icons/io";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [myFeeds, setMyFeeds] = useState([]);
  const [tab, setTab] = useState(1);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [addPost, setAddPost] = useState(false);

  useEffect(() => {
    setUserId(userIdFromContext);
    getUserData();
    getMyFeeds();
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

  const getMyFeeds = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/post/user/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMyFeeds(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleToggle = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  if (userData.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  console.log(userData, "userData");

  return (
    <div className="bg-[#EDEBF2] min-h-[100vh]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:mx-60 pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%]   pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <Link href={`/profile/${userId}`}>
                  <div className="flex items-center justify-center gap-2">
                    {userData?.user_image ? (
                      <Image
                        alt="rtr-pic"
                        src={userData?.user_image}
                        height={50}
                        width={50}
                      />
                    ) : (
                      <FaUserCircle color="gray" size={50} />
                    )}
                    <div className="font-semibold">
                      <h2>{userData.user_display_name}</h2>
                      <p className="text-gray-500">
                        {userData.last_designation}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5">
                  <button
                    onClick={() => setAddPost(!addPost)}
                    className="flex items-center gap-1 py-2 shadow-lg px-4 bg-white rounded-md  font-medium  hover:border-opacity-100  border-opacity-0 border border-[#773fc6]  "
                  >
                    <IoIosAddCircleOutline size={20} className="mr-1" />
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
              <h2 className="font-semibold text-2xl">My Wall</h2>
            </div>
          </div>
          {addPost && (
            <div className="mt-44 sm:mt-32 md:mt-20">
              <PostInput
                feeds={myFeeds}
                userData={userData}
                setFeeds={setMyFeeds}
                getFeeds={getMyFeeds}
                userId={userId}
              />
            </div>
          )}

          <div className={`${!addPost && "mt-44 sm:mt-32 md:mt-20"} mx-5 `}>
            <All
              feeds={myFeeds}
              setFeeds={setMyFeeds}
              getFeeds={getMyFeeds}
              userId={userId}
              addPost={addPost}
              setAddPost={setAddPost}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
