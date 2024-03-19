"use client";
import React from "react";
import Image from "next/image";

const Groupsuggestion = () => {
  const suggestion = [
    { name: "Lorem Ipsum Doler" },
    { name: "Lorem xyz Doller" },
    { name: "  Marry com Doller" },
  ];
  return (
    <div className="bg-[#F2F2F2] mt-2 rounded-lg">
      <div className=" p-5 flex items-center ">
        <h1 className="text-xs">Groups you might be interested in </h1>
      </div>
      {suggestion.map((suggestionElem, index) => (
        <div
          className="border-b border-b-gray-300 flex flex-col justify-center items-center p-5"
          key={index}
        >
          <div className="flex gap-1">
            <Image
              src="/assets/Ellipse-39.png"
              width={60}
              height={60}
              alt="pic"
            />
            <div>
              <h1 className="font-medium text-sm">{suggestionElem.name}</h1>
              <p className="text-xs text-gray-400">245 member</p>
            </div>
          </div>
          <button className="border px-5 py-0 mt-2 rounded border-[#A8359C]">
            Join
          </button>
        </div>
      ))}
    </div>
  );
};

export default Groupsuggestion;
