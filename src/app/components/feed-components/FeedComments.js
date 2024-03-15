import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { RiSpam2Fill } from "react-icons/ri";
import PopUp from "../PopUp";
import { AiOutlineLike } from "react-icons/ai";
import ReplyCommentsComp from "./ReplyCommentsComp";
import { GrClose, GrGallery } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import dayjs from "dayjs";
import Link from "next/link";

const FeedComments = ({ postId, userId, getFeeds }) => {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [replyComments, setReplyComments] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [reportCommentId, setReportCommentId] = useState("");
  const [editCommentId, setEditCommentId] = useState("");
  const [replyCommentId, setReplyCommentId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reportType, setReportType] = useState("hate_speech");
  const [selectedImage, setSelectedImage] = useState("");
  const [showReaction, setShowReaction] = useState();
  const [reactionName, setReactionName] = useState();
  const [numCommentsToShow, setNumCommentsToShow] = useState(2);

  console.log(comments, "this  is a comment for test purposes");

  useEffect(() => {
    getComments();
  }, [postId]);

  const handleDropdown = (comment_id, content) => {
    if (!commentId) {
      setShowDropDown(!showDropDown);
      setCommentId(comment_id);
      setEditComment(content);
    } else setCommentId("");
  };

  const handleModal = (comment_id) => {
    setShowModal(!showModal);
    setReportCommentId(comment_id);
  };

  const handleDeleteModal = (comment_id) => {
    setShowDeleteModal(!showDeleteModal);
  };

  const getComments = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/comments/get-all-comments/${postId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setComments(response?.data?.reverse());
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const postComment = async () => {
    if (!inputComment) {
      toast.error("Please share your thoughts");
      return;
    }
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/comments/add-comment",
      headers: { "Content-Type": "application/json" },
      data: {
        comment_location: "global",
        parent_id: postId,
        comment_by: userId,
        comment_content: inputComment,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (selectedImage) {
        await postCommentPic(response?.data?.comment_id);
        console.log("image selected");
      }
      console.log("image not selected");
      toast.success(response?.data?.message);
      getComments();
      getFeeds();
      setInputComment("");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.detail);
    }
  };

  const deleteComment = () => {
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/comments/delete-comment/${commentId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getComments();
        toast.success(response?.data?.message);
        setShowDeleteModal(false);
        getFeeds();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const handleEditInput = (editId) => {
    setEditCommentId(editId);
  };

  const handleDiscard = () => {
    setEditCommentId("");
    setCommentId("");
  };

  const editComments = (comment_id) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/comments/edit-comment/${comment_id}`,
      headers: { "Content-Type": "application/json" },
      data: { comment_content: editComment, is_deleted: false },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getComments();
        setEditCommentId("");
        setCommentId("");
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const AddReaction = (comment_id, type, userId) => {
    const newComments = [...comments];
    const index = newComments.findIndex(
      (comment) => comment._id === comment_id
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
        const userIndex = newComments[index][reactionType].findIndex(
          (user) => user.user_id === userId
        );
        if (userIndex !== -1) {
          newComments[index][reactionType].splice(userIndex, 1);
        } else {
          newComments[index][reactionType].push({ user_id: userId });
        }

        reactions
          .filter((r) => r !== reactionType)
          .forEach((r) => {
            const userIndex = newComments[index][r].findIndex(
              (user) => user.user_id === userId
            );
            if (userIndex !== -1) {
              newComments[index][r].splice(userIndex, 1);
            }
          });
      }
    }

    setComments(newComments);
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
        toast.error(error?.response?.data?.detail);
      });
  };

  const reportSpam = () => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/comments/report-comment-as-spam",
      params: {
        comment_id: reportCommentId,
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

  const handleReply = (comment_id) => {
    if (!replyCommentId) {
      setShowReply(!showReply);
      setReplyCommentId(comment_id);
    } else setReplyCommentId("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const postCommentPic = (comment_id) => {
    const formData = new FormData();
    formData.append("file", selectedImage);

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
        setSelectedImage("");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  console.log(selectedImage, "selected");
  const handleLoadMore = () => {
    setNumCommentsToShow(numCommentsToShow + 2); // Increase the number of comments to show by 2
  };
  return (
    <div className=" w-full mt-5 ">
      <div className=" flex  items-center justify-center gap-5  border rounded-xl overflow-hidden ">
        <div className="w-full">
          <div className="flex  px-2 m-2 gap-3 ">
            <textarea
              value={inputComment}
              onChange={(e) =>
                setInputComment(
                  e.target.value.replace(/(^[a-zA-Z])|(\.\s*\w)/gm, (match) =>
                    match.toUpperCase()
                  )
                )
              }
              className="p-1 text-sm  w-full  outline-none "
              placeholder="Leave your comments"
              onInput={autoResize}
            />
            <label htmlFor="profile-picture" className="cursor-pointer ">
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
          {selectedImage && (
            <div className="flex  gap-2 bg-[#f7f8f8] p-4">
              <Image
                alt="rtr-pic"
                src={URL.createObjectURL(selectedImage)}
                height={100}
                width={100}
                className=""
              />
              <div>
                <button onClick={() => setSelectedImage("")}>
                  <GrClose color="#f96363" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={postComment}
        className="border border-[#773fc6] text-[#773fc6] px-4 py-2 rounded m-5"
      >
        Post
      </button>
      <div>
        {/* {comments?.map((comment) => ( */}
        {comments.slice(0, numCommentsToShow).map((comment) => (
          <div key={comment?._id}>
            <div className="flex gap-2 mt-5">
              <Link href={`/profile/${comment?.comment_by?.id}`}>
                <div>
                  {comment?.comment_by?.user_image ? (
                    <Image
                      alt="rtr-pic"
                      src={comment?.comment_by?.user_image}
                      height={50}
                      width={50}
                      className="w-14 h-12 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle color="gray" size={50} />
                  )}
                </div>
              </Link>
              <div className="flex border-gray-300 bg-gray-50 border rounded w-full  p-3">
                <div className="w-full ">
                  <div className="justify-between flex ">
                    <Link href={`/profile/${comment?.comment_by?.id}`}>
                      <h2 className="text-sm font-semibold text-[#773fc6]  ">
                        {comment?.comment_by?.user_display_name}
                      </h2>
                    </Link>
                    <div>
                      {userId == comment.comment_by.id ? (
                        <button
                          onClick={() =>
                            handleDropdown(
                              comment?._id,
                              comment.comment_content
                            )
                          }
                        >
                          <BsThreeDotsVertical size={25} />
                        </button>
                      ) : (
                        <button onClick={() => handleModal(comment?._id)}>
                          <RiSpam2Fill size={25} color="#f4c6c6" />
                        </button>
                      )}
                      {commentId == comment._id && (
                        <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-80 px-2 ">
                          <div className="flex flex-col p-2 items-center justify-center">
                            <button
                              onClick={() => handleEditInput(comment._id)}
                              className="hover:bg-[#773fc6] w-20 rounded-md hover:text-white text-black p-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={handleDeleteModal}
                              className=" hover:bg-[#773fc6] w-20 rounded-md hover:text-white text-black p-2"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {editCommentId == comment._id ? (
                    <div>
                      <div>
                        <textarea
                          className="border  p-2 text-xs w-1/2"
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
                        <button onClick={() => editComments(comment._id)}>
                          Post
                        </button>
                        <button onClick={handleDiscard}>Discard</button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5 ">
                      <p
                        className="text-xs font-medium text-gray-800 mt-4"
                        dangerouslySetInnerHTML={{
                          __html:
                            comment?.comment_content &&
                            comment?.comment_content.replace(
                              /(https?:\/\/[^\s]+)/g,
                              '<a class="text-blue-600" href="$1" target="_blank">$1</a>'
                            ),
                        }}
                      />
                      {comment?.comment_image && (
                        <Image
                          src={comment?.comment_image}
                          alt="rtr-pic"
                          height={100}
                          width={100}
                        />
                      )}
                    </div>
                  )}
                  <div className="">
                    {dayjs().date() -
                      dayjs(new Date(comment?.comment_timestamp + "Z")).date() <
                    2 ? (
                      <p className="text-xs text-gray-400 mt-2">
                        {dayjs(
                          new Date(comment?.comment_timestamp + "Z")
                        ).fromNow()}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-400 mt-2">
                        {dayjs(
                          new Date(comment?.comment_timestamp + "Z")
                        ).format("DD-MM-YYYY HH:mm a")}
                      </p>
                    )}
                  </div>
                  <div
                    className="mt-5 relative"
                    onMouseLeave={() => setShowReaction(false)}
                  >
                    <div className="flex gap-2 items-center mb-2  ">
                      {comment?.reaction_like?.length > 0 && (
                        <div className="flex items-center gap-1 justify-center">
                          <Image
                            src="/emoji/like2.png"
                            height={25}
                            width={20}
                          ></Image>
                          <p className="text-sm w-2">
                            {comment?.reaction_like?.length}
                          </p>
                        </div>
                      )}
                      {comment?.reaction_love?.length > 0 && (
                        <div className="flex items-center  gap-1 justify-center">
                          <Image
                            src="/emoji/love.png"
                            height={25}
                            width={20}
                          ></Image>
                          <p className="text-sm w-2">
                            {comment?.reaction_love?.length}
                          </p>
                        </div>
                      )}
                      {comment?.reaction_thinking?.length > 0 && (
                        <div className="flex items-center  gap-1 justify-center">
                          <Image
                            src="/emoji/thinking.png"
                            height={25}
                            width={20}
                          ></Image>
                          <p className="text-sm w-2">
                            {comment?.reaction_thinking?.length}
                          </p>
                        </div>
                      )}
                      {comment?.reaction_insight?.length > 0 && (
                        <div className="flex items-center  gap-1 justify-center">
                          <Image
                            src="/emoji/bulb.png"
                            height={25}
                            width={15}
                          ></Image>
                          <p className="text-sm w-2">
                            {comment?.reaction_insight?.length}
                          </p>
                        </div>
                      )}
                      {comment?.reaction_appraise?.length > 0 && (
                        <div className="flex items-center  gap-1 justify-center">
                          <Image
                            src="/emoji/clap.png"
                            height={25}
                            width={20}
                          ></Image>
                          <p className="text-sm w-2">
                            {comment?.reaction_appraise?.length}
                          </p>
                        </div>
                      )}
                    </div>

                    {showReaction === comment._id && (
                      <div className="mt-2 flex flex-col sm:flex-row gap-5 justify-between absolute bottom-6 ">
                        <div
                          className="flex items-center gap-2  bg-white min-w-52 py-2 "
                          onMouseLeave={() => setShowReaction(false)}
                        >
                          <button
                            onClick={() => {
                              AddReaction(
                                comment?._id,
                                "reaction_like",
                                userId
                              ),
                                setShowReaction("");
                            }}
                            className="relative"
                            onMouseEnter={() => setReactionName("like")}
                            onMouseLeave={() => setReactionName("")}
                          >
                            {reactionName === "like" && (
                              <p className="absolute top-[-28px]  bg-[#773FC6] text-white px-2 rounded-lg left-[-10px]">
                                Like
                              </p>
                            )}
                            <Image
                              src="/emoji/like2.png"
                              height={25}
                              width={20}
                              alt="reactions"
                            ></Image>
                          </button>

                          <button
                            onClick={() => {
                              AddReaction(
                                comment?._id,
                                "reaction_love",
                                userId
                              ),
                                setShowReaction("");
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
                              alt="reactions"
                            ></Image>
                          </button>
                          <button
                            onClick={() => {
                              AddReaction(
                                comment?._id,
                                "reaction_thinking",
                                userId
                              ),
                                setShowReaction("");
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
                              alt="reactions"
                            ></Image>
                          </button>

                          <button
                            onClick={() => {
                              AddReaction(
                                comment?._id,
                                "reaction_insight",
                                userId
                              ),
                                setShowReaction("");
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
                              AddReaction(
                                comment?._id,
                                "reaction_appraise",
                                userId
                              ),
                                setShowReaction("");
                            }}
                            className={`relative `}
                            onMouseEnter={() => setReactionName("Appreciate")}
                            onMouseLeave={() => setReactionName("")}
                          >
                            {reactionName === "Appreciate" && (
                              <p className="absolute top-[-28px] bg-[#773FC6] text-white px-2 rounded-lg left-[-30px]">
                                Appreciate
                              </p>
                            )}
                            <Image
                              src="/emoji/clap.png"
                              height={25}
                              width={20}
                              alt="reactions"
                            ></Image>
                          </button>
                        </div>
                      </div>
                    )}
                    <div className="flex">
                      <div className="">
                        {comment.reaction_like.filter(
                          (item) => item.user_id === userId
                        ).length > 0 && (
                          <p
                            className="w-[30px] mt-1"
                            onMouseEnter={() => setShowReaction(comment._id)}
                          >
                            <Image
                              src="/emoji/like2.png"
                              height={25}
                              width={20}
                              alt="reactions"
                            ></Image>
                          </p>
                        )}
                        {comment.reaction_love.filter(
                          (item) => item.user_id === userId
                        ).length > 0 && (
                          <p
                            className="w-[30px] mt-1"
                            onMouseEnter={() => setShowReaction(comment._id)}
                          >
                            <Image
                              src="/emoji/love.png"
                              height={25}
                              width={20}
                              alt="reactions"
                            ></Image>
                          </p>
                        )}
                        {comment.reaction_thinking.filter(
                          (item) => item.user_id === userId
                        ).length > 0 && (
                          <p
                            className="w-[30px] mt-1"
                            onMouseEnter={() => setShowReaction(comment._id)}
                          >
                            <Image
                              src="/emoji/thinking.png"
                              height={25}
                              width={20}
                              alt="reactions"
                            ></Image>
                          </p>
                        )}
                        {comment.reaction_insight.filter(
                          (item) => item.user_id === userId
                        ).length > 0 && (
                          <p
                            className="w-[30px] mt-1"
                            onMouseEnter={() => setShowReaction(comment._id)}
                          >
                            <Image
                              src="/emoji/bulb.png"
                              height={25}
                              width={15}
                            ></Image>
                          </p>
                        )}
                        {comment.reaction_appraise.filter(
                          (item) => item.user_id === userId
                        ).length > 0 && (
                          <p
                            className="w-[30px] mt-1"
                            onMouseEnter={() => setShowReaction(comment._id)}
                          >
                            <Image
                              src="/emoji/clap.png"
                              height={25}
                              width={20}
                              alt="reactions"
                            ></Image>
                          </p>
                        )}
                        {comment.reaction_love.filter(
                          (item) => item.user_id === userId
                        ).length <= 0 &&
                          comment.reaction_appraise.filter(
                            (item) => item.user_id === userId
                          ).length <= 0 &&
                          comment.reaction_insight.filter(
                            (item) => item.user_id === userId
                          ).length <= 0 &&
                          comment.reaction_thinking.filter(
                            (item) => item.user_id === userId
                          ).length <= 0 &&
                          comment.reaction_like.filter(
                            (item) => item.user_id === userId
                          ).length <= 0 && (
                            <p
                              className="w-[30px] mt-1"
                              onMouseEnter={() => setShowReaction(comment._id)}
                            >
                              <AiOutlineLike size={20} />
                            </p>
                          )}
                      </div>
                      <button
                        onClick={() => handleReply(comment?._id)}
                        className="text-xs ml-2 pt-1"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {replyCommentId == comment?._id && (
              <ReplyCommentsComp
                replyCommentId={replyCommentId}
                setReplyCommentId={setReplyCommentId}
                userId={userId}
              />
            )}
          </div>
        ))}
        {comments.length > numCommentsToShow && (
          <div className=" flex items-center justify-center">
            <button
              onClick={handleLoadMore}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#773FC6] hover:bg-[#601fba] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Load More Comments
            </button>
          </div>
        )}
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
          onClick={deleteComment}
          title="Are you want Delete this comment"
          action="Delete"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default FeedComments;
