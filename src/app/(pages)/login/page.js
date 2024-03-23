"use client";
import Navbar from "@/app/components/Navbar";
import PopUp from "@/app/components/PopUp";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
  const { setUserIdContext } = useContext(UserIdContext);

  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    setLoading(true);
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

        setUserIdContext(response?.data?.user_id);

        if (response.data.redirect === "verification") {
          router.push("verification-email");
        } else {
          router.push("all-feeds-page");
        }
        getUserData(response?.data?.user_id);
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail || "Something wrong");
        setEmail("");
        setPassword("");
      });
    setLoading(false);
  };

  console.log(userData);

  return (
    <div className="  bg-gray-200  min-h-[100vh] lg:[80vh]  xl:h-[100vh]">
      <Navbar />
      {/* Image */}

      <div className="flex justify-center  lg:flex  lg:justify-start lg:items-start   h-full pt-10 lg:pt-20   lg:ml-32">
        <div className="hidden lg:flex md:flex-col   ">
          <div className=" flex justify-center items-center mt-16">
            <Image
              alt="register"
              src="/assets/Group-626217.png"
              width={500}
              height={300}
              className="lg:w-[540px] lg:h-[540px]"
            />
          </div>
        </div>
        {/* Login form */}

        <div className=" xl:w-1/2    lg:flex lg:flex-col lg:justify-start lg:items-start  lg:ml-28 xl:ml-36   pt-16 ">
          <div className="rounded-md   lg:w-[90%]  ">
            <h1 className=" text-2xl md:text-3xl  xl:text-4xl font-bold lg:mt-10 text-center lg:text-start  ">
              Login in to your account
            </h1>
            <div>
              <p className="text-xs mt-2 text-gray-500 text-center lg:text-start ">
                Welcome back! Select method log in:
              </p>
            </div>
            <div className="mt-5  flex justify-center items-center lg:justify-start lg:items-start gap-2 lg:mr-5 ">
              <button
                onClick={() => {
                  toast.error("Google login not working");
                }}
                className=" w-fit md:w-32  flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg mt-4 md:mt-0"
              >
                <Image
                  src="/assets/GOOGLE.png"
                  alt="google"
                  width={30}
                  height={30}
                  className=" text-center mx-2"
                />
                <span className="hidden md:block">Google</span>
              </button>
              <button
                onClick={() => {
                  toast.error("Facebook login not working");
                }}
                className="w-fit md:w-40   flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg  mt-4 md:mt-0"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="facebook"
                  width={30}
                  height={30}
                  className=" text-center mx-2"
                />
                <span className=" hidden md:block">Facebook</span>
              </button>
              <button
                onClick={() => {
                  toast.error("Mobile login not working");
                }}
                className="w-fit md:w-32   flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg  mt-4 md:mt-0"
              >
                <Image
                  src="/assets/mobile-phone-svgrepo-com-1.png"
                  alt="mobile"
                  width={30}
                  height={30}
                  className="mx-2  "
                />
                <span className="hidden md:block"> Mobile</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center items-center   gap-2 w-full  lg:flex lg:justify-start lg:items-center ">
              <div className="border border-gray-300 h-[0.1] w-[15%] lg:w-[25%] xl:w-[20%] mt-5 flex" />
              <p className="text-xs sm:text-sm text-gray-400 text-center mt-5">
                or continue with email
              </p>
              <div className="border border-gray-300 h-[0.1] w-[15%] lg:w-[25%] xl:w-[24%] mt-5" />
            </div>
          </div>
          <div className=" rounded-md   lg:w-[90%] flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start xl:flex-col  mt-5 sm:mt-10  ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Registered email "
              autoComplete="email"
              className="w-full lg:w-[106%] xl:w-[73%] border-2 rounded-md bg-gray-200 border-gray-300 p-3 flex  items-center hover:border-2 outline-none hover:border-[#773FC6] text-sm"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full lg:w-[106%] xl:w-[73%]  border-2  bg-gray-200 border-gray-300 p-3 text-sm flex items-center rounded-md mt-5 outline-none hover:border-2  hover:border-[#773FC6]"
            />
            <div className=" flex flex-wrap justify-center items-center lg:flex lg::justify-end  lg:w-[106%] xl:w-[73%] ">
              <Link
                href="/forgot-password"
                className="text-xs sm:text-sm hover:text-[#773FC6] mt-1 "
              >
                Forget password ?
              </Link>
            </div>
            <button
              onClick={handleLogin}
              className="w-[85%]  bg-[#773FC6] md:w-full lg:w-[106%] xl:w-[73%] rounded-lg font-normal p-2 text-lg text-center text-white mt-5 shadow-xl"
            >
              Login
            </button>
            <div className=" flex flex-wrap justify-center items-center lg:justify-start lg:items-start text-center mt-5">
              <h3 className="text-[#8E8E8E] text-xs sm:text-sm ">
                Don't have an account ? &nbsp;{" "}
              </h3>
              <Link
                href="/register"
                className="text-[#773FC6] text-xs sm:text-sm"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
