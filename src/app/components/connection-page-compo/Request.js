import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { UserIdContext } from "@/context/UserIdContext";

const Request = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [invitation, setInvitation] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(userIdFromContext);
    getInvitation();
  }, [userId]);

  const getInvitation = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-network-request/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setInvitation(response.data.incoming_requests);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleAccept = (id) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/accept-request/${id}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        playSound();
        getInvitation();
        toast.success(response.data.message);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleIgnore = (id) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/reject-request/${id}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getInvitation();
        toast.success(response.data.message);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const playSound = () => {
    const audio = new Audio("/connect.mp3");
    audio.play();
  };

  return (
    <div>
      <div className="bg-white p-2 rounded-md font-medium text-gray-400 border border-[#E3E3E3]">
        {invitation.length === 0 ? "No Pending Request" : "Pending Invitation"}
      </div>
      {invitation.length === 0 ? (
        ""
      ) : (
        <div className="bg-[#FAFAFA] mt-2 rounded-md ">
          <div className="  p-1 sm:p-3 md:p-6">
            <h1> Invitation</h1>
            <div className=" border border-[#E3E3E3] font-thin w-full h-full rounded-lg"></div>
            {invitation.map((curEle, key) => (
              <div className=" flex  flex-wrap sm:flex sm:flex-nowrap justify-between items-center  w-full bg-white mt-5 p-2 ">
                <div className="flex  gap-5 pb-2 pt-2">
                  <Link key={key} href={`/profile/${curEle.from_user}`}>
                    <div className="">
                      {curEle.from_user_image ? (
                        <Image
                          src={curEle.from_user_image}
                          width={50}
                          height={50}
                          alt="pic"
                          className="w-16 h-16  rounded-full border-2 border-gray-200"
                        />
                      ) : (
                        <FaUserCircle
                          color="gray"
                          className="h-16 w-16 rounded-full border-2 border-gray-200  "
                        />
                      )}
                    </div>
                  </Link>
                  <div className="flex items-center justify-center ">
                    <Link href={`/profile/${curEle?.from_user}`}>
                      <h1 className="font-semibold">
                        {curEle.from_user_full_name}
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="flex gap-2 items-center mx-2">
                  <button
                    className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:shadow-lg"
                    onClick={() => handleIgnore(curEle.network_request_id)}
                  >
                    Ignore
                  </button>
                  <button
                    className=" px-4 py-2 rounded-md bg-[#773fc6] border text-white text-sm hover:shadow-lg "
                    onClick={() => handleAccept(curEle.network_request_id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
