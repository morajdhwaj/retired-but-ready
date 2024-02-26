"use client";
import Loader from "@/app/components/Loader";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import All from "@/app/components/wallsComponents/All";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const page = ({ params }) => {
  const profileId = params["other-user"];
  const [profileData, setProfileData] = useState([]);
  const [userFeed, setUserFeed] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getUserData();
    getUserFeeds();
  }, [profileId]);

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${profileId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data);
        setProfileData(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getUserFeeds = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/post/user/${profileId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setUserFeed(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (profileData.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  console.log(profileId);

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
                  {profileData?.user_image ? (
                    <Image
                      alt=""
                      src={profileData?.user_image}
                      height={50}
                      width={50}
                    />
                  ) : (
                    <FaUserCircle size={50} />
                  )}
                  <div className="font-semibold">
                    <h2>{profileData.user_display_name}</h2>
                    <p className="text-gray-500">
                      {profileData.last_designation}
                    </p>
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
            >
              <h2 className="font-semibold text-2xl">My Walls</h2>
            </div>
          </div>

          <div className="mx-5 mt-20">
            <All
              feeds={userFeed}
              setFeeds={setUserFeed}
              getFeeds={getUserFeeds}
              // userId={userId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
