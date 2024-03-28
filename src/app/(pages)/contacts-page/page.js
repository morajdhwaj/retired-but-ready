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
  }, [userIdFromContext]);

  useEffect(() => {
    if (userId) {
      getUserData();
    }
  }, [userId]);

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data, "this is data from get user data");
        setUserData(response?.data);
        // setCompanyName(response?.data?.work_history[0].company_name);
        // setTitle(response?.data?.work_history[0].title);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(userData, "userId");

  return (
    <div className="min-h-[100vh]">
      <Navbar />

      <div className="bg-[#e8e9e8] min-h-[100vh] p-8 sm:p-10 ">
        <div className="hidden lg:flex  ">
          <Sidebar />
        </div>
        <div className="  lg:ml-52  bg-[#F2F2F2] min-h-[80vh] rounded  mt-20 p-10">
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
            >
              <h2 className="font-semibold text-2xl">My Contacts</h2>
            </div>
          </div>

          <div className="  w-full ">
          <div className="  mt-36 sm:mt-32 md:mt-36 lg:mt-40 flex gap-3 sm:gap-10  w-full sm:w-[63%] md:w-[46%] xl:w-[27%] border-b-2 border-gray-200 ">
              <div
                onClick={() => setToggle(1)}
                className={`  text-md  bottom-[-2px]  font-semibold text-center pb-1 cursor-pointer ${
                  toggle === 1 &&  " border-b-[3.5px] border-[#773fc6] text-[#773fc6]"
                } `}
              >
                Contact
              </div>
              <div
                onClick={() => setToggle(3)}
                className={`  text-md  font-semibold  bottom-[-2px] text-center cursor-pointer ${
                  toggle === 3 && " border-b-[3.5px] border-[#773fc6] text-[#773fc6]"
                } `}
              >
                Followers
              </div>
              <div
                onClick={() => setToggle(2)}
                className={` text-md font-semibold  bottom-[-2px]   text-center cursor-pointer ${
                  toggle === 2 && " border-b-[3.5px] border-[#773fc6] text-[#773fc6]"
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
