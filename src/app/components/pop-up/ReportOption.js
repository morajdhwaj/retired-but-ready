"use client";

import React from "react";

const ReportOption = ({ setReportType, reportType }) => {
  const options = ["hate_speech", "misleading"];

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setReportType(selectedValue);
  };

  return (
    <div className="">
      {options.map((option, index) => (
        <div className="flex flex-co  " key={index}>
          <label className="mt-2">
            <input
              type="checkbox"
              value={option}
              checked={reportType === option}
              onChange={handleOptionChange}
              name="options"
              className="ml-2"
            />
            <span className="ml-2">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ReportOption;
