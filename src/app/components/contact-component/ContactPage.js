"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import axios from "axios";

const ContactPage = () => {
  const [contact, setContact] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getContact();
  }, [userId]);

  const getContact = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-network/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setContact(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(contact, "ye contact ka data hai");
  console.log(userId, "userid");

  return (
    <div>
      {contact.length > 0 &&
        contact.map((item, index) => (
          <div className="flex " key={index}>
            <div className="w-3/4   flex-wrap md:flex lg:flex justify-between items-center  pb-5">
              <div className="sm:w-[20%] lg:w-[10%] ">
                <Image
                  width={60}
                  height={60}
                  alt="pic"
                  src={
                    item.from_user_image
                      ? item.from_user_image
                      : "/assets/Ellipse-39.png"
                  }
                  className="  rounded-full  "
                />
              </div>
              <div className="   flex-wrap sm:flex md:flex lg:flex justify-between items-center w-[90%]  border-[#E3CCE1] border-b  p-2">
                <div className="">
                  <h1 className="text-[#2C2C2C] text-sm font-medium">
                    {item.from_user_full_name}
                  </h1>
                  <p className="text-[#888888] font-medium text-xs">
                    Oppo Company
                  </p>

                  <p className="text-[#888888] font-medium text-xs mt-2">
                    2 days ago
                  </p>
                </div>

                <button className="border border-[#A8359C] text-black rounded-md p-2">
                  Following
                </button>
              </div>
            </div>

            <div className="w-1/4 gap-4  flex sm:flex-row lg:flex items-center justify-center  p-5">
              <button className="text-2xl text-gray-500">
                <BsThreeDotsVertical />
              </button>
              <button className="text-2xl text-gray-500">
                <IoChatbubbleEllipsesOutline />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContactPage;
