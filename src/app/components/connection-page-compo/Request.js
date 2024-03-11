import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Request = () => {
  const [invitation, setInvitation] = useState([]);

  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
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

  return (
    <div>
      <div className="bg-white p-2 rounded-md font-medium text-gray-400 border border-gray-300">
        {invitation.length === 0 ? "No Pending Request" : "Pending Invitation"}
      </div>
      {invitation.length === 0 ? (
        ""
      ) : (
        <div className="bg-gray-200 mt-2 rounded-md ">
          <div className="p-6">
            <h1> Invitation</h1>
            <div className=" border border-gray-300 font-thin w-full h-full rounded-lg"></div>
            {invitation.map((curEle, key) => (
              <div className="flex justify-between  w-fullbg-white ">
                <div className="flex mt-2">
                  <Link key={key} href={`/profile/${curEle.from_user}`}>
                    {curEle.from_user_image ? (
                      <Image
                        src={curEle.from_user_image}
                        width={30}
                        height={30}
                        alt="pic"
                        className="w-20 h-20 rounded-full border-2 border-gray-200"
                      />
                    ) : (
                      <FaUserCircle className="w-24 h-24 rounded-full border-2 border-gray-200 " />
                    )}
                  </Link>
                  <div className="mt-5 mx-2">
                    <Link href={`/profile/${curEle?.from_user}`}>
                      <h1>{curEle.from_user_full_name}</h1>
                    </Link>
                    <p>hello</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    className="w-20 h-10 rounded-md border-2 border-gray-300 "
                    onClick={() => handleIgnore(curEle.network_request_id)}
                  >
                    Ignore
                  </button>
                  <button
                    className="w-20 h-10 rounded-md border-[#D096CA] border-2"
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
