import axios from "axios";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { GrClose } from "react-icons/gr";

const PostAsMultiMedia = ({
  descriptions,
  setDescriptions,
  userId,
  getFeeds,
  setAnyTypePost,
}) => {
  const [selectedFiles, setSelectedFiles] = useState("");
  const [showPostButton, setShowPostButton] = useState(false);
  const [postId, setPostId] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
    }
  };

  const createPost = (is_published) => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/post/create",
      headers: { "Content-Type": "application/json" },
      data: {
        post_user: userId,
        post_type: "multimedia",
        post_description: descriptions,
        post_location: "global",
        location_id: null,
        is_published: is_published,
        comment_condition: "string",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setPostId(response?.data?.post_id);
        setShowPostButton(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const UploadFile = () => {
    const formData = new FormData();
    Array.from(selectedFiles).forEach((file) => {
      formData.append("files", file);
    });

    axios
      .post(`https://retpro.catax.me/post/${postId}/upload-files`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success(response?.data?.message);
        getFeeds();
        setAnyTypePost(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.detail);
      });
  };

  const openFileInput = () => {
    // Programmatically trigger click on file input
    fileInputRef.current.click();
  };

  console.log(postId, "postId");
  console.log(selectedFiles, "select");
  return (
    <div className="mx-5  flex flex-col items-center justify-center ">
      <div className="mt-10 w-full">
        {selectedFiles && (
          <div>
            <textarea
              value={descriptions}
              onChange={(e) => setDescriptions(e.target.value)}
              className="border border-gray-200 text-xs w-full h-10  p-2 rounded"
              placeholder="Write something about post.."
            />
          </div>
        )}
        <input
          type="file"
          onChange={handleFileChange}
          multiple // If you want to allow multiple file selection
          style={{ display: "none" }}
          id="fileInput" // Connect input to button
          ref={fileInputRef}
        />
        <div className="flex">
          <label htmlFor="fileInput">
            <button
              className="border py-2 px-4  text-xs rounded-full bg-[#773f6c] text-white"
              onClick={openFileInput}
            >
              Upload from computer
            </button>
          </label>
          <div>
            {selectedFiles && (
              <div className=" text-xs">
                <h2 className="text-sm font-bold">Selected Files:</h2>
                {/* <ul>
                  {selectedFiles.map((item, index) => (
                    <li key={index}>{`File ${index + 1}: ${
                      fileInputRef?.current?.files[index]?.name
                    }`}</li>
                  ))}
                </ul> */}
              </div>
            )}
          </div>
        </div>
        {selectedFiles && (
          <div className="flex justify-between mx-10 mt-5 gap-5">
            <button
              onClick={() => createPost(false)}
              className="bg-[#773f6c] text-white px-4 py-2 rounded-lg"
            >
              Draft
            </button>
            {showPostButton ? (
              <button
                onClick={UploadFile}
                className="bg-[#773f6c] text-white px-4 py-2 rounded-lg"
              >
                Post
              </button>
            ) : (
              <button
                onClick={() => createPost(true)}
                className="bg-[#773f6c] text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAsMultiMedia;
