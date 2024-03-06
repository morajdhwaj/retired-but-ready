import axios from "axios";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { GrClose } from "react-icons/gr";
import Loader from "../Loader";

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
  const [postLoading, setPostLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const filteredFiles = Array.from(files).filter((file) => {
        const fileType = file.type.split("/")[1];
        const validTypes = ["png", "jpeg", "jpg", "mp4"];
        const fileSize = file.size / (1024 * 1024);
        if (validTypes.includes(fileType) && fileSize <= 20) {
          return true;
        } else {
          if (!validTypes.includes(fileType)) {
            toast.error("Please upload only PNG, JPEG, or MP4 files.");
          } else if (fileSize > 20) {
            toast.error("Please upload files smaller than 20MB.");
          }
          return false;
        }
      });
      setSelectedFiles(filteredFiles);
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
        setPostId(response?.data?.post_id);
        setShowPostButton(true);
        if (is_published == false) {
          setAnyTypePost(false);
        }
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const UploadFile = (publish) => {
    setPostLoading(true);
    const formData = new FormData();
    Array.from(selectedFiles).forEach((file) => {
      formData.append("files", file);
    });

    axios
      .post(
        `https://retpro.catax.me/post/${postId}/upload-files?publish=${publish}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        toast.success(response?.data?.message);
        getFeeds();
        setAnyTypePost(false);
        setPostLoading(false);

        setUploadProgress(0);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.detail);
        setPostLoading(false);

        setUploadProgress(0);
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
      {postLoading ? (
        <div className="mt-10 w-full flex flex-col gap-2 items-center justify-center text-black">
          <Loader />
          <div>Uploading: {uploadProgress}%</div>
        </div>
      ) : (
        <div className="mt-10 w-full">
          {selectedFiles?.length !== 0 && (
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
          <div className="flex items-center mt-5">
            <label htmlFor="fileInput">
              <button
                className="border py-2 px-4  text-xs rounded-full bg-[#773f6c] text-white"
                onClick={openFileInput}
              >
                Upload from computer
              </button>
            </label>
            <div className=" mx-5 p-3">
              {selectedFiles?.length !== 0 && (
                <div className=" text-xs">
                  <h2 className="text-sm font-bold">Selected Files:</h2>
                  <ul>
                    <li>Name : {selectedFiles[0]?.name}</li>
                    <li>
                      Size: {Math.round(selectedFiles[0]?.size / 1024)} KB
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {selectedFiles?.length !== 0 && (
            <div className="flex justify-between mx-10 mt-5 gap-5">
              {showPostButton ? (
                <button
                  onClick={() => UploadFile(false)}
                  className="bg-[#773f6c] text-white px-4 py-2 rounded-lg"
                >
                  Save as Draft
                </button>
              ) : (
                <div></div>
              )}
              {showPostButton ? (
                <button
                  onClick={() => UploadFile(true)}
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
      )}
    </div>
  );
};

export default PostAsMultiMedia;
