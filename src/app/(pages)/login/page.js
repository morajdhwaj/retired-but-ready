import Navbar from "@/app/components/Navbar";
import { Input } from "postcss";
import React from "react";

const page = () => {
  return (
    <div className="  bg-gray-200 ">
      <Navbar />
      <div>
        <div className="flex ">
          <div className=" w-[50%] mt-40">
            <img src="\assets\Group-626217.png" />
          </div>
          <div className=" w-[50%] mt-36 ">
            <div className="text-3xl font-bold text-center  hover:border-b-2  hover:border-blue-600  ">
              <h1>Login</h1>
            </div>
            <div className="  h-auto mt-5 rounded-md p-5  border-2 border-gray-300 flex flex-col gap-5  w-[700px] hover:border-2 hover:border-blue-600">
              <input
                type="text"
                placeholder="Your full name"
                className="mt-5   w-[600px] border-2 rounded-md bg-gray-200 border-gray-300 p-1 flex items-center hover:border-2 hover:border-blue-600 hover:border-b-2"
              />
              <input
                type="password"
                placeholder="Password"
                className=" w-[600px] border-2  bg-gray-200 border-gray-300 p-1 flex items-center rounded-md hover:border-2 hover:border-blue-600 hover:border-b-2 "
              />
              <a
                href="#"
                className="mb-0 hover:border-b-2  hover:border-blue-600 hover:w-40"
              >
                forget password?
              </a>
              <div className="border-2 bg-[#773FC6] rounded-lg p-2 w-[600px] text-xl text-center  flex justify-center items-center">
                <button>Login</button>
              </div>
            </div>
            <div className="  mt-5 text-center hover:border-b-2  hover:border-blue-600  ">
              <a href="#">Don't have an account?Create an account </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
