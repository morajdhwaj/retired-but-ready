"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import PopUp from "@/app/components/PopUp";
import { UserIdContext } from "@/context/UserIdContext";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  const { userIdFromContext, setChatIdContext } = useContext(UserIdContext);
  const [contact, setContact] = useState([]);
  const [userId, setUserId] = useState("");
  const [selectedFollower, setSelectedFollower] = useState(null);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userIdFromContext]);

  useEffect(() => {
    if (userId) {
      getContact();
    }
  }, [userId]);

  const getContact = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-network/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "this is response from get contac");
        setContact(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(contact, "ye contact ka data hai");
  console.log(userId, "userid");

  const handleDeleteModal = (follower) => {
    setSelectedFollower(follower._id);
  };

  const setChatId = (chatId) => {
    setChatIdContext(chatId);
    router.push("/message-page");
  };

  const removeContact = () => {
    // Implement your logic to remove the selected follower
    console.log("Removing contact:", selectedFollower);
    // Close the modal after removing the contact
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/remove-request/${selectedFollower}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
        setSelectedFollower(null);
        getContact();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(
    contact,
    "this is contact for AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  );

  return (
    <div>
      {contact.length > 0 &&
        contact.map((item) => (
          <div
            className="w-full p-2 flex flex-col sm:flex-row lg:flex-row border-b border-[#E3CCE1] mt-5"
            key={item?._id}
          >
            <div className="w-full sm:w-[75%] lg:w-[75%] flex justify-between ">
              <div className="w-1/2  sm:w-[15%]  flex items-center justify-center">
                <Link href={`/profile/${item.user_id}`}>
                  {item?.user_image ? (
                    <Image
                      src={item?.user_image}
                      width={30}
                      height={30}
                      alt="pic"
                      className=" w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle
                      color="gray"
                      className=" w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-200 "
                    />
                  )}
                </Link>
              </div>
              <div className="w-1/2 sm:w-[85%]  ">
                <Link href={`/profile/${item?.user_id}`}>
                  <h1 className="text-[#2C2C2C] text-sm text-start font-medium mt-2">
                    {item?.user_full_name}
                  </h1>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-[25%] lg:w-[25%] flex justify-around items-center mt-2 sm:mt-0 lg:mt-0">
              <button
                className="border border-[#A8359C] text-black rounded-md  text-xs sm:text-sm p-2"
                onClick={() => handleDeleteModal(item)}
              >
                Remove
              </button>
              <button
                className="text-3xl sm:text-4xl text-gray-400"
                onClick={() => setChatId(item?.user_id)}
              >
                <IoChatbubbleEllipsesOutline />
              </button>
            </div>
          </div>
        ))}
      {selectedFollower && (
        <PopUp
          close={() => setSelectedFollower(null)}
          onClick={removeContact}
          title="Are you sure you want to remove this contact?"
          action="Delete"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default ContactPage;
