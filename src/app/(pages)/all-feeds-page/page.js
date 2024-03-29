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
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { UserIdContext } from "@/context/UserIdContext";
import { useRouter } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
// import NextNProgress from "nextjs-progressbar";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [feeds, setFeeds] = useState([]);
  const [tab, setTab] = useState(1);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [addPost, setAddPost] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUserId(userIdFromContext);
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
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  console.log(userData, "this is for search user id");
  console.log(userData, "userData");

  return (
    <div className="bg-[#e8e9e8]  min-h-[100vh]  sm:px-5 md:px-10 ">
      <Navbar />

      {/* <NextNProgress options={{ easing: "ease", speed: 500 }} /> */}
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-60 lg:mr-32 xl:mx-60 pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%]   pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 sm:flex-row py-5 justify-between rounded-xl px-5 ">
                <Link href={`/profile/${userId}`}>
                  <div className="flex items-center justify-center gap-2">
                    {userData?.user_image ? (
                      <Image
                        alt="rtr-pic"
                        src={userData?.user_image}
                        height={50}
                        width={50}
                        className="w-20 h-20 rounded-full border-2 border-gray-200"
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
                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5 mr-4">
                  <button
                    onClick={() => setAddPost(!addPost)}
                    className="flex shadow-lg items-center gap-1 py-2 px-4 bg-white rounded-md  font-medium  hover:border-opacity-100  border-opacity-0 border border-[#773fc6]  "
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
              <h2 className="font-semibold text-2xl">All Feeds</h2>
            </div>
          </div>
          {addPost && (
            <div className="mt-44 sm:mt-32 md:mt-20 md:mx-20   ">
              <PostInput
                feeds={feeds}
                userData={userData}
                setFeeds={setFeeds}
                getFeeds={getFeeds}
                userId={userId}
              />
            </div>
          )}

          <div
            className={`${
              !addPost && "mt-44 sm:mt-32 md:my-20"
            } sm:mx-10 md:mx-20 xl:mx-28 mt-5`}
          >
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
                  setAddPost={setAddPost}
                  addPost={addPost}
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
