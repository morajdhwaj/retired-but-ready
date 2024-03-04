"use client";
import Navbar from "@/app/components/Navbar";
import PopUp from "@/app/components/PopUp";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleModal = () => {
    setShowModal(true);
    showModal &&
      router.push(
        userData.english_proficiency ? "walls-page" : "/profile-setup"
      );
  };

  const getUserData = (userId) => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data);
        setUserData(response?.data);
        setDisplayName(response?.data?.user_display_name);
        setFirstName(response?.data?.user_first_name);
        setLastName(response?.data?.user_last_name);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/user/login",
      headers: { "Content-Type": "application/json" },
      data: { user_email: email, user_password: password },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("userId", response?.data?.user_id);
        if (response.data.redirect === "verification") {
          router.push("verification-email");
        } else {
          router.push("walls-page");
        }
        getUserData(response?.data?.user_id);
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail || "Something wrong");
      });
  };

  console.log(userData);

  return (
    <div className="  bg-gray-200 h-[100vh]  ">
      <Navbar />
      {/* Image */}

      <div className="  lg:flex pt-20 ">
        <div className="  lg:flex flex-col gap-3 mx-3 lg:w-1/2 ">
          <div className=" h-auto mt-5 rounded-md lg:p-5 border-transparent flex justify-center border-2  hover:w-auto hover:border-2   ">
            <Image
              src="/assets/Group-626217.png"
              alt="login"
              width={300}
              height={300}
            />
          </div>

          {/* Logo Image */}
          <div className="  h-auto sm:mt-5 rounded-md p-5 border-transparent flex flex-col justify-center gap-5 border-2 hover:w-auto hover:border-2  mb-2 sm:mb-3 md:mb-0 lg:mb-36">
            <div className="flex items-center justify-center gap-2">
              <div className=" w-[70px] sm:w-[100px] h-[1px] bg-gray-500" />

              <h1 className="font-normal"> or login through</h1>
              <div className=" w-[70px] sm:w-[100px] h-[1px] bg-gray-500" />
            </div>
            <div className="flex  gap-3 items-center justify-center ">
              <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg  w-[120px] sm:w-[170px] ">
                <button>
                  <Image
                    src="/assets/GOOGLE.png"
                    alt="Google"
                    width={30}
                    height={30}
                    className=" bg-gray-200"
                  />
                </button>
                <h3 className="font-bold text-sm sm:text-xl">Google</h3>
              </div>
              <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg  w-[120px] sm:w-[170px] ">
                <button className="">
                  <Image
                    src="/assets/facebook.png"
                    alt="Facebook"
                    width={30}
                    height={30}
                    className=" bg-gray-200"
                  />
                </button>
                <h3 className="font-bold text-sm sm:text-xl">Facebook</h3>
              </div>
            </div>
            <div className="flex  justify-center gap-3 ">
              <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg  w-[120px] sm:w-[170px] ">
                <button className="">
                  <Image
                    src="/assets/mobile-phone-svgrepo-com-1.png"
                    alt="Mobile"
                    width={20}
                    height={20}
                    className="w-[30px] "
                  />
                </button>
                <h3 className="font-bold text-sm sm:text-xl">Mobile</h3>
              </div>
              <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg  w-[120px] sm:w-[170px] py-1">
                <button>
                  <Image
                    src="/assets/EMAIL.png"
                    alt="Email"
                    width={30}
                    height={30}
                  />
                </button>
                <h3 className="font-bold text-sm sm:text-xl">Email</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Login form */}

        <div className=" w-full lg:w-1/2 text-center flex flex-col  items-center  ">
          <h1 className=" text-3xl font-bold text-center  lg:mt-24">Login</h1>

          <div className="    rounded-md  p-5  border-2 border-gray-300 flex flex-col mt-5 sm:mt-10 gap-5  hover:border-2 ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
              className="mt-5  w-60 sm:w-80  border-2 rounded-md bg-gray-200 border-gray-300 p-1 flex items-center hover:border-2  hover:border-b-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-60 sm:w-80  border-2  bg-gray-200 border-gray-300 p-1 flex items-center rounded-md hover:border-2  hover:border-b-2 "
            />
            <div className="text-start">
              <Link
                href="/forgot-password"
                className="mb-0 hover:border-b-2   hover:w-40"
              >
                Forget password ?
              </Link>
            </div>
            <button
              onClick={handleLogin}
              className="border-2 bg-[#773FC6] rounded-lg p-2 w-60 sm:w-80  text-xl text-center  text-white flex justify-center items-center"
            >
              Login
            </button>
          </div>
          <div className="   mt-5 text-center flex justify-center ">
            <h3>Don't have an account ? &nbsp; </h3>
            <Link href="/register" className="text-red-400">
              Create one
            </Link>
          </div>
        </div>
        {/* {showModal && (
          <PopUp
            onClick={handleModal}
            title="Logged in , lets build your profile now"
            action="Enter Profile details"
            message=" To allow JunPros to find you and to connect with fellow RetPros, a profile that display your information is important"
          />
        )} */}
      </div>
    </div>
  );
};

export default page;
