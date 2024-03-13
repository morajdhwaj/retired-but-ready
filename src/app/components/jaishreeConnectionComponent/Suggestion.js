"use-client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { FaSatellite } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { SiHsbc } from "react-icons/si";
import { MdOutlineJoinInner } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import ProfileConnection from "./ProfileConnection";
import WorkConnection from "./WorkConnection";
import HiringConnection from "../anushkaConnectionComponent/HiringConnection";
import BestConnection from "../anushkaConnectionComponent/BestConnection";
import MyConnection from "./MyConnection";
import Request from "../connection-page-compo/Request";
import axios from "axios";
import { MdPersonAddAlt1 } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import GpsConnection from "./GpsConnection";

const Suggestion = () => {
  const [suggestionData, setSuggestionData] = useState([]);
  const [userId, setUserId] = useState("");
  const [request, setRequest] = useState([]);
  const [remove, setRemove] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
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

  // const handleToggle = (index) => {
  //   setSuggestionData([]);
  //   activePage === index ? setActivePage(0) : setActivePage(index);
  // };

  return (
    <div className="">
      <Request />
      <div className="  mt-52 sm:mt-5 md:mt-5 lg:mt-8 flex justify-between items-start  bg-scroll ">
        <div
          className="hover:border-gray-400 hover:border-b-2 "
          onClick={() => handleToggle(1)}
        >
          <div className="bg-gray-300 w-20  h-20 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-14  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>

            <FaSatellite className=" mx-6 mt-2 size-8 fill-red-500" />
          </div>
          <h1 className="text-center text-xs font-medium mt-2">
            Based on my
            <br /> GPS location
          </h1>
        </div>

        <div
          className="hover:border-gray-400 hover:border-b-2 "
          onClick={() => handleToggle(2)}
        >
          <div className="bg-gray-300 w-20  h-20 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-14  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                14k+
              </p>
            </div>
            <ImProfile className=" mx-6 mt-2 size-8 fill-pink-500" />
          </div>
          <h1 className="text-center text-xs font-medium mt-2">
            Based on my
            <br /> Profile
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2 "
          onClick={() => handleToggle(3)}
        >
          <div className="bg-gray-300 w-20  h-20 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-14  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                16k+
              </p>
            </div>
            <FaGlobe className=" mx-6 mt-2 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-xs font-medium mt-2">
            Based on my <br />
            Connectios
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2 "
          onClick={() => handleToggle(4)}
        >
          <div className="bg-gray-300 w-20  h-20 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-14  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaSearchLocation className=" mx-6 mt-2 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-xs font-medium mt-2">
            Based on my
            <br /> Hiring
          </h1>
        </div>
        <div
          className="hover:border-gray-400 hover:border-b-2 "
          onClick={() => handleToggle(5)}
        >
          <div className="bg-gray-300 w-20  h-20 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border  border-red-500 w-10 h-4 mx-14  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                10k+
              </p>
            </div>
            <FaSearchLocation className=" mx-6 mt-2 size-8 fill-orange-500" />
          </div>
          <h1 className="text-center text-xs font-medium mt-2">
            Based on my
            <br /> Work experience
          </h1>
        </div>

        <div
          className="hover:border-gray-400 hover:border-b-2 "
          onClick={() => handleToggle(6)}
        >
          <div className="bg-gray-300 w-20  h-20 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-14  ">
              <p className="text-xs flex items-center justify-center font-semibold">
                20k+
              </p>
            </div>
            <IoPeopleSharp className=" mx-6 mt-2 size-8 fill-green-500" />
          </div>
          <h1 className="text-center text-xs font-medium mt-2">
            Based on my
            <br /> best matches
          </h1>
        </div>
      </div>
      <h1 className="mt-5 text-black font-medium text-sm">
        {suggestionData.length} Suggestion
      </h1>
      <div className=" border border-[#D9D9D9] w-[10%] h-0.3 mt-2" />

      <div className="grid grid-col-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-y-14 gap-x-16  ">
        {(showAll ? suggestionData : suggestionData.slice(0, 12)).map(
          (cardElem) => (
            <div className="border  border-gray-300 shadow-lg  rounded-lg">
              <div className="  bg-[#B3CEE2] h-20 ">
                <div className="flex justify-end ">
                  <IoMdCloseCircle className="size-6 " />
                </div>

                <div className="flex items-center justify-center pt-2">
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
                      <FaUserCircle className="w-20 h-20 rounded-full border-2 border-gray-200 " />
                    )}
                  </Link>
                </div>
              </div>
              <Link href={`/profile/${cardElem?._id}`}>
                <h1 className="mt-10 flex items-center justify-center font-sans text-xl">
                  {cardElem.user_display_name}
                </h1>
              </Link>
              <p className="  text-center text-xs mt-2 text-gray-500">
                postion
              </p>
              <p className=" text-center text-sm text-gray-500"> text of the</p>

              <div className="flex justify-center items-center mt-4 gap-1">
                <h1 className="text-gray-500 text-sm font-medium ">
                  19 connections
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-0 sm:gap-2 md:gap-2 lg:gap-2 items-center mt-2 mb-4">
                {request.some((item) => item.to_user === cardElem._id) ? (
                  <button
                    className={`p-2 flex px-2 md:px-6 gap-2 border-2 rounded-md border-[#773fc6] bg-gray-200`}
                    onClick={() => deleteRequest(cardElem._id)}
                  >
                    <span className="text-black font-medium">Requested</span>
                  </button>
                ) : (
                  <button
                    className={`p-2 flex px-2 md:px-6 gap-2 border-2 rounded-md border-[#773fc6]`}
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
      <div className="mt-2 ">
        <h1
          className="flex justify-center items-center text-[#773fc6] font-medium cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          see {showAll ? "less" : "all"}
        </h1>
      </div>

      <GpsConnection />
      <ProfileConnection />
    </div>
  );
};

export default Suggestion;
