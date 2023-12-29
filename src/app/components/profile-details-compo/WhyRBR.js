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

const WhyRBR = () => {
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
    <div className="flex  flex-col gap-5  ">
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
    </div>
  );
};

export default WhyRBR;
