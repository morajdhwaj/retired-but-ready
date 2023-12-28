import Navbar from "@/app/components/Navbar";
import { Input } from "postcss";
import React from "react";

const page = () => {
  return (
    <div className="  bg-gray-200  ">
      <Navbar />
      {/* Image */}
      <div className="">
        <div className="flex gap-48  ">
          <div className=" flex flex-col gap-3 mx-3    ">
            <div className=" h-auto mt-5 rounded-md p-5 border-gray-300 flex     hover:w-auto hover:border-2 hover:border-blue-600  ">
              <img src="\assets\Group-626217.png " />
            </div>

            {/* Logo Image */}
            <div className="  h-auto mt-5 rounded-md p-5 border-gray-300 flex flex-col justify-center gap-5  hover:w-auto hover:border-2 hover:border-blue-600 mb-8">
              <div className="flex items-center justify-center gap-2">
                <div className="w-[100px] h-[1px] bg-gray-500" />

                <h1 className="font-normal"> or login through</h1>
                <div className="w-[100px] h-[1px] bg-gray-500" />
              </div>
              <div className="flex flex-wrap gap-3 items-center justify-center ">
                <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg w-[170px] ">
                  <button>
                    <img
                      src="https://p7.hiclipart.com/preview/168/533/94/google-logo-google-home-google-now-google-plus.jpg"
                      alt="Google"
                      className="w-[50px] bg-gray-200"
                    />
                  </button>
                  <h3 className="font-bold text-xl">Google</h3>
                </div>
                <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg w-[170px] ">
                  <button className="">
                    <img
                      src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                      alt="Facebook"
                      className="w-[30px] bg-gray-200"
                    />
                  </button>
                  <h3 className="font-bold text-xl">Facebook</h3>
                </div>
              </div>
              <div className="flex justify-center gap-3 ">
                <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg w-[170px] ">
                  <button className="">
                    <img
                      src="https://e7.pngegg.com/pngimages/661/236/png-clipart-computer-icons-smartphone-mobile-app-file-mobile-smartphone-icon-wikimedia-commons-white-and-teal-phone-logo-miscellaneous-blue-thumbnail.png"
                      alt="Mobile"
                      className="w-[30px] "
                    />
                  </button>
                  <h3 className="font-bold text-xl">Mobile</h3>
                </div>
                <div className="flex items-center border-2 border-[#773FC6] p-2 gap-3 rounded-lg w-[170px] py-1">
                  <button>
                    <img
                      src="https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-rose.png"
                      alt="Email"
                      className="w-[30px] "
                    />
                  </button>
                  <h3 className="font-bold text-xl">Email</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Login form */}

          <div className="mt-24 ">
            <h1 className=" text-3xl font-bold text-center ">Login</h1>

            <div className="  h-auto mt-5 rounded-md p-5  border-2 border-gray-300 flex flex-col gap-5  w-[650px] hover:border-2 hover:border-blue-600">
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
              <div className="border-2 bg-[#773FC6] rounded-lg p-2 w-[600px] text-xl text-center  text-white flex justify-center items-center">
                <button>Login</button>
              </div>
            </div>
            <div className="   mt-5 text-center  ">
              <a href="#">
                Don't have an account?
                <a href="#" className="text-red-400">
                  Create one
                </a>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
