"use client";
import React, { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const Experiences = ({
  englishProficiency,
  setEnglishProficiency,
  languages,
  setLanguages,
  step,
  setStep,
  setShowModal,
  experiences,
  setExperiences,
}) => {
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [companyStart, setCompanyStart] = useState("");
  const [companyEnd, setCompanyEnd] = useState("");

  const handleStepUp = () => {
    if (!englishProficiency || !languages || experiences?.length === 0) {
      setShowModal(true);
      return;
    }
    setStep(step + 1);
  };
  const handleStepDown = () => {
    setStep(step - 1);
  };

  const handleAddExperience = () => {
    const newExperience = {
      company_id: "657d55d2033cb72b10c630e5",
      company_name: companyName,
      title: title,
      start_date: "2022-10-01T00:00:00.000Z",
      end_date: "present",
    };

    setExperiences([...experiences, newExperience]);
    setCompanyName("");
    setTitle("");
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  console.log(experiences, "experiences");

  return (
    <div className="h-full mx-20  ">
      <div>
        <h1 className="text-2xl font-semibold">English Proficiency</h1>
        <h4 className="text-gray-400 font-normal text-sm">
          Retired but ready is an ideal plateform for Intermediate/Native
          English speakers.
          <br />
          Please indicate your english language proficiency with honesty.
        </h4>
        <select
          value={englishProficiency}
          onChange={(e) => setEnglishProficiency(e.target.value)}
          className=" mt-5 h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
        >
          <option>Basic</option>
          <option>Conversational</option>
          <option>Competent</option>
          <option>Proficient</option>
          <option>Fluent</option>
        </select>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Other Languages you know</h1>
        <h4 className="text-gray-400 text-sm">
          Being multilingual is always a bonus.
        </h4>
        <br />
        <div className="flex flex-col gap-5">
          <input
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            className=" h-10  bg-[#f2f1f3] px-2 border-gray-300  border rounded  w-full"
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-[#773FC6] font-semibold">Work History</h1>
        <h3 className="text-[#BCC0C9] text-sm">
          This lets others know where you have worked and your wealth of
          expertise.
        </h3>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Add Experiences</h1>
      </div>
      <div className="mt-5 ">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="my-5 border p-2 rounded-lg border-[#773fc6] "
          >
            <div>
              <div className="flex justify-between">
                <h2 className="text-[#808184] font-medium">Company Name*</h2>
                <button onClick={() => handleRemoveExperience(index)}>
                  <IoClose size={30} color="gray" />
                </button>
              </div>
              <h2 className=" font-medium ">{experience.company_name}</h2>
            </div>
            <div className="mt-5">
              <h2 className="text-[#808184] font-medium">Title*</h2>
              <h2 className=" font-medium">{experience.title}</h2>
            </div>
          </div>
        ))}
        <div className="">
          <div>
            <h2 className="text-[#808184] font-medium">Company Name*</h2>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
            />
          </div>
          <div className="mt-5">
            <h2 className="text-[#808184] font-medium">Title*</h2>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
            />
          </div>
          <div className="flex gap-6 mt-5">
            <div className="w-1/2">
              <h2 className="text-[#808184] font-medium">Start date</h2>
              <input
                value={companyStart}
                onChange={(e) => setCompanyStart(e.target.value)}
                className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                type="date"
              ></input>
            </div>
            <div className="w-1/2">
              <h2 className="text-[#808184] font-medium">End date</h2>
              <input
                value={companyEnd}
                onChange={(e) => setCompanyEnd(e.target.value)}
                className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                type="date"
              ></input>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleAddExperience}
            className="text-xl text-[#773fc6] font-medium mt-10"
          >
            + ADD positions
          </button>
        </div>

        <div className="mt-10 gap-10 flex w-full">
          <button
            onClick={handleStepDown}
            className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
          >
            Go back
          </button>
          <button
            onClick={handleStepUp}
            className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2 "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
