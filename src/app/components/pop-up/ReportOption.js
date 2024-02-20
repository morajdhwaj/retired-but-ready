"use client";

import React, { useState } from "react";

const ReportOption = ({ setReportType, reportType }) => {
  const options = ["hate_speech", "misleading"];

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setReportType(selectedValue);
  };

  return (
    <div className="">
      {options.map((option, index) => (
        <div className="flex flex-col" key={index}>
          <label className="mt-2">
            <input
              type="radio"
              value={option}
              checked={reportType === option}
              onChange={handleOptionChange}
              name="options"
              className="ml-2"
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ReportOption;
