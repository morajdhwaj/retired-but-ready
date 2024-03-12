"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const router = useRouter();

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

  const handleLogOut = () => {
    // localStorage.removeItem("userId");
    router.push("login");
  };

  console.log(userId, "ddd");
  return (
    <div className="flex bg-[#E5E2E5]  fixed top-0 left-0 bottom-0 w-full h-20 z-50 items-center px-5 md:px-10 ">
      <div className="w-1/2 flex text-xs justify-between ">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              alt="logo"
              src="/assets/RBRLogo1.png"
              width={70}
              height={70}
            />
          </Link>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex lg:hidden h-full w-full"
          >
            <GiHamburgerMenu size={25} />
          </button>
        </div>
        <div className="  gap-1 hidden lg:flex  ">
          <Link href="/profile-setup">Profile-setup</Link>
          <Link href="/profile-details">Profile</Link>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end gap-2 md:gap-16">
        <div className="flex gap-2">
          <input
            placeholder="Looking for..."
            className="bg-gray-200 border border-purple-300 text-xs md:text-sm rounded-lg px-2 py-2 w-20 md:w-60  "
          />
          <button className="  font-semibold">Search</button>
        </div>
        <select className="bg-[#EDEBF2] font-semibold ">
          <option>EN</option>
          <option>HI</option>
        </select>

        {userId ? (
          <button
            onClick={handleLogOut}
            className="bg-purple-200 px-2  py-1 md:px-4 md:py-2  rounded-lg text-[#773fc6] "
          >
            Log out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link
              href="/login"
              className="bg-purple-200 px-2  py-1 md:px-4 md:py-2  rounded-lg text-[#773fc6] "
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-purple-200 px-2  py-1 md:px-4 md:py-2  rounded-lg text-[#773fc6] "
            >
              Register
            </Link>
          </div>
        )}
      </div>
      {showSidebar && <Sidebar />}
    </div>
  );
};

export default Navbar;
