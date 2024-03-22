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
      });
    setLoading(false);
  };

  console.log(userData);

  return (
    <div className="  bg-gray-200  h-[110vh] sm:h-[110vh] md:h-[115vh] lg:[110vh]  xl:h-[100vh]">
      <Navbar />
      {/* Image */}

      <div className=" md:flex  md:justify-center    h-full  lg:pt-20   lg:ml-32">
        <div className="hidden lg:flex lg:flex-col   ">
          <div className=" flex justify-center items-center mt-16">
            <Image
              alt="register"
              src="/assets/Group-626217.png"
              width={500}
              height={500}
              className="lg:w-[540px] lg:h-[540px]"
            />
          </div>
        </div>
        {/* Login form */}

        <div className=" xl:w-1/2   lg:flex lg:flex-col lg:justify-start lg:items-start   lg:ml-28 xl:ml-36 pt-16 lg:pt-10">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl  font-bold mt-10  text-center lg:text-start ">
            Login in to your account
          </h1>
          <div>
            <p className="text-xs mt-2 text-gray-500 text-center lg:text-start ">
              Welcome back! Select method log in:
            </p>
          </div>
          <div className="mt-5  flex md:flex-row justify-center items-center gap-2 md:mr-5  lg:flex  lg:flex-row lg:justify-start lg:items-center">
            <button
              onClick={() => {
                toast.error("Google login not working");
              }}
              className="w-fit sm:w-36  flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg mt-4 md:mt-0"
            >
              <Image
                src="/assets/GOOGLE.png"
                alt="google"
                width={30}
                height={30}
                className=" text-center mx-2"
              />
              <span className="hidden sm:block">Google</span>
            </button>
            <button
              onClick={() => {
                toast.error("Facebook login not working");
              }}
              className=" w-fit sm:w-36   flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg  mt-4 md:mt-0"
            >
              <Image
                src="/assets/facebook.png"
                alt="facebook"
                width={30}
                height={30}
                className="text-center mx-2"
              />
              <span className="hidden sm:block">Facebook</span>
            </button>
            <button
              onClick={() => {
                toast.error("Mobile login not working");
              }}
              className="w-fit sm:w-36   flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg  mt-4 md:mt-0"
            >
              <Image
                src="/assets/mobile-phone-svgrepo-com-1.png"
                alt="mobile"
                width={30}
                height={30}
                className="mx-2  "
              />
              <span className="hidden sm:block"> Mobile</span>
            </button>
          </div>
          <div
            className="
        flex justify-center items-center  lg:flex lg:justify-start lg:items-center gap-2 w-full"
          >
            {" "}
            <div className="border border-gray-300 h-[0.1] w-[15%] md:w-[35%] lg:w-[30%] xl:w-[24%] mt-5 flex" />
            <p className="text-xs sm:text-sm text-gray-400 text-center mt-5">
              or continue with email
            </p>
            <div className="border border-gray-300 h-[0.1] w-[15%] md:w-[25%] lg:w-[30%] xl:w-[20%] mt-5" />
          </div>

          <div className="    rounded-md   md:w-full lg:w-[90%] flex flex-col justify-center items-center lg:flex xl:flex-col lg:justify-start lg:items-start mt-5 sm:mt-10   lg:ml-0 ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Registered email "
              autoComplete="email"
              className="w-[55%] md:w-full lg:w-[106%] xl:w-[77%] border-2 rounded-md bg-gray-200 border-gray-300 p-3 flex  flex-wrap justify-center  items-center hover:border-2 outline-none hover:border-[#773FC6] text-sm"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-[55%]  md:w-full lg:w-[106%] xl:w-[77%]  border-2  bg-gray-200 border-gray-300 p-3 text-sm flex items-center rounded-md mt-5 outline-none hover:border-2  hover:border-[#773FC6]"
            />
            <div className=" flex flex-wrap justify-end  lg:w-[106%] xl:w-[77%] ">
              <Link
                href="/forgot-password"
                className="text-xs sm:text-sm text-[#40295F] mt-1 "
              >
                Forget password ?
              </Link>
            </div>
            <button
              onClick={handleLogin}
              className="w-[55%]  bg-[#773FC6] md:w-full lg:w-[106%] xl:w-[77%] rounded-lg font-normal p-2 text-lg text-center text-white mt-5 shadow-xl"
            >
              Login
            </button>
          </div>
          <div className="   text-center flex  flex-wrap justify-center items-center lg:justify-start lg:items-start mt-3">
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
