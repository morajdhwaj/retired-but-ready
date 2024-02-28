import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
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
          <div className="flex mt-5" key={index}>
            <div className="w-3/4  flex justify-between items-center">
              <div className="flex">
                <div className="">
                  <Image
                    // src="/assets/Ellipse-39.png"
                    width={50}
                    height={50}
                    alt="pic"
                    src={
                      item.from_user_image
                        ? item.from_user_image
                        : "/assets/Ellipse-39.png"
                    }
                    // className="  sm:w-1/5 md:w-1/5 p-1 rounded-full  "
                  />
                </div>
                <div className="">
                  <h1 className="text-[#2C2C2C] font-medium">
                    {item.from_user_full_name}
                  </h1>
                  <p className="text-[#888888] font-medium text-sm">
                    Oppo Company
                  </p>

                  <p className="text-[#888888] font-medium text-sm mt-2">
                    2 days ago
                  </p>
                </div>
              </div>

              <button className="border-2 border-[#A8359C]  rounded-md p-2">
                Following
              </button>
            </div>
            <div className="w-1/4  flex items-center justify-center">
              <div>
                <button className="text-2xl text-gray-500">
                  <BsThreeDotsVertical />
                </button>
                <button className="text-2xl text-gray-500">
                  <PiShareFatLight />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContactPage;
