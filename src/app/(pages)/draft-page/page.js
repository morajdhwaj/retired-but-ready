"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import All from "@/app/components/wallsComponents/All";
import Trending from "@/app/components/wallsComponents/Trending";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiFillTool } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox, FaUserCircle } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import axios from "axios";
import PostInput from "@/app/components/post-components/PostInput";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";
import { useRouter } from "next/navigation";

const page = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [draftData, setDraftData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getUserData();
    getAllDraft();
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

  const getAllDraft = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/post/${userId}/all-drafts`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setDraftData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const publishPost = (id) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/post/${id}/publish`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        router.push("/walls-page");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const deletePost = (id) => {
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/post/${id}/delete`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getAllDraft();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(response?.data?.detail);
      });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove post from draft?"
    );
    if (confirmDelete) {
      deletePost(id);
    }
  };

  if (userData.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  console.log(draftData, "draft");

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:mx-60 pt-24">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%]   pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex items-center justify-center gap-2">
                  {userData?.user_image ? (
                    <Image
                      alt=""
                      src={userData?.user_image}
                      height={50}
                      width={50}
                    />
                  ) : (
                    <FaUserCircle size={50} />
                  )}
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
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
              <h2 className="font-semibold text-2xl">My Draft</h2>
            </div>
          </div>
          {draftData.length !== 0 ? (
            <div className="mt-10 flex flex-col gap-5">
              {draftData.map((post) => {
                return (
                  <div key={post?._key} className="border p-2 rounded-xl">
                    <h2>Description - {post.post_description}</h2>
                    <h2>Type -{post.post_type}</h2>
                    <div>
                      {post?.post_media?.map((image) => {
                        return (
                          <div key={image?.url}>
                            <Image
                              src={image?.url}
                              alt=""
                              height={100}
                              width={100}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(post?._id)}
                        className="bg-[#773f6c] text-white px-4 py-2 rounded-lg mt-5"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => publishPost(post?._id)}
                        className="bg-[#773f6c] text-white px-4 py-2 rounded-lg mt-5"
                      >
                        Publish
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-20 h-[100vh] flex justify-center">
              <h1>No draft available</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
