"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { UserIdContext } from "@/context/UserIdContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RiGroup2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import toast from "react-hot-toast";

const SideConnectionComp = () => {
  const router = useRouter();
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [request, setRequest] = useState([]);
  const [recommendedConnectionsData, setRecommendedConnectionsData] = useState(
    []
  );

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userIdFromContext]); // Run only once when component mounts

  // RECOMMENDED GROUP API ---------------------------------------------

  useEffect(() => {
    if (userId) {
      getRecommendedConnections();
      getRequest();
    }
  }, [userId]);

  const getRecommendedConnections = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/network/suggestions?user_id=${userId}`
      );
      setRecommendedConnectionsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error, "this error get from recommended group api aman");
    }
  };
  const showAllRecommendation = () => {
    router.push("/connections-page");
  };

  const playSound = () => {
    const audio = new Audio("/connect.mp3");
    audio.play();
  };

  const mapData = recommendedConnectionsData.slice(0, 3);

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
        console.log(response.data, "this is connected to the server data");
        toast.success(response?.data?.message);
        playSound();
        getRecommendedConnections();
        getRequest();
      })
      .catch(function (error) {
        console.error(error);
        toast.error("this is an error");
        // toast.error(error?.response?.data?.detail);
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
        getRecommendedConnections();
        getRequest();
      })
      .catch(function (error) {
        console.error(error);
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

  return (
    <div className="right-0 sm:right-4 lg:right-6 md:right-12 md:fixed  w-[40vw]  lg:w-[30vw]   h-[80vh] hidden md:block ">
      <div className="lg:px-10 sm:px-5 h-full   lg:w-[28vw ">
        <div className="rounded-lg h-full flex flex-col sm:flex sm:flex-col md:flex md:flex-col md:items-center  py- gap-  border bg-white">
          <div className="text-center text-lg font-medium">
            <h1 className="text-md pt-3 pb-2 font-semibold">
              People you may know
            </h1>
          </div>
          <div className="border-2 mt-2 border-gray-200  w-full" />
          <div className="max-h-[65vh] sm:px-5 w-full">
            {mapData.map((data) => (
              <div key={data._id} className="w-full py-1 ">
                <div className="mt- flex justify-between gap-3 p-2  w-full md:flex md:flex-col mx-1">
                  <div className="flex">
                    {/* <Link href={`/group-page/${data?._id}`}> */}
                    <Link href={`/profile/${data?._id}`}>
                      <div className="flex items-center justify-center gap-2">
                        {data?.user_image ? (
                          <Image
                            alt="rtr-pic"
                            src={data?.user_image}
                            height={50}
                            width={50}
                            className="w-18 h-18 rounded-full border-2 border-gray-200"
                          />
                        ) : (
                          <FaUserCircle color="gray" size={50} />
                        )}
                        {/* <div className="font-semibold">
                          <h2>{data.user_display_name}</h2>
                          <p className="text-gray-500">
                            {data.last_designation}
                          </p>
                        </div> */}
                      </div>
                    </Link>
                    <div>
                      <Link
                        href={`/group-page/${data?._id}`}
                        className=" mx-2 capitalize font-semibold text-lg "
                      >
                        {data.user_display_name}
                      </Link>
                      <p className=" mx-2 capitalize ">
                        {data.last_designation}
                        {/* {data.last_designation.length > 30 ? "..." : ""} */}
                      </p>
                      {/* <p className=" mx-2">{data.}</p> */}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-0 sm:gap-2  items-center mt-1 mb-2">
                    {request.some((item) => item?.to_user === data?._id) ? (
                      <button
                        className={`p-2 flex px-2 md:px-6 gap-2 border-2 rounded-md border-[#773fc6] bg-gray-200`}
                        onClick={() => deleteRequest(data?._id)}
                      >
                        <span className="text-black font-medium">
                          Requested
                        </span>
                      </button>
                    ) : (
                      <button
                        className={`p-2 flex px-2 md:px-4 gap-2 border-2 rounded-md border-[#773fc6]`}
                        onClick={() => handleConnect(data?._id)}
                      >
                        <MdPersonAddAlt1 className="text-md mt-1" />
                        <span className="text-black font-medium">Connect</span>
                      </button>
                    )}
                  </div>
                </div>
                <div className="border-2 mt- border-gray-200 mx-5" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-2 w-full h-full ">
            <button
              className="border-2 border-[#773fc6] w-40 h-10 text-lg font-medium text-center rounded-lg"
              onClick={() => showAllRecommendation()}
            >
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideConnectionComp;
