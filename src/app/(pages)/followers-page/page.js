"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaBox } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import PopUp from "@/app/components/PopUp";
import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  const [followers, setFollower] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formUserId, setFromUserId] = useState("");

  useEffect(() => {
    setUserId(userIdFromContext);
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
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(followers, "Ye followers ka data");

  const handleDeleteModal = (from_user_id) => {
    setShowDeleteModal(!showDeleteModal);
    setFromUserId(from_user_id);
  };

  // remove followers
  const deleteFollowers = () => {
    console.log(userId, "userid");
    console.log(formUserId, "formUserId");
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/remove-follower/${userId}/${formUserId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getFollowers();
        console.log("DELETE");
        setFromUserId("");
        setShowDeleteModal(false);
      })
      .catch(function (error) {
        console.error(error);
        setShowDeleteModal(false);
      });
  };

  return (
    <div className="bg-[#EDEBF2]   min-h-[100vh] px-10 ">
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
                  <Image
                    alt="rtr-pic"
                    src="/assets/110.png"
                    height={50}
                    width={50}
                  />
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
                </div>

                <div className="flex justify-center sm:flex md:flex lg:flex gap-3 flex-wrap">
                  <Link
                    href="/suggestion-page"
                    className="flex items-center justify-center  h-8 bg-white rounded-lg font-semibold  py-6 px-4  hover:border-opacity-100  border-opacity-0 border-2 border-[#773fc6]  shadow-xl "
                  >
                    <p className="">SUGGESTION</p>
                  </Link>
                  <Link
                    href="/connections-page"
                    className="flex items-center justify-center  h-8 bg-white rounded-lg font-semibold  py-6 px-4  hover:border-opacity-100  border-opacity-0 border-2 border-[#773fc6]  shadow-xl "
                  >
                    <p className="">CONNECTION</p>
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
              <h2 className="font-semibold text-2xl">Followers</h2>
            </div>
          </div>
          <div className="  mt-44 sm:mt-32 md:mt-20 mx-5 ">
            <div>
              <h1 className="font-semi-bold text-lg mb-6">
                {followers.length} Followers
              </h1>
              {followers.map((curelem, key) => {
                return (
                  <div>
                    <div
                      className="mt-2  flex flex-col  items-center sm:flex  sm:flex-row md:flex  md:flex-row lg:flex flex-wrap justify-between "
                      key={key}
                    >
                      <div className=" flex flex-col  items-center gap-1 sm:flex  sm:flex-row sm:gap-0 md:flex  md:flex-row md:gap-0 lg:flex lg:flex-row  lg:gap-0">
                        <div>
                          <Image
                            alt="rtr-pic"
                            src="/assets/110.png"
                            height={80}
                            width={80}
                          />
                        </div>
                        <div className="mx-2  text-center sm:text-start md:text-start lg:text-start mt-2 sm:mt-0 md:mt-0 lg:mt-0">
                          <h1 className="text-[#8942a1b1] font-bold">
                            {curelem.from_user_full_name}
                          </h1>
                          <p className="text-sm sm:font-normal md:font-normal lg:font-normal">
                            Post name
                          </p>

                          <p className="text-sm sm:font-normal md:font-normal lg:font-normal">
                            Connected today
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          className="border border-[#773fc6] text-black rounded-md  text- sm:text-sm p-2 "
                          onClick={() =>
                            handleDeleteModal(curelem.from_user_id)
                          }
                        >
                          Remove
                        </button>

                        <IoIosSend className="mt-3 font-[20px]" />
                      </div>
                    </div>
                    <div className="w-full h-0.5 border border-gray-200 mt-5" />
                  </div>
                );
              })}
              {showDeleteModal && (
                <PopUp
                  close={handleDeleteModal}
                  onClick={deleteFollowers}
                  title="Are you want Remove this follower"
                  action="Delete"
                  message=""
                  error="error"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
