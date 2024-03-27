"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { IoClose } from "react-icons/io5";
import Select from "react-select";
import { companyTitle } from "../array-data/CompanyTitle";

const languagesOption = [
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "it", label: "Italiano" },
  { value: "ja", label: "日本語 (Japanese)" },
  { value: "ko", label: "한국어 (Korean)" },
  { value: "zh", label: "中文 (Chinese)" },
  { value: "hi", label: "हिन्दी (Hindi)" },
  { value: "ru", label: "Русский (Russian)" },
];

const Experiences = ({
  userId,
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
  const currentDate = new Date().toISOString().split("T")[0];

  const handleStepUp = () => {
    if (experiences?.length === 0) {
      setShowModal(true);
      return;
    }
    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/registration-step/4",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        languages: languages.map((item) => item.label),
        english_proficiency: englishProficiency,
        work_history: experiences,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setStep(step + 1);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };
  const handleStepDown = () => {
    setStep(step - 1);
  };

  const handleLanguageChange = async (selected, selection) => {
    const { action } = selection;

    if (action === "clear") {
      setLanguages([]);
    } else if (action === "select-option") {
      if (selected.length > 5) {
        toast.error("Max length 5: Please remove some languages");
        return;
      }
    } else if (action === "remove-value") {
      console.log("remove");
    }

    setLanguages(selected);
  };

  const handleAddExperience = () => {
    if (!companyName || !title || !companyStart || !companyEnd) {
      toast.error("Please fill the required input fields");
      return;
    }

    const newExperience = {
      company_name: companyName,
      title: title,
      start_date: companyStart,
      end_date: companyEnd,
    };

    setExperiences([...experiences, newExperience]);
    setCompanyName("");
    setTitle("");
    setCompanyStart("");
    setCompanyEnd("");
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  console.log(
    languages.map((item) => item.label),
    "lang"
  );

  console.log(companyTitle, "title");

  return (
    <div className="h-full mx-20  ">
      <div>
        <h1 className="text-2xl font-semibold">English Proficiency</h1>
        <h4 className="text-gray-400 font-normal text-sm">
          Retired but ready is an ideal plate form for Intermediate/Native
          English speakers.
          <br />
          Please indicate your english language proficiency with honesty.
        </h4>
        <select
          value={englishProficiency}
          onChange={(e) => setEnglishProficiency(e.target.value)}
          className=" mt-5 h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
        >
          <option value="" disabled>
            Select English Proficiency
          </option>
          <option>
            Basic - Only able to communicate in this language through written
            communication
          </option>
          <option>
            Conversational - Conversational - Comfortable in verbal discussion
          </option>
          <option>
            Fluent - Complete command of this language with perfect grammar
          </option>
          <option>
            Native - Complete command of this language with no discernible
            accent
          </option>
        </select>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Other Languages you know</h1>
        <h4 className="text-gray-400 text-sm">
          Being multilingual is always a bonus.
        </h4>
        <br />
        <div className="flex flex-col gap-5">
          <Select
            id="selectLanguage"
            value={languages}
            instanceId="selectLanguage"
            isMulti
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
            options={languagesOption}
            onChange={handleLanguageChange}
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
                <h2 className="text-[#808184] font-medium">Company Name</h2>
                <button onClick={() => handleRemoveExperience(index)}>
                  <IoClose size={30} color="gray" />
                </button>
              </div>
              <h2 className=" font-medium ">{experience?.company_name}</h2>
            </div>
            <div className="mt-5">
              <h2 className="text-[#808184] font-medium">Title</h2>
              <h2 className=" font-medium">{experience?.title}</h2>
            </div>
            <div className="mt-5 flex gap-20">
              <div>
                <h2 className="text-[#808184] font-medium">Start date</h2>
                <h2 className=" font-medium">
                  {experience?.start_date.split("-").reverse().join("-")}
                </h2>
              </div>
              <div>
                <h2 className="text-[#808184] font-medium">End date</h2>
                <h2 className=" font-medium">
                  {experience?.end_date.split("-").reverse().join("-")}
                </h2>
              </div>
            </div>
          </div>
        ))}
        <div className="">
          <div>
            <h2 className="text-[#808184] font-medium">Company Name*</h2>
            <input
              value={companyName}
              onChange={(e) =>
                setCompanyName(
                  e.target.value.replace(/\b\w/g, (c) => c.toUpperCase())
                )
              }
              className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
            />
          </div>
          <div className="mt-5">
            <h2 className="text-[#808184] font-medium">Title*</h2>

            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
            >
              <>
                <option value="" disabled>
                  Select Title
                </option>
                {companyTitle.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
                <option>Other</option>
              </>
            </select>
          </div>
          <div className="flex gap-6 mt-5">
            <div className="w-1/2">
              <h2 className="text-[#808184] font-medium">Start date*</h2>
              <input
                value={companyStart}
                onChange={(e) => setCompanyStart(e.target.value)}
                className="h-10 bg-[#f2f1f3] border-gray-300 border text-gray-600 pl-2  rounded w-full"
                type="date"
                max={currentDate}
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-[#808184] font-medium">End date*</h2>
              <input
                value={companyEnd}
                onChange={(e) => setCompanyEnd(e.target.value)}
                className="  h-10 bg-[#f2f1f3] border-gray-300 text-gray-600 pl-2  border rounded  w-full"
                type="date"
                max={currentDate}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center items-center">
          {experiences.length !== 0 && (
            <button
              onClick={handleAddExperience}
              className="text-xl text-[#773fc6]  border p-2 rounded-lg border-[#773fc6] font-medium mt-10"
            >
              Add position
            </button>
          )}
        </div> */}

        <div className="mt-10 gap-10 flex w-full">
          <button
            onClick={handleStepDown}
            className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
          >
            Go back
          </button>
          {experiences.length == 0 ||
          companyName ||
          companyStart ||
          companyEnd ? (
            <button
              onClick={handleAddExperience}
              className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2 "
            >
              Add position
            </button>
          ) : (
            <button
              onClick={handleStepUp}
              className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2 "
            >
              Submit & Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
