"use-client";
import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";
// import { FaSatellite } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";
// import { FaSearchLocation } from "react-icons/fa";
// import { IoPeopleSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

// import ProfileConnection from "./ProfileConnection";

import Request from "../connection-page-compo/Request";
import axios from "axios";
import { MdPersonAddAlt1 } from "react-icons/md";
// import { ImProfile } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
// import GpsConnection from "./GpsConnection";
import { UserIdContext } from "@/context/UserIdContext";

const Suggestion = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [suggestionData, setSuggestionData] = useState([]);
  const [userId, setUserId] = useState("");
  const [request, setRequest] = useState([]);
  const [remove, setRemove] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setUserId(userIdFromContext);
    getSuggestions();
    getRequest();
  }, [userId]);

  const getSuggestions = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/network/suggestions?user_id=${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSuggestionData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleConnect = (to_user_id) => {
    const options = {
      method: "POST",
      url: `https://retpro.catax.me/send-request/${userId}/${to_user_id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        from_user: "string",
        from_user_image: "string",
        from_user_full_name: "string",
        is_premium_user: null,
        is_verified_user: null,
        to_user: "string",
        to_user_image: "string",
        to_user_full_name: "string",
        personal_message: null,
        network_sent_on: null,
        network_status: "string",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        playSound();
        getSuggestions();
        getRequest();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  const getRequest = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-network-request/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setRequest(response.data.outgoing_requests);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const deleteRequest = (id) => {
    const filterItem = request.filter((item) => item.to_user === id);

    if (filterItem.length > 0) {
      const data = filterItem[0].network_request_id;
      removeRequest(data);

      console.log(data, "this is data id");
    } else {
      console.log("No item found for the given id.");
    }
  };

  const removeRequest = (request_id) => {
    console.log("request_id", request_id);
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/remove-request/${request_id}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "response data");
        toast.success(response?.data?.message);
        getSuggestions();
        getRequest();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const playSound = () => {
    const audio = new Audio("/connect.mp3");
    audio.play();
  };

  const RemoveSuggestion = (id) => {
    setSuggestionData(suggestionData.filter((user) => user._id !== id));
  };

  console.log(suggestionData, "suggestion");
  return (
    <div className="">
      {/* <div className="bg-yellow-300 mt-5 gap-5 sm:mt-5 md:mt-5 lg:mt-8 flex justify-center items-center sm:justify-center sm:items-center md:flex-nowrap md:flex md:justify-between bg-scroll">
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(1)}
        >
          <div className="bg-gray-300 w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-gray-400 mt-5 md:mt-0">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-7 md:mx-14">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaSatellite className="mx-2 md:mx-6 md:mt-2 size-5 md:size-8 fill-red-500" />
          </div>
          <h1 className="text-center text-xs md:font-medium mt-2">
            Based on my
            <br /> GPS location
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(2)}
        >
          <div className="bg-gray-300 w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-gray-400 mt-5 md:mt-0">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-7 md:mx-14">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <ImProfile className="mx-2 md:mx-6 md:mt-2 size-5 md:size-8 fill-red-500" />
          </div>
          <h1 className="text-center text-xs md:font-medium mt-2">
            Based on my
            <br /> Profile
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(3)}
        >
          <div className="bg-gray-300 w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-gray-400 mt-5 md:mt-0">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-7 md:mx-14">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaGlobe className="mx-2 md:mx-6 md:mt-2 size-5 md:size-8 fill-red-500" />
          </div>
          <h1 className="text-center text-xs md:font-medium mt-2">
            Based on my <br />
            Connections
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(4)}
        >
          <div className="bg-gray-300 w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-gray-400 mt-5 md:mt-0">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-7 md:mx-14">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaSearchLocation className="mx-2 md:mx-6 md:mt-2 size-5 md:size-8 fill-red-500" />
          </div>
          <h1 className="text-center text-xs md:font-medium mt-2">
            Based on my
            <br /> Hiring
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(5)}
        >
          <div className="bg-gray-300 w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-gray-400 mt-5 md:mt-0">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-7 md:mx-14">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaSearchLocation className="mx-2 md:mx-6 md:mt-2 size-5 md:size-8 fill-red-500" />
          </div>
          <h1 className="text-center text-xs md:font-medium mt-2">
            Based on my
            <br /> Work experience
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2"
          onClick={() => handleToggle(6)}
        >
          <div className="bg-gray-300 w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-gray-400 mt-5 md:mt-0">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-7 md:mx-14">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <IoPeopleSharp className="mx-2 md:mx-6 md:mt-2 size-5 md:size-8 fill-red-500" />
          </div>
          <h1 className="text-center text-xs md:font-medium mt-2">
            Based on my
            <br /> best matches
          </h1>
        </div>
      </div> */}
      <div>
        <h1 className="mt-5 text-black font-medium text-sm">
          {suggestionData.length} Suggestions
        </h1>
        <div className=" border border-[#D9D9D9] w-[10%] h-0.3" />
      </div>

      <div className=" flex flex-wrap gap-10 w-full  justify-center">
        {(showAll ? suggestionData : suggestionData.slice(0, 15)).map(
          (cardElem) => (
            <div className="border h-72 w-60 xl:w-2/12 border-gray-300 shadow-lg  self-start rounded-lg mt-5 ">
              <div className="  bg-[#B3CEE2] h-20 ">
                <div className="flex p-2 justify-end ">
                  <button onClick={() => RemoveSuggestion(cardElem._id)}>
                    <IoMdCloseCircle className="size-6 " />
                  </button>
                </div>

                <div className="flex items-center justify-center pt-0">
                  <Link key={cardElem._id} href={`/profile/${cardElem._id}`}>
                    {cardElem.user_image ? (
                      <Image
                        src={cardElem.user_image}
                        width={40}
                        height={40}
                        alt="pic"
                        className="w-20 h-20 rounded-full border-2 border-gray-200"
                      />
                    ) : (
                      <FaUserCircle
                        color="gray"
                        className="w-20 h-20 rounded-full border-2 border-gray-200 "
                      />
                    )}
                  </Link>
                </div>
              </div>
              <Link href={`/profile/${cardElem?._id}`}>
                <h1 className="mt-14 flex items-center justify-center  text-lg font-bold px-2">
                  {cardElem.user_display_name
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h1>
              </Link>
              <p className="text-center p-2 text-xs">
                {" "}
                {cardElem?.last_designation}
              </p>

              <div className="flex flex-wrap justify-center gap-0 sm:gap-2 md:gap-2 lg:gap-2 items-center mt-8 mb-4">
                {request.some((item) => item.to_user === cardElem._id) ? (
                  <button
                    className={`p-2 flex px-2 md:px-6 gap-2 border-2 rounded-md border-[#773fc6] bg-gray-200`}
                    onClick={() => deleteRequest(cardElem._id)}
                  >
                    <span className="text-black font-medium">Requested</span>
                  </button>
                ) : (
                  <button
                    className={`p-2 flex px-2 md:px-4 gap-2 border-2 rounded-md border-[#773fc6]`}
                    onClick={() => handleConnect(cardElem._id)}
                  >
                    <MdPersonAddAlt1 className="text-md mt-1" />
                    <span className="text-black font-medium">Connect</span>
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
      {suggestionData.length > 15 && (
        <div className="mt-10 ">
          <h1
            className="flex justify-center items-center hover:text-[#773fc6] font-medium cursor-pointer "
            onClick={() => setShowAll(!showAll)}
          >
            See {showAll ? "less" : "all"}
          </h1>
        </div>
      )}
      {/* <GpsConnection />
      <ProfileConnection /> */}
    </div>
  );
};

export default Suggestion;
