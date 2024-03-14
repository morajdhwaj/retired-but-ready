"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import All from "@/app/components/wallsComponents/All";
import Trending from "@/app/components/wallsComponents/Trending";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { AiFillTool } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox, FaUserCircle } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import axios from "axios";
import PostInput from "@/app/components/post-components/PostInput";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";
import { useRouter } from "next/navigation";
import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [selectId, setSelectId] = useState("");
  const [userData, setUserData] = useState([]);
  const [draftData, setDraftData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [editDescription, setEditDescription] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();
  const [postId, setPostId] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    setUserId(userIdFromContext);
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

  const handleDropdown = (post_id) => {
    if (!postId) {
      setShowDropDown(!showDropDown);
      setPostId(post_id);
    } else setPostId("");
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
        router.push("/all-feeds-page");
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

  const getPost = (id) => {
    setPostId("");
    if (!selectId) {
      setSelectId(id);
    } else setSelectId("");
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/post/${id}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setShowEdit(!showEdit);
        setPostData(response?.data);
        setEditDescription(response?.data?.post_description);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleUpdate = () => {
    const options = {
      method: "PATCH",
      url: `https://retpro.catax.me/post/${selectId}/update`,
      headers: { "Content-Type": "application/json" },
      data: { post_description: editDescription, comment_condition: "string" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getAllDraft();
        setSelectId("");
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
                      alt="rtr-pic"
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
                    <div className="flex justify-between">
                      <div className="flex">
                        <h2 className="p-2 w-32">Description -</h2>{" "}
                        {selectId === post?._id ? (
                          <div className="flex items-center gap-2">
                            <textarea
                              className="p-2 w-[70vh]"
                              value={editDescription}
                              onChange={(e) =>
                                setEditDescription(
                                  e.target.value.replace(
                                    /(^[a-zA-Z])|(\.\s*\w)/gm,
                                    (match) => match.toUpperCase()
                                  )
                                )
                              }
                            />
                          </div>
                        ) : (
                          <h2 className="w-[70vh] p-2 ">
                            {post.post_description}
                          </h2>
                        )}
                      </div>
                      <button onClick={() => handleDropdown(post?._id)}>
                        <BsThreeDotsVertical size={25} color="gray" />
                      </button>
                      {postId == post?._id && (
                        <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-48 px-2 ">
                          <div className="flex flex-col p-2 items-center justify-center">
                            <button
                              onClick={() => getPost(post?._id)}
                              className="hover:bg-[#773fc6] w-20 rounded-md hover:text-white text-black p-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(post?._id)}
                              className=" hover:bg-[#773fc6] w-20 rounded-md hover:text-white text-black p-2"
                            >
                              delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className=" flex justify-between items-end p-2">
                      {post?.post_media && (
                        <div className="flex items-center justify-center">
                          {["png", "jpeg", "jpg"].includes(
                            post?.post_media[0].type
                          ) && (
                            <Image
                              alt="rtr-pic"
                              src={post?.post_media[0]?.url}
                              height={200}
                              width={200}
                              className=""
                            />
                          )}

                          {post?.post_media[0].type == "mp4" && (
                            <video
                              className="cursor-pointer"
                              controls
                              style={{ width: 200, height: 200 }}
                            >
                              <source
                                src={post?.post_media[0]?.url}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      )}
                      <div className="">
                        {selectId === post?._id ? (
                          <button
                            onClick={() => handleUpdate(post?._id)}
                            className="bg-[#773f6c] text-white px-4 py-2 rounded-lg mt-5"
                          >
                            Update
                          </button>
                        ) : (
                          <button
                            onClick={() => publishPost(post?._id)}
                            className="bg-[#773f6c] text-white px-4 py-2 rounded-lg mt-5"
                          >
                            Publish
                          </button>
                        )}
                      </div>
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
