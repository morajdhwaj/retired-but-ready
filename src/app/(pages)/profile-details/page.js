"use client";

import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import ProfileDetails from "@/app/components/profile-details-compo/ProfileDetails";
import WhyRBR from "@/app/components/profile-details-compo/WhyRBR";
import SocialMedia from "@/app/components/profile-details-compo/SocialMedia";
import WorkExperience from "@/app/components/profile-details-compo/WorkExperience";
import WorkHistory from "@/app/components/profile-details-compo/WorkHistory";
import axios from "axios";
import Link from "next/link";
import Loader from "@/app/components/Loader";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";
import { UserIdContext } from "@/context/UserIdContext";

const Page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [summary, setSummary] = useState("");

  // const [selectedImage, setSelectedImage] = useState(null);

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
        console.log(response?.data, "hello im sachin");
        setUserData(response?.data);
        setSummary(response?.data?.profile_summary);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImg(file);
    }
  };

  const uploadImg = (file) => {
    const form = new FormData();
    form.append("pic_file", file, file.name);
    const options = {
      method: "POST",
      url: `https://retpro.catax.me/user/upload-profile-pic`,
      params: { user_id: userId },
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getUserData();
        setTimeout(() => {
          toast.success(response.data.message);
        }, 1000);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Failed to upload profile picture."); // Show error message using toast
        // Handle error more specifically if needed
      });
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (userData.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const updateUser = () => {
    const options = {
      method: "PUT",
      url: "https://retpro.catax.me/user/update-profile",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        profile_summary: summary,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setEdit(!edit);
        getUserData();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  console.log(userData, "userData");

  return (
    <div className="bg-[#EDEBF2] px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  sm:p-5 lg:ml-52 pt-24">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%] pt-24 mx-5">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex gap-2">
                  <div className="relative">
                    {userData?.user_image ? (
                      <Image
                        alt="user profile"
                        src={userData?.user_image}
                        height={50}
                        width={50}
                        className="w-20 h-20 rounded-full border-2 border-gray-200"
                      />
                    ) : (
                      <FaUserCircle color="gray" size={65} />
                    )}

                    <button className="right-[-10px] top-10 h-7 w-7 flex justify-center items-center absolute bg-gradient-to-b from-[#f1cbf1] to-white rounded-full">
                      <label
                        htmlFor="profile-picture"
                        className="cursor-pointer"
                      >
                        <input
                          type="file"
                          id="profile-picture"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        <FaEdit size={20} />
                      </label>
                    </button>
                  </div>
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
                </div>
                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5 ">
                  {/* <button className="flex items-center gap-1 p-2 bg-white rounded-lg">
                    <FaBox size={10} />
                    OVERVIEW
                  </button>
                  <button className="flex items-center gap-1 ">
                    <PiFilesFill size={15} /> TEAMS
                  </button>
                  <button className="flex items-center gap-1 ">
                    <AiFillTool size={15} />
                    PROJECTS
                  </button> */}
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('/assets/Background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "20vh",
                borderRadius: 10,
              }}
              className="text-white p-5 flex  justify-between"
            >
              <h2 className="font-semibold text-2xl">
                My Tabs{" "}
                <span className="text-sm font-normal">/ profile Overview</span>
              </h2>
              <p className="text-sm font-normal mt-5 hidden md:flex">
                Previewing as a visitor
              </p>
            </div>
          </div>
          <div className="mt-48 sm:mt-32 md:mt-20 mx-5 ">
            <div className="flex  gap-5 justify-end mr-5 ">
              <button onClick={() => setEdit(!edit)}>
                <FaEdit size={30} />
              </button>
              {edit && (
                <button onClick={updateUser}>
                  <h2 className="font-semibold text-[#773fc6]">Save changes</h2>
                </button>
              )}
            </div>

            {edit ? (
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 px-2 rounded mx-8  w-10/12 h-20 p-2 "
              />
            ) : (
              <p className="text-gray-500 text-lg  ml-7 leading-8">
                {userData?.profile_summary}
              </p>
            )}
          </div>
          <div className="m-10  flex flex-col gap-3">
            <div
              onClick={() => handleToggle(1)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer   flex items-center justify-between ${
                activeIndex === 1
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Personal Details</h1>
              <div className="flex">
                {activeIndex === 1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 1 && <ProfileDetails userId={userId} />}

            <div
              onClick={() => handleToggle(2)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 2
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Why are you 'Retired But Ready'?</h1>
              <div>
                {activeIndex === 2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 2 && <WhyRBR userId={userId} />}

            <div
              onClick={() => handleToggle(3)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 3
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Social Media Presence</h1>
              <div>
                {activeIndex === 3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 3 && <SocialMedia userId={userId} />}

            <div
              onClick={() => handleToggle(4)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 4
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Work Experience</h1>
              <div>
                {activeIndex === 4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 4 && <WorkExperience userId={userId} />}

            <div
              onClick={() => handleToggle(5)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 5
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Work History</h1>
              <div>
                {activeIndex === 5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 5 && <WorkHistory userId={userId} />}
          </div>
        </div>
      </div>
      <div className="flex bg-[#f2f1f3] sm:ml-36  items-center justify-center gap-10 py-10">
        <Link
          href="/login"
          className="bg-[#773fc6] text-center  p-2 text-white font-medium rounded w-40 "
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Page;
