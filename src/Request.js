import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const Request = () => {
  const [invitation, setInvitation] = useState([]);
  const [accept, setAccept] = useState();
  const [ignore, setIgnore] = useState();

  useEffect(() => {
    getInvitation();
  }, []);

  const getInvitation = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/my-network-request/657f020329ea526cdd7fb5c9",
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
      <div className="bg-white border-2 border-gray-300 w-full h-full rounded-lg">
        <div className="flex justify-between mx-5 text-gray-500 mt-2">
          {invitation.length === 0 ? "No Pending Request" : "Invitations "}
        </div>
        <div className="border-b-2 border-gray-200 h-1 w-full mt-2" />
        {invitation.map((curEle, key) => (
          <div
            className="flex justify-between  border-b-2 border-gray-200 w-full"
            key={key}
          >
            <div className="flex mt-2">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <h1>{curEle.from_user_full_name}</h1>
                <p>hello</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="w-24 h-10 rounded-full hover:border-black hover:border-2"
                onClick={() => handleIgnore(curEle.network_request_id)}
              >
                Ignore
              </button>
              <button
                className="w-24 h-10 rounded-full hover:border-black hover:border-2"
                onClick={() => handleAccept(curEle.network_request_id)}
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Request;
