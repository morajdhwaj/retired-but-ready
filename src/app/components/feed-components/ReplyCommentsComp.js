"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { RiSpam2Fill } from "react-icons/ri";
import PopUp from "../PopUp";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const ReplyCommentsComp = ({
  userId,
  getFeeds,
  replyCommentId,
  setReplyCommentId,
}) => {
  const [comments, setComments] = useState([]);
  const [commentReply, setCommentsReply] = useState([]);
  const [inputReply, setInputReply] = useState("");
  const [replyId, setReplyId] = useState("");
  const [editComment, setEditComment] = useState("");
  const [replyComments, setReplyComments] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [reportReplyId, setReportReplyId] = useState("");
  const [editReplyId, setEditReplyId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reportType, setReportType] = useState("hate_speech");

  useEffect(() => {
    getComments();
  }, []);

  const handleDropdown = (reply_id, content) => {
    if (!replyId) {
      setShowDropDown(!showDropDown);
      setReplyId(reply_id);
      setEditComment(content);
    } else setReplyId("");
  };

  const handleModal = (reply_id) => {
    setShowModal(!showModal);
    setReportReplyId(reply_id);
  };

  const getComments = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/comments/get-one-comment/${replyCommentId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setComments(response.data);
        setCommentsReply(response.data.comment_replies);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const postReply = () => {
    if (!inputReply) {
      toast.error("Please share your thoughts");
      return;
    }
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/comments/add-comment",
      headers: { "Content-Type": "application/json" },
      data: {
        comment_location: "comment",
        parent_id: replyCommentId,
        comment_by: userId,
        comment_content: inputReply,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getComments();
        getFeeds();
        setInputReply("");
      })
      .catch(function (error) {
        console.error(error);
        setInputReply("");
      });
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const deleteReply = () => {
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/comments/delete-comment/${replyId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getComments();
        toast.success(response?.data?.message);
        setShowDeleteModal(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleDiscard = () => {
    setEditReplyId("");
    setReplyId("");
  };

  const editReply = (reply_id) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/comments/edit-comment/${reply_id}`,
      headers: { "Content-Type": "application/json" },
      data: { comment_content: editComment, is_deleted: false },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getComments();
        setEditReplyId("");
        setReplyId("");
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const addReaction = (comment_id, type) => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/comments/add-reaction-to-comment",
      params: {
        comment_id: comment_id,
        user_id: userId,
        reaction_type: type,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getComments();
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const reportSpam = () => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/comments/report-comment-as-spam",
      params: {
        comment_id: reportReplyId,
        reported_by: userId,
        spam_type: reportType,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setShowModal(false);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  console.log(comments, "comments");
  console.log(commentReply, "comment Reply");

  return (
    <div className="border border-gray-300 rounded-md p-2  mt-5 ml-20  ">
      <div className=" flex  flex-col gap-2">
        {commentReply.map((reply) => {
          return (
            <div
              key={reply._id}
              className="border p-2 bg-gray-100 flex flex-col  gap-2"
            >
              <div className="flex justify-between">
                <div className="flex  gap-2 items-center justify-center">
                  <div>
                    {reply?.comment_by?.user_image ? (
                      <Image
                        alt=""
                        src={reply?.comment_by?.user_image}
                        height={20}
                        width={20}
                      />
                    ) : (
                      <FaUserCircle size={50} />
                    )}
                  </div>
                  {editReplyId == reply._id ? (
                    <div>
                      <div>
                        <textarea
                          className="border  p-2 text-xs w-80 "
                          value={editComment}
                          onChange={(e) => setEditComment(e.target.value)}
                        />
                      </div>
                      <div className="text-xs flex  gap-5 text-[#773fc6] ml-5">
                        <button onClick={() => editReply(reply._id)}>
                          Post
                        </button>
                        <button onClick={handleDiscard}>Discard</button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-medium text-gray-800 ">
                        {reply?.comment_content}
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  {userId == reply.comment_by.id ? (
                    <button
                      onClick={() =>
                        handleDropdown(reply?._id, reply.comment_content)
                      }
                    >
                      <BsThreeDotsVertical size={25} color="gray" />
                    </button>
                  ) : (
                    <button onClick={() => handleModal(reply?._id)}>
                      <RiSpam2Fill size={25} color="gray" />
                    </button>
                  )}
                  {replyId == reply?._id && (
                    <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-50 px-2 ">
                      <div className="flex flex-col p-2 items-center justify-center">
                        <button
                          onClick={() => setEditReplyId(reply._id)}
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
              <div className="text-xs mt-4 flex gap-5">
                <div className="flex gap-1 items-center justify-center">
                  {reply?.reaction_like?.length !== 0 && (
                    <p> {reply?.reaction_like?.length} </p>
                  )}
                  <button
                    onClick={() => addReaction(reply?._id, "reaction_like")}
                  >
                    {reply?.reaction_like?.some(
                      (user) => user.user_id === userId
                    ) ? (
                      <AiFillLike size={20} />
                    ) : (
                      <AiOutlineLike size={20} />
                    )}
                  </button>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  {reply?.reaction_love?.length !== 0 && (
                    <p> {reply?.reaction_love?.length} </p>
                  )}
                  <button
                    onClick={() => addReaction(reply?._id, "reaction_love")}
                  >
                    {reply?.reaction_love?.some(
                      (user) => user.user_id === userId
                    ) ? (
                      <FaHeart size={20} />
                    ) : (
                      <CiHeart size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col  gap-5 mt-2">
        <div className="flex  items-center justify-center gap-5 pr-5">
          <textarea
            value={inputReply}
            onChange={(e) => setInputReply(e.target.value)}
            className=" p-2 text-sm border rounded-xl w-full"
            placeholder="Leave your comments"
          />
          <button>
            <GrGallery size={30} color="gray" />
          </button>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            onClick={postReply}
            className="border border-[#773fc6] text-[#773fc6] h-10  rounded px-4"
          >
            Reply
          </button>
          <button
            onClick={() => setReplyCommentId("")}
            className="border border-[#773fc6] text-[#773fc6] h-10 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>

      {showModal && (
        <PopUp
          close={handleModal}
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
          onClick={deleteReply}
          title="Are you want Delete this comment"
          action="Delete"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default ReplyCommentsComp;
