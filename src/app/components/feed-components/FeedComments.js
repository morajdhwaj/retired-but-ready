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

const FeedComments = ({ postId, userId, getFeeds }) => {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [replyComments, setReplyComments] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [reportCommentId, setReportCommentId] = useState("");
  const [editCommentId, setEditCommentId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reportType, setReportType] = useState("hate_speech");

  useEffect(() => {
    getComments();
  }, [postId]);

  const handleDropdown = (comment_id, content) => {
    setShowDropDown(!showDropDown);
    setCommentId(comment_id);
    setEditComment(content);
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

  const postComment = () => {
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

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getComments();
        getFeeds();
        setInputComment("");
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
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

  const handleReplyComment = () => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/comments/add-comment",
      headers: { "Content-Type": "application/json" },
      data: {
        comment_location: "Global",
        parent_id: "string",
        comment_by: userId,
        comment_content: replyComments,
      },
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

  console.log(postId, "postddddd");
  console.log(comments, "comments");
  // console.log(commentId, "cccc");
  // console.log(reportType, "report type");

  return (
    <div className=" w-full mt-5">
      <textarea
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)}
        className="w-full p-2 text-sm border rounded-xl"
        placeholder="Leave your thoughts here"
      />
      <button
        onClick={postComment}
        className="border border-[#773fc6] text-[#773fc6] px-4 py-2 rounded"
      >
        Post
      </button>
      <div>
        {comments?.map((comment) => (
          <div className="flex gap-2 mt-5" key={comment?._id}>
            <div>
              <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={50}
                width={50}
              />
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
                          handleDropdown(comment?._id, comment.comment_content)
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
                      <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-50 px-2 ">
                        <div className="text-xs flex justify-end">
                          <button
                            className="hover:text-[#773fc6]"
                            onClick={() => setCommentId("")}
                          >
                            x
                          </button>
                        </div>

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
                <p className="text-xs font-medium">
                  Citrix XenApp,XenDesktop/VMware Mob...
                </p>
                <p className="text-xs text-gray-400">
                  {comment?.comment_timestamp}
                </p>

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
                  <div>
                    <p className="text-xs font-medium text-gray-800 mt-4">
                      {comment?.comment_content}
                    </p>
                  </div>
                )}

                <div className="text-xs mt-4 flex gap-5">
                  <div className="flex gap-1 items-center justify-center">
                    {comment?.reaction_like?.length !== 0 && (
                      <p> {comment?.reaction_like?.length} </p>
                    )}
                    <button
                      onClick={() => AddReaction(comment?._id, "reaction_like")}
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
                      onClick={() => AddReaction(comment?._id, "reaction_love")}
                    >
                      {comment?.reaction_love?.some(
                        (user) => user.user_id === userId
                      ) ? (
                        <FaHeart size={20} />
                      ) : (
                        <CiHeart size={20} />
                      )}
                    </button>
                    <button className="text-xs ml-5">Reply</button>
                  </div>
                </div>
              </div>
            </div>
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
      {/* <ReplyCommentsComp /> */}
    </div>
  );
};

export default FeedComments;
