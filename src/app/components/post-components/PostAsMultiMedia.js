import axios from "axios";
import React, { useState, useRef } from "react";
import { GrClose } from "react-icons/gr";

const PostAsMultiMedia = ({ descriptions, setDescriptions, createPost }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    Promise.all(
      fileArray.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            resolve(e.target.result);
          };

          reader.onerror = (error) => {
            reject(error);
          };

          reader.readAsDataURL(file);
        });
      })
    )
      .then((results) => {
        // results is an array of data URLs
        setSelectedFiles(results);
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };

  const handleUpload = () => {
    // Perform upload logic using axios or any other method
    // You can use the selectedFiles array for uploading
    console.log("Selected Files:", selectedFiles);

    // Add your upload logic here
    // Example: Use Axios to send files to the server
    const formData = new FormData();
    selectedFiles.forEach((dataUrl, index) => {
      formData.append(`file${index + 1}`, dataUrl);
    });

    axios
      .post("/upload", formData)
      .then((response) => {
        // Handle successful upload
        console.log("Upload successful:", response.data);
      })
      .catch((error) => {
        // Handle upload error
        console.error("Error uploading files:", error);
      });
  };

  const openFileInput = () => {
    // Programmatically trigger click on file input
    fileInputRef.current.click();
  };

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
            <button
              onClick={() => createPost(true)}
              className="bg-[#773f6c] text-white px-4 py-2 rounded-lg"
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAsMultiMedia;
