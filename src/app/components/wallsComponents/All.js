"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsHeartFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdComment } from "react-icons/md";
import toast from "react-hot-toast";
import FeedComments from "../feed-components/FeedComments";
import PopUp from "../PopUp";
import { RiSpam2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

const All = ({ userId }) => {
  const [feeds, setFeeds] = useState([]);
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
    setShowDropDown(!showDropDown);
    setPostId(feed_id);
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

  const getFeeds = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/my-feed/7B6593af5ef4f7ce4f923051f3",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setFeeds(response?.data);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const handleComments = (feedId) => {
    setShowComments(feedId);
  };

  const postReaction = (postId, type) => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/post/react",
      params: { post_id: postId, user_id: userId, reaction_type: type },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getFeeds();
      })
      .catch(function (error) {
        console.error(error);
      });
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
        getFeeds();
        setPostId("");
        setShowDeleteModal(false);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
        setPostId("");
        setShowDeleteModal(false);
      });
  };

  if (feeds.length === 0) {
    return <div className="h-[100vh]">Loading...</div>;
  }

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

  console.log(reportPostId, "dsds");
  return (
    <div>
      {feeds.map((feed) => {
        return (
          <div key={feed?._id} className=" mt-5 ">
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
                  <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-50 px-2 ">
                    <div className="text-xs flex justify-end">
                      <button
                        className="hover:text-[#773fc6]"
                        onClick={() => setPostId("")}
                      >
                        x
                      </button>
                    </div>

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
                      className="border p-2 text-xs w-1/2"
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
                <div>
                  <p className="text-sm">{feed?.post_description}</p>
                </div>
              )}
              <p className="text-sm text-end text-[#773fc6]">...see more</p>
            </div>
            {feed.post_media && (
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent, transparent, rgba(0, 0, 0, 0.7)), url(${feed?.post_media[0]?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%", // full screen width
                  height: "70vh", // full screen height
                  borderRadius: 10,
                }}
                className="p-5 text-white font-medium flex flex-col justify-between "
              >
                <h2 className="text-xs md:text-lg">
                  Weekly news round-up: 2022 Hyundai Venue launched more details
                  on Mahindra Scropio-N
                </h2>
                <p className="text-xs font-normal">{feed.publish_time}</p>
              </div>
            )}
            <div className="mt-5">
              <h2 className="font-medium text-[#773fc6]">
                New Toyota mid-size SUV spotted
              </h2>
              <p className="text-xs">
                www.msn.com/en-in/auto | 6 min | 2 days ago
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center g   ">
                {feed?.reaction_like?.length > 0 && (
                  <div className="flex items-center gap-1 justify-center">
                    <AiFillLike />
                    <p className="text-sm w-2">{feed?.reaction_like?.length}</p>
                  </div>
                )}
                {feed?.reaction_love?.length > 0 && (
                  <div className="flex items-center  gap-1 justify-center">
                    <BsHeartFill />
                    <p className="text-sm w-2">{feed?.reaction_love?.length}</p>
                  </div>
                )}
              </div>
              <div className="mt-2 flex flex-col sm:flex-row gap-5 justify-between">
                <div className="flex items-center gap-2">
                  <button onClick={() => postReaction(feed._id, "like")}>
                    {feed?.reaction_like?.length == 0 ? (
                      <AiOutlineLike size={20} />
                    ) : (
                      <AiFillLike size={20} />
                    )}
                  </button>
                  <button onClick={() => postReaction(feed._id, "love")}>
                    {feed?.reaction_love?.length == 0 ? (
                      <CiHeart size={20} />
                    ) : (
                      <FaHeart size={20} />
                    )}
                  </button>

                  <button onClick={() => handleComments(feed?._id)}>
                    <MdComment />
                  </button>
                  <p className="text-sm">Comment</p>
                  <button>
                    <IoIosShareAlt />
                  </button>
                  <p className="text-sm">Share</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {feed?.post_comment_id?.length}
                  <p className="text-sm">Comments</p> | {feed?.shares?.length}
                  <p className="text-sm">Shares</p>
                </div>
              </div>
              {feed._id == showComments && (
                <FeedComments userId={userId} postId={feed?._id} />
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
