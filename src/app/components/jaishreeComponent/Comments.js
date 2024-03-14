import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { RiSpam2Fill } from "react-icons/ri";
import PopUp from "../PopUp";

const Comments = ({ postId, userId }) => {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [reportCommentId, setReportCommentId] = useState("");
  const [editCommentId, setEditCommentId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
        setComments(response.data);
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

  const AddReaction = (comment_id) => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/comments/add-reaction-to-comment",
      params: {
        comment_id: comment_id,
        user_id: userId,
        reaction_type: "reaction_like",
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
        comment_id: reportCommentId,
        reported_by: userId,
        spam_type: "hate_speech",
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

  console.log(postId, "post");
  console.log(commentId, "cccc");

  return (
    <div className=" w-full mt-5">
      <textarea
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)}
        className="w-full p-2 text-sm"
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
                alt="rtr-pic"
                src="/assets/Ellipse-39.png"
                height={50}
                width={50}
              />
            </div>
            <div className="flex border-gray-300 bg-white border rounded-b-lg w-full rounded-tr-lg p-2">
              <div className="w-full ">
                <div className="justify-between flex ">
                  <h2 className="text-sm font-semibold text-[#773fc6]  ">
                    {comment?.comment_by}
                  </h2>
                  <div>
                    {userId == comment.comment_by ? (
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
                        className="border p-2 text-xs"
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
                  <p className="text-xs font-medium text-gray-800 mt-4">
                    {comment?.comment_content}
                  </p>
                )}

                <div className="text-xs mt-4 flex gap-5">
                  <button onClick={() => AddReaction(comment._id)}>Like</button>
                  <button>Love</button>
                  {comment?.reaction_like?.length !== 0 && (
                    <p> {comment?.reaction_like?.length} Likes</p>
                  )}
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

export default Comments;
