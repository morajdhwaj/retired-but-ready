"use client";

import Loader from "@/app/components/Loader";
import { UserIdContext } from "@/context/UserIdContext";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import toast from "react-hot-toast";
import FeedComments from "@/app/components/feed-components/FeedComments";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiSpam2Fill } from "react-icons/ri";
import PopUp from "@/app/components/PopUp";
import { useRouter } from "next/navigation";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const page = ({ params }) => {
  const router = useRouter();

  const postId = params["post-id"];

  const [feed, setFeed] = useState([]);
  const [userId, setUserId] = useState("");
  const [editPostId, setEditPostId] = useState("");
  const { userIdFromContext } = useContext(UserIdContext);
  const [showComments, setShowComments] = useState("");
  const [copied, setCopied] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [reportPostId, setReportPostId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState("hate_speech");
  const [editDescription, setEditDescription] = useState("");
  const [showDiv, setShowDiv] = useState(false);

  console.log(postId);
  useEffect(() => {
    setUserId(userIdFromContext);
    getPost();
  }, [userId]);

  const handleHover = () => {
    setShowDiv(true);
  };

  const handleLeave = () => {
    setShowDiv(false);
  };

  const handleEditInput = (editId) => {
    getPost();
    setEditPostId(editId);
  };

  const handleDropdown = (feed_id) => {
    setShowDropDown(!showDropDown);
  };

  const handleDeleteModal = (comment_id) => {
    setShowDeleteModal(!showDeleteModal);
  };

  const deletePost = () => {
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/post/${postId}/delete`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        router.push("/all-feeds-page");

        setShowDeleteModal(false);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Failed to delete post");
        setShowDeleteModal(false);
      });
  };

  console.log(postId, "delete ka postId");

  const handleReportModal = (post_id) => {
    setShowReportModal(!showReportModal);
    setReportPostId(post_id);
  };

  const reportSpam = () => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/post/report-spam",
      params: { post_id: reportPostId, user_id: userId, spam_type: reportType },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setShowReportModal(false);
      })
      .catch(function (error) {
        console.error(error);
        toast.success(error?.response?.data?.detail);
      });
  };

  const getPost = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/post/${postId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "feedsss");
        setFeed(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const updatePost = (Post_id) => {
    const options = {
      method: "PATCH",
      url: `https://retpro.catax.me/post/${Post_id}/update`,
      headers: { "Content-Type": "application/json" },
      data: { post_description: editDescription },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);

        getPost();
        setEditPostId("");
        router.push("/all-feeds-page");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleComments = (feedId) => {
    if (!showComments) {
      setShowComments(feedId);
    } else setShowComments("");
  };

  if (feed.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const copyUrlToClipboard = () => {
    const currentUrl = `${window.location.href}`;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        toast.success("URL copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying to clipboard: ", error);
        toast.error("Failed to copy URL to clipboard");
      });
  };
  console.log(userIdFromContext, "userId");
  return (
    <div className="bg-[#A6A7A6]  px-10 ">
      <Navbar />
      <div className="flex gap-10 ">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:mx-60 pt-20 mt-20">
          <div key={feed?._id}>
            <div className="flex justify-between bg-white p-2 border-b-2 border-gray-300 ">
              <div className="flex items-center gap-2 justify-center">
                <div>
                  <Link href={`/profile/${feed?.post_user?.id}`}>
                    {feed?.post_user?.user_image ? (
                      <Image
                        alt=""
                        src={feed?.post_user?.user_image}
                        height={50}
                        width={50}
                        className="w-16 h-16 rounded-full border-2 border-gray-200"
                      />
                    ) : (
                      <FaUserCircle size={50} />
                    )}
                  </Link>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-[#773fc6]  ">
                    {feed?.post_user?.user_display_name}
                  </h2>
                  <p className="text-xs">{feed?.post_user?.last_designation}</p>

                  <div className="flex gap-10">
                    {dayjs().date() -
                      dayjs(new Date(feed?.publish_time + "Z")).date() <
                    2 ? (
                      <p className="text-xs">
                        Published at:
                        {dayjs(new Date(feed?.publish_time + "Z")).fromNow()}
                      </p>
                    ) : (
                      <p className="text-xs">
                        Published at:{" "}
                        {dayjs(new Date(feed?.publish_time + "Z")).format(
                          "DD-MM-YYYY HH:mm a"
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {userId == feed?.post_user?.id ? (
                  <button onClick={() => setShowDropDown(!showDropDown)}>
                    <BsThreeDotsVertical size={25} color="gray" />
                  </button>
                ) : (
                  <button onClick={() => handleReportModal(feed?._id)}>
                    <RiSpam2Fill size={25} color="gray" />
                  </button>
                )}
                {showDropDown && (
                  <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-80 px-2 ">
                    <div className="flex flex-col p-2 items-center justify-center">
                      <button
                        onClick={() => {
                          handleEditInput(feed._id),
                            setEditDescription(feed?.post_description);
                        }}
                        className="hover:bg-[#773fc6] w-20 rounded-md hover:text-white text-black p-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={handleDeleteModal}
                        className=" hover:bg-[#773fc6] w-20 rounded-md hover:text-white text-black p-2"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 ">
              {editPostId == feed._id ? (
                <div>
                  <div>
                    <textarea
                      className="border p-2 text-xs w-1/2 rounded-lg"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                    />
                  </div>
                  <div className="text-xs flex  gap-5 text-[#773fc6] ml-5">
                    <button onClick={() => updatePost(feed?._id)}>Post</button>
                    <button onClick={() => setEditPostId("")}>Discard</button>
                  </div>
                </div>
              ) : (
                <div className="my-5">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        feed?.post_description &&
                        feed?.post_description.replace(
                          /(https?:\/\/[^\s]+)/g,
                          '<a class="text-blue-600" href="$1" target="_blank">$1</a>'
                        ),
                    }}
                  />
                </div>
              )}
            </div>
            {feed.post_media && (
              <div className="flex items-center justify-center">
                {["png", "jpeg", "jpg"].includes(feed?.post_media[0].type) && (
                  <Image
                    alt=""
                    src={feed?.post_media[0]?.url}
                    height={500}
                    width={650}
                    className=""
                  />
                )}

                {feed?.post_media[0].type == "mp4" && (
                  <video
                    className="cursor-pointer"
                    controls
                    style={{ width: 650, height: 500 }}
                  >
                    <source src={feed?.post_media[0]?.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
            <div className=" flex justify-between">
              <div className="flex">
                <p
                  className="w-[30px] mt-1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <Image src="/emoji/like2.png" height={25} width={20}></Image>
                </p>

                <p
                  className="w-[30px] mt-1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <Image src="/emoji/love.png" height={25} width={20}></Image>
                </p>

                <p
                  className="w-[30px] mt-1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <Image
                    src="/emoji/thinking.png"
                    height={25}
                    width={20}
                  ></Image>
                </p>

                <p
                  className="w-[30px] mt-1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <Image src="/emoji/bulb.png" height={25} width={15}></Image>
                </p>

                <p
                  className="w-[30px] mt-1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <Image src="/emoji/clap.png" height={25} width={20}></Image>
                </p>

                <button
                  className="flex items-center justify-center gap-2  "
                  onClick={() => handleComments(feed?._id)}
                >
                  <MdComment className="mt-1" />

                  <p className="text-sm">Comment</p>
                </button>
                {feed._id == showComments && (
                  <FeedComments
                    // getFeeds={getFeeds}
                    userId={userId}
                    postId={feed?._id}
                  />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm">
                {feed?.post_comment_id?.length}
                <p className="text-sm">Comments</p> |
                <button onClick={copyUrlToClipboard} className="">
                  Shares
                </button>
              </div>

              {showDiv && <div>Hovered over the like emoji!</div>}
            </div>
          </div>
          {showReportModal && (
            <PopUp
              close={handleReportModal}
              onClick={reportSpam}
              title="Please select the category of spam being reported"
              action="Report"
              message=""
              error="error"
              reportType={reportType}
              setReportType={setReportType}
            />
          )}
          {showDeleteModal && (
            <PopUp
              close={handleDeleteModal}
              onClick={deletePost}
              title="Are you want Delete this post"
              action="Delete"
              message=""
              error="error"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
