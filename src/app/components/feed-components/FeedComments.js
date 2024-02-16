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
import ReplyCommentsComp from "./ReplyCommentsComp";
import { GrClose, GrGallery } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

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
        setComments(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const postComment = async () => {
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

  const AddReaction = (comment_id, type) => {
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
        setSelectedImage(null);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(selectedImage, "selected");
  return (
    <div className=" w-full mt-5 ">
      <div className=" flex w-full  justify-center  gap-5 ">
        <div className="w-full">
          <textarea
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            className="w-[100%] p-2 text-sm border rounded-xl flex items-center"
            placeholder="Leave your comments"
          />
          {selectedImage && (
            <div className="flex mt-5 gap-2">
              <Image
                alt=""
                src={URL.createObjectURL(selectedImage)}
                height={100}
                width={100}
                className=""
              />
              <div>
                {" "}
                <button onClick={() => setSelectedImage("")}>
                  {" "}
                  <GrClose />
                </button>
              </div>
            </div>
          )}
        </div>
        <label htmlFor="profile-picture" className="cursor-pointer">
          <div className="flex items-center justify-center mt-5">
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
      <button
        onClick={postComment}
        className="border border-[#773fc6] text-[#773fc6] px-4 py-2 rounded m-5"
      >
        Post
      </button>
      <div>
        {comments?.map((comment) => (
          <div key={comment?._id}>
            <div className="flex gap-2 mt-5">
              <div>
                {comment?.comment_by?.user_image ? (
                  <Image
                    alt=""
                    src={comment?.comment_by?.user_image}
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                ) : (
                  <FaUserCircle size={50} />
                )}
              </div>
              <div className="flex border-gray-300 bg-white border rounded-b-lg w-full rounded-tr-lg p-2">
                <div className="w-full ">
                  <div className="justify-between flex ">
                    <h2 className="text-sm font-semibold text-[#773fc6]  ">
                      {comment?.comment_by?.user_display_name}
                    </h2>
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
                          <BsThreeDotsVertical size={25} color="gray" />
                        </button>
                      ) : (
                        <button onClick={() => handleModal(comment?._id)}>
                          <RiSpam2Fill size={25} color="gray" />
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
                              delete
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
                          onChange={(e) => setEditComment(e.target.value)}
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
                      <p className="text-xs font-medium text-gray-800 mt-4">
                        {comment?.comment_content}
                      </p>
                      {comment?.comment_image && (
                        <Image
                          src={comment?.comment_image}
                          alt=""
                          height={100}
                          width={100}
                        />
                      )}
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(comment?.comment_timestamp)
                      .toLocaleTimeString("en-US", {
                        timeZone: "Asia/Kolkata",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .substring(0, 5)}
                  </p>

                  <div className="text-xs mt-4 flex gap-5">
                    <div className="flex gap-1 items-center justify-center">
                      {comment?.reaction_like?.length !== 0 && (
                        <p> {comment?.reaction_like?.length} </p>
                      )}
                      <button
                        onClick={() =>
                          AddReaction(comment?._id, "reaction_like")
                        }
                      >
                        {comment?.reaction_like?.some(
                          (user) => user.user_id === userId
                        ) ? (
                          <AiFillLike size={20} />
                        ) : (
                          <AiOutlineLike size={20} />
                        )}
                      </button>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                      {comment?.reaction_love?.length !== 0 && (
                        <p> {comment?.reaction_love?.length} </p>
                      )}
                      <button
                        onClick={() =>
                          AddReaction(comment?._id, "reaction_love")
                        }
                      >
                        {comment?.reaction_love?.some(
                          (user) => user.user_id === userId
                        ) ? (
                          <FaHeart size={20} />
                        ) : (
                          <CiHeart size={20} />
                        )}
                      </button>
                      <button
                        onClick={() => handleReply(comment?._id)}
                        className="text-xs ml-5"
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
