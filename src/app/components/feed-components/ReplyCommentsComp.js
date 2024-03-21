"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { RiSpam2Fill } from "react-icons/ri";
import PopUp from "../PopUp";
import { AiOutlineLike } from "react-icons/ai";

import { FaUserCircle } from "react-icons/fa";
import { GrClose, GrGallery } from "react-icons/gr";
import dayjs from "dayjs";
import Link from "next/link";

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
  const [showReaction, setShowReaction] = useState(false);
  const [reactionName, setReactionName] = useState("");

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
              <Link href={`/profile/${reply?.comment_by?.id}`}>
                <div className="">
                  {reply?.comment_by?.user_image ? (
                    <Image
                      alt="rtr-pic"
                      src={reply?.comment_by?.user_image}
                      height={30}
                      width={30}
                      className="w-10 h-10 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle color="gray" size={50} />
                  )}
                </div>
              </Link>
              <div className="border p-2 bg-gray-50 flex flex-col  gap-2 border-gray-300  w-full rounded-md">
                <div className="flex justify-between">
                  <div className="flex   gap-2  justify-center">
                    <div className="">
                      <Link href={`/profile/${reply?.comment_by.id}`}>
                        <h2 className="text-sm font-semibold text-[#773fc6]  ">
                          {reply?.comment_by?.user_display_name}
                        </h2>
                      </Link>
                      <div className="">
                        {editReplyId == reply._id ? (
                          <div>
                            <div>
                              <textarea
                                className="border  p-2 text-xs w-80 "
                                value={editComment}
                                onChange={(e) =>
                                  setEditComment(
                                    e.target.value.replace(
                                      /(^[a-zA-Z])|(\.\s*\w)/gm,
                                      (match) => match.toUpperCase()
                                    )
                                  )
                                }
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
                                    '<a class="text-blue-600" href="$1" target="_blank">$1</a>'
                                  ),
                              }}
                            />
                            {reply?.comment_image && (
                              <Image
                                src={reply?.comment_image}
                                alt="rtr-pic"
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
                        <BsThreeDotsVertical size={25} />
                      </button>
                    ) : (
                      <button onClick={() => handleModal(reply?._id)}>
                        <RiSpam2Fill size={25} color="#f4c6c6" />
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
                <div
                  className="mt-5 relative "
                  onMouseLeave={() => setShowReaction(false)}
                >
                  <div className="flex gap-2 items-center g   ">
                    {reply?.reaction_like?.length > 0 && (
                      <div className="flex items-center gap-1 justify-center">
                        <Image
                          src="/emoji/like2.png"
                          height={25}
                          width={20}
                        ></Image>
                        <p className="text-sm w-2">
                          {reply?.reaction_like?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_love?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <Image
                          src="/emoji/love.png"
                          height={25}
                          width={20}
                        ></Image>
                        <p className="text-sm w-2">
                          {reply?.reaction_love?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_thinking?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <Image
                          src="/emoji/thinking.png"
                          height={25}
                          width={20}
                        ></Image>
                        <p className="text-sm w-2">
                          {reply?.reaction_thinking?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_insight?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <Image
                          src="/emoji/bulb.png"
                          height={25}
                          width={15}
                        ></Image>
                        <p className="text-sm w-2">
                          {reply?.reaction_insight?.length}
                        </p>
                      </div>
                    )}
                    {reply?.reaction_appraise?.length > 0 && (
                      <div className="flex items-center  gap-1 justify-center">
                        <Image
                          src="/emoji/clap.png"
                          height={25}
                          width={20}
                        ></Image>
                        <p className="text-sm w-2">
                          {reply?.reaction_appraise?.length}
                        </p>
                      </div>
                    )}
                  </div>
                  {showReaction && (
                    <div className=" pb-2 mt-2 bg-[#F3F4F6] py-1  w-[55%] flex flex-col sm:flex-row gap-5 justify-between absolute bottom-5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            addReaction(reply._id, "reaction_like", userId),
                              setShowReaction(false);
                          }}
                          className="relative"
                          onMouseEnter={() => setReactionName("like")}
                          onMouseLeave={() => setReactionName("")}
                        >
                          {" "}
                          {reactionName === "like" && (
                            <p className="absolute top-[-28px]  bg-[#773FC6] text-white px-2 rounded-lg left-[-10px]">
                              Like
                            </p>
                          )}
                          <Image
                            src="/emoji/like2.png"
                            height={25}
                            width={20}
                          ></Image>
                        </button>

                        <button
                          onClick={() => {
                            addReaction(reply._id, "reaction_love", userId),
                              setShowReaction(false);
                          }}
                          className="relative"
                          onMouseEnter={() => setReactionName("love")}
                          onMouseLeave={() => setReactionName("")}
                        >
                          {reactionName === "love" && (
                            <p className="absolute top-[-28px] bg-[#773FC6] text-white px-2 rounded-lg left-[-12px]">
                              Love
                            </p>
                          )}
                          <Image
                            src="/emoji/love.png"
                            height={25}
                            width={20}
                          ></Image>
                        </button>
                        <button
                          onClick={() => {
                            addReaction(reply._id, "reaction_thinking", userId),
                              setShowReaction(false);
                          }}
                          className="relative"
                          onMouseEnter={() => setReactionName("Think")}
                          onMouseLeave={() => setReactionName("")}
                        >
                          {reactionName === "Think" && (
                            <p className="absolute top-[-28px] bg-[#773FC6] text-white px-2 rounded-lg left-[-15px]">
                              Think
                            </p>
                          )}
                          <Image
                            src="/emoji/thinking.png"
                            height={25}
                            width={20}
                          ></Image>
                        </button>

                        <button
                          onClick={() => {
                            addReaction(reply._id, "reaction_insight", userId),
                              setShowReaction(false);
                          }}
                          className="relative"
                          onMouseEnter={() => setReactionName("insight")}
                          onMouseLeave={() => setReactionName("")}
                        >
                          {reactionName === "insight" && (
                            <p className="absolute top-[-28px] bg-[#773FC6] text-white px-2 rounded-lg left-[-20px]">
                              Insight
                            </p>
                          )}
                          <Image
                            src="/emoji/bulb.png"
                            height={25}
                            width={15}
                          ></Image>
                        </button>
                        <button
                          onClick={() => {
                            addReaction(reply._id, "reaction_appraise", userId),
                              setShowReaction(false);
                          }}
                          className={`relative `}
                          onMouseEnter={() => setReactionName("Appreciate")}
                          onMouseLeave={() => setReactionName("")}
                        >
                          {" "}
                          {reactionName === "Appreciate" && (
                            <p className="absolute top-[-28px] bg-[#773FC6] text-white px-2 rounded-lg left-[-30px]">
                              Appreciate
                            </p>
                          )}
                          <Image
                            src="/emoji/clap.png"
                            height={25}
                            width={20}
                          ></Image>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="">
                    {reply.reaction_like.filter(
                      (item) => item.user_id === userId
                    ).length > 0 && (
                      <p
                        className="w-[30px] mt-1"
                        onMouseEnter={() => setShowReaction(reply._id)}
                      >
                        <Image
                          src="/emoji/like2.png"
                          height={25}
                          width={20}
                        ></Image>
                      </p>
                    )}
                    {reply.reaction_love.filter(
                      (item) => item.user_id === userId
                    ).length > 0 && (
                      <p
                        className="w-[30px] mt-1"
                        onMouseEnter={() => setShowReaction(reply._id)}
                      >
                        <Image
                          src="/emoji/love.png"
                          height={25}
                          width={20}
                        ></Image>
                      </p>
                    )}
                    {reply.reaction_thinking.filter(
                      (item) => item.user_id === userId
                    ).length > 0 && (
                      <p
                        className="w-[30px] mt-1"
                        onMouseEnter={() => setShowReaction(reply._id)}
                      >
                        <Image
                          src="/emoji/thinking.png"
                          height={25}
                          width={20}
                        ></Image>
                      </p>
                    )}
                    {reply.reaction_insight.filter(
                      (item) => item.user_id === userId
                    ).length > 0 && (
                      <p
                        className="w-[30px] mt-1"
                        onMouseEnter={() => setShowReaction(reply._id)}
                      >
                        <Image
                          src="/emoji/bulb.png"
                          height={25}
                          width={15}
                        ></Image>
                      </p>
                    )}
                    {reply.reaction_appraise.filter(
                      (item) => item.user_id === userId
                    ).length > 0 && (
                      <p
                        className="w-[30px] mt-1"
                        onMouseEnter={() => setShowReaction(reply._id)}
                      >
                        <Image
                          src="/emoji/clap.png"
                          height={25}
                          width={20}
                        ></Image>
                      </p>
                    )}
                    {reply.reaction_love.filter(
                      (item) => item.user_id === userId
                    ).length <= 0 &&
                      reply.reaction_appraise.filter(
                        (item) => item.user_id === userId
                      ).length <= 0 &&
                      reply.reaction_insight.filter(
                        (item) => item.user_id === userId
                      ).length <= 0 &&
                      reply.reaction_thinking.filter(
                        (item) => item.user_id === userId
                      ).length <= 0 &&
                      reply.reaction_like.filter(
                        (item) => item.user_id === userId
                      ).length <= 0 && (
                        <p
                          className="w-[30px] mt-1"
                          onMouseEnter={() => setShowReaction(reply._id)}
                        >
                          <AiOutlineLike size={20} />
                        </p>
                      )}
                  </div>

                  {/* <div className=" mt-2">
                    <Image
                      src="/emoji/clap.png"
                      onMouseEnter={() => setShowReaction(true)}
                      height={25}
                      width={20}
                    ></Image>
                  </div> */}
                </div>
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
                onChange={(e) =>
                  setInputReply(
                    e.target.value.replace(/(^[a-zA-Z])|(\.\s*\w)/gm, (match) =>
                      match.toUpperCase()
                    )
                  )
                }
                className="p-2 rounded-lg text-sm  w-full   outline-none "
                placeholder="Leave your comments"
                onInput={autoResize}
              />{" "}
              <label>
                <div className="flex items-center justify-center mt-3">
                  <GrGallery size={25} color="#773fc6" />
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
                  alt="rtr-pic"
                  src={URL.createObjectURL(selectedReplyImage)}
                  height={100}
                  width={100}
                  className=""
                />
                <div>
                  <button onClick={() => setSelectedReplyImage("")}>
                    <GrClose color="#f96363" />
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

{
  /* <div className="text-xs mt-4 flex gap-5">
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
          </div> */
}
