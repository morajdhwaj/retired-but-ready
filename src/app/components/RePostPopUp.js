"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { GrClose } from "react-icons/gr";

const RePostPopUp = ({ close, feed, userId, getFeeds }) => {
  const [userData, setUserData] = useState();
  const [description, setDescription] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `https://retpro.catax.me/user/profile/${userId}`
      );
      setUserData(res.data);
      console.log(res.data, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const createPost = () => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/post/create",
      headers: { "Content-Type": "application/json" },
      data: {
        post_user: userId,
        post_type: "text",
        post_description: description,
        post_location: "repost",
        location_id: feed?._id,
        is_published: true,
        comment_condition: "string",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("successfully Repost");
        getFeeds();
        close();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(
    feed,
    userData,
    "this is data from rePost modal ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
  );

  return (
    <div className="fixed inset-0 flex  justify-center z-50">
      <div className="absolute inset-0 bg-black/50 opacity-75"></div>
      <div
        className={`bg-white rounded-md z-50  h-[75vh]  w-full sm:w-4/5 md:w-3/5 xl:w-2/5 mt-20 sm:mr-20 px-4 py-2`}
      >
        <div className="flex justify-end m-2">
          <button onClick={close}>
            <GrClose color="#f96363" />
          </button>
        </div>
        <div className="mb-10">
          <div className=" ">
            <div className="flex items-center gap-2 ">
              <div className="">
                <Link href={`/profile/${userData?._id}`}>
                  {userData?.user_image ? (
                    <Image
                      alt=""
                      src={userData?.user_image}
                      height={20}
                      width={20}
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle size={50} />
                  )}
                </Link>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#773fc6]  ">
                  {userData?.user_display_name}
                </h2>
                <p className="text-xs">{userData?.last_designation}</p>
              </div>
            </div>
            <div className="">
              <textarea
                value={description}
                name=""
                id=""
                className="w-full border-2 p-2 rounded-lg mt-3 mb-2"
                placeholder="Share your thought .... "
                onChange={(e) =>
                  setDescription(
                    e.target.value.replace(/(^[a-zA-Z])|(\.\s*\w)/gm, (match) =>
                      match.toUpperCase()
                    )
                  )
                }
              ></textarea>
            </div>
          </div>
          <div className=" border-2 p-5  rounded-lg max-h-[290px] overflow-y-scroll">
            <div className="flex items-center gap-2 ">
              <div>
                <Link href={`/profile/${feed?.post_user?.id}`}>
                  {feed?.post_user?.user_image ? (
                    <Image
                      alt=""
                      src={feed?.post_user?.user_image}
                      height={50}
                      width={50}
                      className="w-16 h-16 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle size={50} />
                  )}
                </Link>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#773fc6]  ">
                  {feed?.post_user?.user_display_name}
                </h2>
                <p className="text-xs">{feed?.post_user?.last_designation}</p>

                <div className="flex gap-10">
                  {dayjs().date() -
                    dayjs(new Date(feed?.publish_time + "Z")).date() <
                  2 ? (
                    <p className="text-xs">
                      Published at:
                      {dayjs(new Date(feed?.publish_time + "Z")).fromNow()}
                    </p>
                  ) : (
                    <p className="text-xs">
                      Published at:{" "}
                      {dayjs(new Date(feed?.publish_time + "Z")).format(
                        "DD-MM-YYYY HH:mm a"
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2">
              {/* <p className="">{feed?.post_description}</p> */}
              <div className="my-5">
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      feed?.post_description &&
                      feed?.post_description.replace(
                        /(https?:\/\/[^\s]+)/g,
                        '<a class="text-blue-600" href="$1" target="_blank">$1</a>'
                      ),
                  }}
                />
              </div>
              {feed?.post_media && (
                <div className="flex items-center justify-center">
                  {["png", "jpeg", "jpg"].includes(
                    feed?.post_media[0].type
                  ) && (
                    <Image
                      alt=""
                      src={feed?.post_media[0]?.url}
                      height={200}
                      width={200}
                      className=""
                    />
                  )}

                  {feed?.post_media[0].type == "mp4" && (
                    <video
                      className="cursor-pointer"
                      controls
                      style={{ width: "18%", height: "20%" }}
                    >
                      <source src={feed?.post_media[0]?.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
          <button
            className="bg-[#773fc6] text-white px-4 py-2 rounded-lg"
            onClick={createPost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default RePostPopUp;
