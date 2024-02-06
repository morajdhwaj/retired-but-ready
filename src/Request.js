"use-client";
import React, { useState } from "react";

import Image from "next/image";

const invitation = [
  {
    name: "Anushka Gandhi",
    Information: "Frontend Developer",
  },
  {
    name: "Jayshree Nishad",
    Information: "Frontend Developer",
  },
];

const Request = () => {
  const [first, setFirst] = useState(invitation);

  return (
    <div>
      <div className="bg-white border-2 border-gray-300 w-full h-full rounded-lg">
        <div className="flex  justify-between mx-5 text-gray-500 mt-2">
          <h2> Invitation </h2>
          <h2>See all </h2>
        </div>
        <div className="border-b-2 border-gray-200 h-1 w-full mt-2" />
        {first.map((card, key) => (
          <div className="flex     justify-between  border-b-2 border-gray-200 w-full">
            <div className="flex  flex-wrap mt-2 ">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <h1>{card.name}</h1>
                <p>{card.Information}</p>
              </div>
            </div>
            <div className="flex mx-2 gap-2 items-center">
              <button className="p-1 rounded-full hover:border-black hover:border-2">
                Ignore
              </button>
              <button className="p-1 rounded-full hover:border-black hover:border-2">
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
