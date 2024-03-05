import React, { useState, useEffect } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Network = () => {
  const [connection, setConnection] = useState([]);

  useEffect(() => {
    getConnection();
  }, []);

  const getConnection = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/my-network/657f020329ea526cdd7fb5c9",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setConnection(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log("ye connecton data h", connection);
  return (
    <div>
      <div className="mt-56 sm:mt-5 md:mt-5 lg:mt-10">
        <h1 className="text-[#374151] font-semibold text-sm">
          {connection.length} connections
        </h1>
      </div>
      {connection.map((currentElem, key) => (
        <div
          className=" flex justify-between  pb-2  border-gray-300 border-b-2 "
          key={key}
        >
          <div className="flex flex-wrap w-full gap-2 md:w-1/2 ">
            <Image
              src="/assets/Ellipse-39.png"
              width={50}
              height={50}
              alt="pic"
              className=" w-1/2  sm:w-1/5 md:w-1/5 p-1 rounded-full  "
            />

            <div className="mt-2">
              <h1 className="text-[#773FC6] font-medium">
                {currentElem.from_user_full_name}
              </h1>
              <p className="text-[#374151] font-medium text-sm">
                OPPO India Marketing Head,
              </p>
              <p className="text-[#374151] font-medium text-sm">
                Tech Connection India Pvt.Ltd.
              </p>
              <p className="text-[#374151] font-medium text-sm">
                Connected 2days ago
              </p>
            </div>
          </div>
          <div className="flex justify-end  w-1/2">
            <IoEllipsisVerticalSharp className="text-[#374151] font-medium size-5" />
            <Link href="/message-page">
              <IoIosSend className="text-[#333333] font-medium size-5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Network;
