"use client";
import React, { useState } from "react";
import Select from "react-select";

const RetireCause = [
  { value: "Medical issues", label: "Medical issues" },
  { value: "Family issues", label: "Family issues" },
  { value: "Retired from service", label: "Retired from service" },
];

const wants = [
  { value: "Work as consultant", label: "Work as consultant" },
  { value: "Build connection", label: "Build connection" },
  { value: "Match-making", label: "Match-making" },
  { value: "Mentoring", label: "Mentoring" },
  { value: "Work as freelancer", label: "Work as freelancer" },
  { value: "Work full-time", label: "Work full-time" },
  { value: "Work sort term", label: "Work sort term" },
];

const SocialInfo = ({ stepUp, stepDown }) => {
  const [cause, setCause] = useState([]);

  const handleCauseChange = async (selected, selection) => {
    const { action } = selection;
    if (action === "clear") {
    } else if (action === "select-option") {
    } else if (action === "remove-value") {
      console.log("remove");
    }
    setCause(selected);
  };
  const handleWantChange = async (selected, selection) => {
    const { action } = selection;
    if (action === "clear") {
    } else if (action === "select-option") {
    } else if (action === "remove-value") {
      console.log("remove");
    }
    setCause(selected);
  };
  return (
    <div className="flex  flex-col gap-5 mx-20 ">
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">
          What is the cause of your retirement
        </h2>
        <Select
          id="selectCause"
          instanceId="selectCause"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={RetireCause}
          onChange={handleCauseChange}
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">
          What do you want to do on this platform
        </h2>
        <Select
          id="selectWant"
          instanceId="selectWant"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={wants}
          onChange={handleWantChange}
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Age Category</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="">
        <h2 className="font-medium">Link your accounts</h2>
        <p className="text-xs text-gray-500">
          (provide links to your linkedin, facebook, google and other social
          media accounts that are relevant with your profile and work
          experience)
        </p>
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Facebook</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Twitter</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Linkedin</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Instagram</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Behance</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Others</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="flex w-full gap-10">
        <button
          onClick={stepDown}
          className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
        >
          Go back
        </button>
        <button
          onClick={stepUp}
          className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SocialInfo;
