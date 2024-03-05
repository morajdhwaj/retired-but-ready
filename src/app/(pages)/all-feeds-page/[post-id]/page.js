"use client";

import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const page = ({ params }) => {
  const postId = params["post-id"];
  const [feed, setFeed] = useState([]);

  console.log(postId);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/post/${postId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setFeed(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex m-20 gap-2">
        <div className="">
          <Link href={`/profile/${feed?.post_user?.id}`}>
            {feed?.post_user?.user_image ? (
              <Image
                alt=""
                src={feed?.post_user?.user_image}
                height={50}
                width={50}
                className="rounded-full"
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
        </div>
      </div>
      <div className="m-20">
        <div className="my-5">
          <p
            dangerouslySetInnerHTML={{
              __html:
                feed?.post_description &&
                feed?.post_description.replace(
                  /(https?:\/\/[^\s]+)/g,
                  '<a class="text-blue-600" href="$1">$1</a>'
                ),
            }}
          />
        </div>
        {feed.post_media && (
          <div className="">
            {["png", "jpeg", "jpg"].includes(feed?.post_media[0].type) && (
              <Image
                alt=""
                src={feed?.post_media[0]?.url}
                height={500}
                width={500}
                className=""
              />
            )}

            {feed?.post_media[0].type == "mp4" && (
              <video
                className="cursor-pointer"
                controls
                style={{ width: 500, height: 500 }}
              >
                <source src={feed?.post_media[0]?.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
