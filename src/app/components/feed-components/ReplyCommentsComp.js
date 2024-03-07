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
import { GrClose, GrGallery } from "react-icons/gr";
import { BiSad } from "react-icons/bi";
import { BiSolidSad } from "react-icons/bi";
import { IoBulb } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { PiNotepadFill } from "react-icons/pi";
import { PiNotepadLight } from "react-icons/pi";
import { BsHeartFill } from "react-icons/bs";
import dayjs from "dayjs";

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
  const [selectedReplyImage, setSelectedReplyImage] = useState("");

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

  const postReply = async () => {
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

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (selectedReplyImage) {
        await postReplyPic(response?.data?.comment_id);
        console.log("image selected");
      }
      console.log("image not selected");

      getComments();
      setInputReply("");
    } catch (error) {
      console.error(error);
      setInputReply("");
    }
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

  const addReaction = (comment_id, type, userId) => {
    const newCommentReply = [...commentReply];
    const index = newCommentReply.findIndex(
      (reply) => reply._id === comment_id
    );
    if (index !== -1) {
      const reactions = [
        "reaction_like",
        "reaction_love",
        "reaction_thinking",
        "reaction_insight",
        "reaction_appraise",
      ];
      const reactionTypes = {
        reaction_like: "reaction_like",
        reaction_love: "reaction_love",
        reaction_thinking: "reaction_thinking",
        reaction_insight: "reaction_insight",
        reaction_appraise: "reaction_appraise",
      };
      const reactionType = reactionTypes[type];
      if (reactionType) {
        const userIndex = newCommentReply[index][reactionType].findIndex(
          (user) => user.user_id === userId
        );
        if (userIndex !== -1) {
          newCommentReply[index][reactionType].splice(userIndex, 1);
        } else {
          newCommentReply[index][reactionType].push({ user_id: userId });
        }

        reactions
          .filter((r) => r !== reactionType)
          .forEach((r) => {
            const userIndex = newCommentReply[index][r].findIndex(
              (user) => user.user_id === userId
            );
            if (userIndex !== -1) {
              newCommentReply[index][r].splice(userIndex, 1);
            }
          });
      }
    }

    setCommentsReply(newCommentReply);
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
      })
      .catch(function (error) {
        console.error(error);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedReplyImage(file);
    }
  };

  const postReplyPic = (comment_id) => {
    const formData = new FormData();
    formData.append("file", selectedReplyImage);

    const options = {
      method: "PATCH",
      url: `https://retpro.catax.me/comments/upload-comment-image/${comment_id}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getComments();
        setSelectedReplyImage("");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  // console.log(comments, "comments");
  // console.log(commentReply, "comment Reply");
  console.log(selectedReplyImage, "selected reply");
  return (
    <div className="border border-gray-300 rounded-md p-2  mt-5 ml-20  ">
      <div className=" flex  flex-col gap-2">
        {commentReply.map((reply) => {
          return (
            <div key={reply._id} className="flex gap-2 mt-5">
              <div className="">
                {reply?.comment_by?.user_image ? (
                  <Image
                    alt=""
                    src={reply?.comment_by?.user_image}
                    height={30}
                    width={30}
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                  />
                ) : (
                  <FaUserCircle size={50} />
                )}
              </div>
              <div className="border p-2 bg-gray-100 flex flex-col  gap-2 border-gray-300  rounded-b-lg w-full rounded-tr-lg">
                <div className="flex justify-between">
                  <div className="flex   gap-2  justify-center">
                    <div className="">
                      <h2 className="text-sm font-semibold text-[#773fc6]  ">
                        {reply?.comment_by?.user_display_name}
                      </h2>
                      <div className="">
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
                          <div className="flex flex-col gap-5">
                            <p
                              className="text-xs font-medium text-gray-800 mt-4"
                              dangerouslySetInnerHTML={{
                                __html:
                                  reply?.comment_content &&
                                  reply?.comment_content.replace(
                                    /(https?:\/\/[^\s]+)/g,
                                    '<a class="text-blue-600" href="$1">$1</a>'
                                  ),
                              }}
                            />
                            {reply?.comment_image && (
                              <Image
                                src={reply?.comment_image}
                                alt=""
                                height={100}
                                width={100}
                              />
                            )}
                          </div>
                        )}
                        <div className="">
                          {dayjs().date() -
                            dayjs(
                              new Date(reply?.comment_timestamp + "Z")
                            ).date() <
                          2 ? (
                            <p className="text-xs text-gray-400 mt-2">
                              {dayjs(
                                new Date(reply?.comment_timestamp + "Z")
                              ).fromNow()}
                            </p>
                          ) : (
                            <p className="text-xs text-gray-400 mt-2">
                              {dayjs(
                                new Date(reply?.comment_timestamp + "Z")
                              ).format("DD-MM-YYYY HH:mm a")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
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
                <div className="mt-5">
                  <div className="flex gap-2 items-center g   ">
                    {reply?.reaction_like?.length > 0 && (
                      <div className="flex items-center gap-1 justify-center">
                        <AiFillLike />
                        <p className="text-sm w-2">
                          {reply?.reaction_like?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_love?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <BsHeartFill />
                        <p className="text-sm w-2">
                          {reply?.reaction_love?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_thinking?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <BiSolidSad />
                        <p className="text-sm w-2">
                          {reply?.reaction_thinking?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_insight?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <IoBulb />
                        <p className="text-sm w-2">
                          {reply?.reaction_insight?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_appraise?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <PiNotepadFill />
                        <p className="text-sm w-2">
                          {reply?.reaction_appraise?.length}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row gap-5 justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          addReaction(reply._id, "reaction_like", userId)
                        }
                      >
                        {reply.reaction_like.some(
                          (user) => user.user_id === userId
                        ) ? (
                          <AiFillLike size={20} />
                        ) : (
                          <AiOutlineLike size={20} />
                        )}
                      </button>

                      <button
                        onClick={() =>
                          addReaction(reply._id, "reaction_love", userId)
                        }
                      >
                        {reply.reaction_love.some(
                          (user) => user.user_id === userId
                        ) ? (
                          <FaHeart size={20} />
                        ) : (
                          <CiHeart size={20} />
                        )}
                      </button>
                      <button
                        onClick={() =>
                          addReaction(reply._id, "reaction_thinking", userId)
                        }
                      >
                        {reply.reaction_thinking.some(
                          (user) => user.user_id === userId
                        ) ? (
                          <BiSolidSad size={20} />
                        ) : (
                          <BiSad size={20} />
                        )}
                      </button>

                      <button
                        onClick={() =>
                          addReaction(reply._id, "reaction_insight", userId)
                        }
                      >
                        {reply.reaction_insight.some(
                          (user) => user.user_id === userId
                        ) ? (
                          <IoBulb size={20} />
                        ) : (
                          <IoBulbOutline size={20} />
                        )}
                      </button>
                      <button
                        onClick={() =>
                          addReaction(reply._id, "reaction_appraise", userId)
                        }
                      >
                        {reply.reaction_appraise.some(
                          (user) => user.user_id === userId
                        ) ? (
                          <PiNotepadFill size={20} />
                        ) : (
                          <PiNotepadLight size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div className="text-xs mt-4 flex gap-5">
               <div className="flex gap-1 items-center justify-center">
               {reply?.reaction_like?.length !== 0 && (
                <p> {reply?.reaction_like?.length} </p>
               )}
               <button
                onClick={() =>
                  addReaction(reply?._id, "reaction_like", userId)
                }
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
                onClick={() =>
                  addReaction(reply?._id, "reaction_love", userId)
                }
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
          </div> */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col  gap-5 mt-2">
        <div className="flex  items-center justify-center gap-5  border rounded-xl overflow-hidden">
          <div className="w-full">
            <div className="flex  px-2 m-2 gap-3">
              <textarea
                value={inputReply}
                onChange={(e) => setInputReply(e.target.value)}
                className="p-1 text-sm  w-full  outline-none "
                placeholder="Leave your comments"
                onInput={autoResize}
              />{" "}
              <label>
                <div className="flex items-center justify-center mt-3">
                  <GrGallery size={25} color="gray" />
                </div>
                <input
                  type="file"
                  id="profile-picture"
                  accept="image/*"
                  className="hidden"
                  multiple
                  onChange={handleImageChange}
                />
              </label>
            </div>
            {selectedReplyImage && (
              <div className="flex  gap-2 bg-[#f7f8f8] p-4">
                <Image
                  alt=""
                  src={URL.createObjectURL(selectedReplyImage)}
                  height={100}
                  width={100}
                  className=""
                />
                <div>
                  <button onClick={() => setSelectedReplyImage("")}>
                    <GrClose />
                  </button>
                </div>
              </div>
            )}
          </div>
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
