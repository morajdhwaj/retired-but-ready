import axios from "axios";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { GrClose } from "react-icons/gr";

const PostAsMultiMedia = ({
  descriptions,
  setDescriptions,
  userId,
  setAnyTypePost,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showPostButton, setShowPostButton] = useState(false);
  const [postId, setPostId] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files));
    // const fileArray = Array.from(files);

    // Promise.all(
    //   fileArray.map((file) => {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();

    //       reader.onload = (e) => {
    //         resolve(e.target.result);
    //       };

    //       reader.onerror = (error) => {
    //         reject(error);
    //       };

    //       reader.readAsDataURL(file);
    //     });
    //   })
    // )
    //   .then((results) => {
    //     // results is an array of data URLs
    //     setSelectedFiles(results);
    //   })
    //   .catch((error) => {
    //     console.error("Error reading files:", error);
    //   });
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

  const uploadFile = () => {
    const form = new FormData();

    const options = {
      method: "POST",
      url: `https://retpro.catax.me/post/${postId}/upload-files?publish=true`,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
      },
      file: selectedFiles,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setAnyTypePost(false);
      })
      .catch(function (error) {
        console.error(error);
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
        {selectedFiles.length > 0 && (
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
            {selectedFiles.length > 0 && (
              <div className=" text-xs">
                <h2 className="text-sm font-bold">Selected Files:</h2>
                <ul>
                  {selectedFiles.map((dataUrl, index) => (
                    <li key={index}>{`File ${index + 1}: ${
                      fileInputRef?.current?.files[index]?.name
                    }`}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {selectedFiles.length > 0 && (
          <div className="flex justify-between mx-10 mt-5 gap-5">
            <button
              onClick={() => createPost(false)}
              className="bg-[#773f6c] text-white px-4 py-2 rounded-lg"
            >
              Draft
            </button>
            {showPostButton ? (
              <button
                onClick={uploadFile}
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
