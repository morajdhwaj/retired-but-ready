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
    <div className="  bg-gray-200 h-[120vh] lg:h-[100vh]  ">
      <Navbar />
      {/* Image */}

      <div className="  lg:flex pt-20 ">
        <div className="  lg:flex flex-col gap-3 mx-3 lg:w-1/2 ">
          <div className="mt-14 flex justify-center items-center ">
            <Image
              alt="register"
              src="/assets/Group-626217.png"
              width={500}
              height={300}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-[100px] bg-gray-400 " />
            <h3 className="ml-2 mr-2">or login through</h3>
            <div className="h-[1px] w-[100px] bg-gray-400" />
          </div>
          <div className=" w-75% flex justify-center items-center mb-5 mt-5 ">
            <div className="flex flex-col gap-5  ">
              <button
                onClick={() => {
                  toast.error("Google login not working");
                }}
                className="w-32 flex justify-evenly text-xs font-semibold items-center border rounded-lg border-[#773FC6] h-10"
              >
                <Image
                  src="/assets/GOOGLE.png"
                  alt="google"
                  width={20}
                  height={20}
                />
                GOOGLE
              </button>
              <button
                onClick={() => {
                  toast.error("Mobile login not working");
                }}
                className="w-32 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10"
              >
                <Image
                  src="/assets/mobile-phone-svgrepo-com-1.png"
                  alt="mobile"
                  width={20}
                  height={20}
                />
                MOBILE
              </button>
            </div>
            <div className="flex flex-col gap-5 mx-4">
              <button
                onClick={() => {
                  toast.error("Facebook login not working");
                }}
                className="w-32 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                FACEBOOK
              </button>

              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="w-32 flex font-semibold text-xs justify-evenly items-center border rounded-lg border-[#773FC6]  h-10 "
              >
                <Image
                  src="/assets/EMAIL.png"
                  alt="email"
                  width={20}
                  height={20}
                />
                EMAIL
              </button>
            </div>
          </div>
        </div>
        {/* Login form */}

        <div className=" w-full lg:w-1/2 text-center  flex flex-col  items-center  ">
          <h1 className=" text-3xl font-bold text-center  lg:mt-16">Login</h1>

          <div className="    rounded-md  py-10 w-[80%] flex items-center  border-2 border-gray-300  flex-col mt-5 sm:mt-10 gap-10  hover:border-2 ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your register email"
              autoComplete="email"
              className="mt-5 pl-2  h-14 w-60 sm:w-[80%] border-2 rounded-md bg-gray-200 border-gray-300 p-1 flex items-center hover:border-2  hover:border-b-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-60 pl-2 h-14 sm:w-[80%]  border-2  bg-gray-200 border-gray-300 p-1 flex items-center rounded-md hover:border-2  hover:border-b-2 "
            />

            {loading ? (
              <button className="border-2 bg-[#773FC6] rounded-lg p-2 w-60 sm:w-80  text-xl text-center  text-white flex justify-center items-center">
                Loading...
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="border-2 bg-[#773FC6] rounded-lg p-2 w-60 sm:w-80  text-xl text-center  text-white flex justify-center items-center"
              >
                Login
              </button>
            )}
            <div className="text-start flex w-full mr-10 justify-end items-end">
              <Link
                href="/forgot-password"
                className=" text-sm hover:text-[#773FC6] "
              >
                Forget password ?
              </Link>
            </div>
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
