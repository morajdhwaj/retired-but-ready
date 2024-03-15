"use client";

import React, { useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { FaImage, FaVideo } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { FaUserLarge } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
// import { TfiGallery } from "react-icons/tfi";
import { SlNote } from "react-icons/sl";
import { FaFilePdf } from "react-icons/fa";

const PostForm = ({ params }) => {
  const groupId = params["group"];
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="bg-[#EDEBF2]  px-10 h-full  min-h-[100vh] ">
        <Navbar />
        <div className=" h-[220vh sm:h-[210vh pt-10 sm:pt-20 lg:pt-10 lg:mt-0">
          <div className="hidden lg:flex ">
            <div className="">
              <Sidebar />
            </div>
          </div>
          <div className="md:flex md:mx-8 pb-10 mt-20 lg:mt-[130px] mx-5 sm:mx-14 lg:ml-[260px]">
            <div className="w-[70%] bg-pink-200 min-h-[80vh]">
              <div className="relative">
                <div
                  className="relativ  m-auto bg-[#EBEBEB] h-40  border-2"
                  style={{
                    backgroundImage: `url('/assets/Background.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%", // full screen width
                    height: "20vh", // full screen height
                    borderRadius: 10,
                  }}
                ></div>
                <div className="absolut mt-[-50px] flex justify-between w-full pl-10">
                  <div className="">
                    <div className=" rounded-full   h-24 w-24 flex justify-center  items-center     bg-white">
                      <FaUserLarge size={40} />
                    </div>
                    <div className="mt-2">
                      <h2 className="font-semibold text-3xl">Aman patel</h2>
                      <p className="flex items-center gap-3 mt-1">
                        <MdOutlineGroups size={30} />
                        <span className="text-lg font-">Private</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-[75px]  pr-3">
                    <button className="">
                      <MdModeEdit size={25} />
                    </button>
                    <button className="ml-1">
                      <BsThreeDotsVertical color="#252f3f" size={25} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border w-full mt-2"></div>
              <div className="mt-4">
                <div className="">
                  <div className="mx-10 border rounded-xl p-5 bg-white">
                    <div className="flex gap-5">
                      <div>
                        {/* {userData?.user_image ? (
              <Image alt="rtr-pic" src={userData?.user_image} height={50} width={50} />
            ) : ( */}
                        <FaUserCircle color="gray" size={50} />
                        {/* )} */}
                      </div>
                      <button className=" w-full border border-gray-300 rounded-full flex items-center px-5">
                        <h2 className="font-semibold text-gray-500">
                          Start a post
                        </h2>
                      </button>
                    </div>
                    <div className="mx-20 mt-5 flex  items-center justify-around">
                      <button
                        className=" p-3 rounded  flex  items-center gap-2"
                        onClick={() => {
                          setShowModal(!showModal), setType("text");
                        }}
                      >
                        <SlNote color="#773fc3" size="20" />
                        <p>Write text</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] bg-blue-500">second</div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex  justify-center z-50">
          <div className="absolute inset-0 bg-black/50 opacity-75"></div>
          <div className="bg-white  rounded-md z-50  h-[50vh] w-full sm:w-4/5 md:w-3/5 xl:w-2/5 mt-20 sm:mr-20">
            <div className="relative ">
              <div className="ml-9 mt-3">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="border border-gray-300 rounded-lg px-2 py-1"
                >
                  <option>Multimedia</option>
                  <option>Text</option>
                </select>
              </div>
              <div className="right-3 top-3 absolute">
                <button className="" onClick={() => setShowModal(false)}>
                  <RxCross2 size={25} />
                </button>
              </div>
            </div>
            {type === "Text" ? (
              <div className="w-[90%] h-[60%] mt-5 m-auto">
                <textarea
                  type="text"
                  className=" border-2 rounded-lg w-full h-full  "
                  placeholder="Write your description "
                />
              </div>
            ) : (
              <div className="flex">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center"
                  >
                    <FaFilePdf className="w-6 h-6 mr-1" />
                    <span>Upload PDF</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="PDF"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center"
                  >
                    <FaVideo className="w-6 h-6 mr-1" />
                    <span>Upload Video</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex items-center"
                  >
                    <FaImage className="w-6 h-6 mr-1" />
                    <span>Upload Image</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="Image"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>
            )}

            <div class="flex justify-between mx-5 mt-5 gap-5 fixed bottom-4">
              <button class="bg-[#773f6c] text-white px-4 py-2 rounded-lg">
                Draft
              </button>
              <button class="bg-[#773f6c] text-white px-4 py-2 rounded-lg">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostForm;
