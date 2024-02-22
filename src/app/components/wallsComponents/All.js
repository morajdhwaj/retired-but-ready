"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsHeartFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdComment } from "react-icons/md";
import toast from "react-hot-toast";
import FeedComments from "../feed-components/FeedComments";
import PopUp from "../PopUp";
import { RiSpam2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import dayjs from "dayjs";
import { BiSad } from "react-icons/bi";
import { BiSolidSad } from "react-icons/bi";
import { IoBulb } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { PiNotepadFill } from "react-icons/pi";
import { PiNotepadLight } from "react-icons/pi";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const All = ({ userId, feeds, setFeeds, getFeeds }) => {
  const [postId, setPostId] = useState("");
  const [editPostId, setEditPostId] = useState("");
  const [reportPostId, setReportPostId] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [showComments, setShowComments] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState("hate_speech");

  const handleDropdown = (feed_id) => {
    if (!postId) {
      setShowDropDown(!showDropDown);
      setPostId(feed_id);
    } else setPostId("");
  };
  const handleEditInput = (editId) => {
    getPost();
    setEditPostId(editId);
    setPostId("");
  };
  const handleDiscard = () => {
    setEditPostId("");
    setPostId("");
  };

  useEffect(() => {
    getFeeds();
  }, []);

  const handleComments = (feedId) => {
    if (!showComments) {
      setShowComments(feedId);
    } else setShowComments("");
  };

  const postReaction = (postId, type, userId) => {
    const newFeeds = [...feeds];
    const index = newFeeds.findIndex((feed) => feed._id === postId);
    if (index !== -1) {
      const reactions = [
        "reaction_like",
        "reaction_love",
        "reaction_thinking",
        "reaction_insight",
        "reaction_appraise",
      ];
      const reactionTypes = {
        like: "reaction_like",
        love: "reaction_love",
        thinking: "reaction_thinking",
        insight: "reaction_insight",
        appraise: "reaction_appraise",
      };
      const reactionType = reactionTypes[type];
      if (reactionType) {
        const userIndex = newFeeds[index][reactionType].findIndex(
          (user) => user.user_id === userId
        );
        if (userIndex !== -1) {
          newFeeds[index][reactionType].splice(userIndex, 1);
        } else {
          newFeeds[index][reactionType].push({ user_id: userId });
        }

        reactions
          .filter((r) => r !== reactionType)
          .forEach((r) => {
            const userIndex = newFeeds[index][r].findIndex(
              (user) => user.user_id === userId
            );
            if (userIndex !== -1) {
              newFeeds[index][r].splice(userIndex, 1);
            }
          });
      }
    }

    setFeeds(newFeeds);
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/post/react",
      params: { post_id: postId, user_id: userId, reaction_type: type },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const postReaction = (userId, postId, type) => {
  //   const options = {
  //     method: "POST",
  //     url: "https://retpro.catax.me/post/react",
  //     params: { post_id: postId, user_id: userId, reaction_type: type },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       getFeeds();
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

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
        getFeeds();
        setPostId("");
        setShowDeleteModal(false);
      })
      .catch(function (error) {
        console.error(error);

        setPostId("");
        setShowDeleteModal(false);
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
        console.log(response.data);
        setEditDescription(response?.data?.post_description);
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
        setEditPostId("");
        setPostId("");
        getFeeds();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
  // the list of our video elements
  const videos = document.querySelectorAll("video");

  // Function to play or pause video based on hover
  const handleHover = (event) => {
    const video = event.target;
    if (event.type === "mouseenter") {
      video.play();
    } else if (event.type === "mouseleave") {
      video.pause();
    }
  };

  // Add event listeners to each video element
  videos.forEach((video) => {
    video.addEventListener("mouseenter", handleHover);
    video.addEventListener("mouseleave", handleHover);
  });

  if (feeds.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className=" border-2 border-[#773fc6] text-[#773fc6] px-5 py-2 rounded ">
          No feeds
        </h1>
      </div>
    );
  }

  console.log(reportPostId, "reportPost ID");
  return (
    <div className=" flex flex-col gap-10">
      {feeds.map((feed) => {
        return (
          <div key={feed?._id} className="mt-5 bg-white p-2">
            <div className="flex justify-between bg-white p-2 border-b-2 border-gray-300 ">
              <div className="flex items-center gap-2 justify-center">
                <div>
                  {feed?.post_user?.user_image ? (
                    <Image
                      alt=""
                      src={feed?.post_user?.user_image}
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                  ) : (
                    <FaUserCircle size={50} />
                  )}
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
                  <button onClick={() => handleDropdown(feed?._id)}>
                    <BsThreeDotsVertical size={25} color="gray" />
                  </button>
                ) : (
                  <button onClick={() => handleReportModal(feed?._id)}>
                    <RiSpam2Fill size={25} color="gray" />
                  </button>
                )}
                {postId == feed?._id && (
                  <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-80 px-2 ">
                    <div className="flex flex-col p-2 items-center justify-center">
                      <button
                        onClick={() => handleEditInput(feed._id)}
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
            <div className="mt-5">
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
                    <button onClick={handleDiscard}>Discard</button>
                  </div>
                </div>
              ) : (
                <div className="my-5">
                  <p className="text-sm">{feed?.post_description}</p>
                </div>
              )}
              {/* <p className="text-sm text-end text-[#773fc6]">...see more</p> */}
            </div>
            {feed.post_media && (
              <div className="flex items-center justify-center">
                {["png", "jpeg", "jpg"].includes(feed?.post_media[0].type) && (
                  <Image
                    alt=""
                    src={feed?.post_media[0]?.url}
                    height={200}
                    width={300}
                    className=""
                  />
                )}

                {feed?.post_media[0].type == "mp4" && (
                  <video
                    className="cursor-pointer"
                    controls
                    style={{ width: "50%", height: "50%" }}
                  >
                    <source src={feed?.post_media[0]?.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}

            <div className="mt-5">
              <div className="flex gap-2 items-center ">
                {feed?.reaction_like?.length > 0 && (
                  <div className="flex items-center gap-1 justify-center">
                    <AiFillLike size={20} />
                    <p className="text-sm w-2">{feed?.reaction_like?.length}</p>
                  </div>
                )}
                {feed?.reaction_love?.length > 0 && (
                  <div className="flex items-center  gap-1 justify-center">
                    <BsHeartFill size={20} />
                    <p className="text-sm w-2">{feed?.reaction_love?.length}</p>
                  </div>
                )}
                {feed?.reaction_thinking?.length > 0 && (
                  <div className="flex items-center  gap-1 justify-center">
                    <BiSolidSad size={20} />
                    <p className="text-sm w-2">
                      {feed?.reaction_thinking?.length}
                    </p>
                  </div>
                )}
                {feed?.reaction_insight?.length > 0 && (
                  <div className="flex items-center  gap-1 justify-center">
                    <IoBulb size={20} />
                    <p className="text-sm w-2">
                      {feed?.reaction_insight?.length}
                    </p>
                  </div>
                )}
                {feed?.reaction_appraise?.length > 0 && (
                  <div className="flex items-center  gap-1 justify-center">
                    <PiNotepadFill size={20} />
                    <p className="text-sm w-2">
                      {feed?.reaction_appraise?.length}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-2 flex flex-col sm:flex-row gap-5 justify-between ">
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center justify-center gap-2 ">
                    <button
                      onClick={() => postReaction(feed._id, "like", userId)}
                    >
                      {feed.reaction_like.some(
                        (user) => user.user_id === userId
                      ) ? (
                        <AiFillLike size={20} />
                      ) : (
                        <AiOutlineLike size={20} />
                      )}
                    </button>

                    <button
                      onClick={() => postReaction(feed._id, "love", userId)}
                    >
                      {feed.reaction_love.some(
                        (user) => user.user_id === userId
                      ) ? (
                        <FaHeart size={20} />
                      ) : (
                        <CiHeart size={20} />
                      )}
                    </button>
                    <button
                      onClick={() => postReaction(feed._id, "thinking", userId)}
                    >
                      {feed.reaction_thinking.some(
                        (user) => user.user_id === userId
                      ) ? (
                        <BiSolidSad size={20} />
                      ) : (
                        <BiSad size={20} />
                      )}
                    </button>

                    <button
                      onClick={() => postReaction(feed._id, "insight", userId)}
                    >
                      {feed.reaction_insight.some(
                        (user) => user.user_id === userId
                      ) ? (
                        <IoBulb size={20} />
                      ) : (
                        <IoBulbOutline size={20} />
                      )}
                    </button>
                    <button
                      onClick={() => postReaction(feed._id, "appraise", userId)}
                    >
                      {feed.reaction_appraise.some(
                        (user) => user.user_id === userId
                      ) ? (
                        <PiNotepadFill size={20} />
                      ) : (
                        <PiNotepadLight size={20} />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2 ">
                    <button
                      className="flex items-center justify-center gap-2"
                      onClick={() => handleComments(feed?._id)}
                    >
                      <MdComment />

                      <p className="text-sm">Comment</p>
                    </button>
                    <button>
                      <IoIosShareAlt />
                    </button>
                    <p className="text-sm">Share</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <button
                    onClick={() => handleComments(feed?._id)}
                    className="flex items-center gap-2"
                  >
                    {feed?.post_comment_id?.length}
                    <p className="text-sm">Comments</p>{" "}
                  </button>
                  |<button className="">Shares</button>
                </div>
              </div>
              {feed._id == showComments && (
                <FeedComments
                  getFeeds={getFeeds}
                  userId={userId}
                  postId={feed?._id}
                />
              )}
            </div>
          </div>
        );
      })}
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
      {/* <div className=" mt-5 ">
        <div className="flex justify-between bg-white p-2 border-b-2 border-gray-300 ">
          <div className="flex items-center gap-2 justify-center">
            <div>
              <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={50}
                width={50}
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#773fc6]  ">
                Munwar Raj singh
              </h2>
              <p className="text-xs">Chief Executive Officer</p>
              <p className="text-xs">17 h</p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical size={25} color="gray" />
          </div>
        </div>
        <div className="mt-5">
          <p className="text-sm">
            In the week gone by, we had covered the launch of one of the most
            awaited compact SUV in country, Additionally, we also covered a
            series of...
          </p>
          <p className="text-sm text-end text-[#773fc6]">...see more</p>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent, transparent, rgba(0, 0, 0, 0.7)), url('https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%", // full screen width
            height: "70vh", // full screen height
            borderRadius: 10,
          }}
          className="p-5 text-white font-medium flex flex-col justify-between "
        >
          <h2 className="text-xs md:text-lg">
            Weekly news round-up: 2022 Hyundai Venue launched more details on
            Mahindra Scropio-N
          </h2>
          <p className="text-xs font-normal">18 June 2022 13:42</p>
        </div>
        <div className="mt-5">
          <h2 className="font-medium text-[#773fc6]">
            New Toyota mid-size SUV spotted
          </h2>
          <p className="text-xs">www.msn.com/en-in/auto | 6 min | 2 days ago</p>
        </div>
        <div>
          <div className="flex gap-1 items-center  ">
            <AiFillLike />
            <p className="text-sm">1,232</p>
          </div>
          <div className="mt-2 flex flex-col sm:flex-row gap-5 justify-between">
            <div className="flex items-center gap-2">
              <button>
                <AiOutlineLike />
              </button>
              <p className="text-sm">Like</p>
              <button>
                <MdComment />
              </button>
              <p className="text-sm">Comment</p>
              <button>
                <IoIosShareAlt />
              </button>
              <p className="text-sm">Share</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              321
              <p className="text-sm">Comments</p> | 24
              <p className="text-sm">Shares</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default All;
