import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const Request = () => {
  const [invitation, setInvitation] = useState([]);
  const [accept, setAccept] = useState();
  const [ignore, setIgnore] = useState();
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
        setInvitation(response.data.pending_network_requests);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log("data of invitation", invitation.from_user_full_name);
  console.log("sachin", invitation);
  console.log(userId, "userid");

  const options = {
    method: "PUT",
    url: `https://retpro.catax.me/accept-request/${accept}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success(response?.data?.message);
      getInvitation();
    })
    .catch(function (error) {
      console.error(error);
    });
  const handleAccept = (networkRequestId) => {
    setAccept(networkRequestId);
    console.log("Accepting request with ID:", networkRequestId);
    // Add logic to handle accept action
  };

  const options1 = {
    method: "PUT",
    url: `https://retpro.catax.me/reject-request/${ignore}`,
  };

  axios
    .request(options1)
    .then(function (response) {
      console.log(response.data);
      toast.success(response?.data?.message);
      getInvitation();
    })
    .catch(function (error) {
      console.error(error);
    });
  const handleIgnore = (networkRequestId) => {
    setIgnore(networkRequestId);
    console.log("Ignoring request with ID:", networkRequestId);
    // Add logic to handle ignore action
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
              <div className="flex justify-between  w-fullbg-white " key={key}>
                <div className="flex mt-2">
                  <Image
                    src="/assets/Ellipse-39.png"
                    width={50}
                    height={50}
                    alt="pic"
                    className="w-24 h-24 rounded-full  "
                  />
                  <div className="mt-5 mx-2">
                    <h1>{curEle.from_user_full_name}</h1>
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
