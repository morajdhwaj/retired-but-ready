"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaClosedCaptioning } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import Select from "react-select";

const languagesOption = [
  { value: "en", label: "English" },
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
    const newExperience = {
      company_id: "657d55d2033cb72b10c630e5",
      company_name: companyName,
      title: title,
      start_date: companyStart,
      end_date: companyEnd,
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

  console.log(
    languages.map((item) => item.label),
    "lang"
  );

  console.log(experiences, "companyStart");

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
                <h2 className=" font-medium">{experience?.start_date}</h2>
              </div>
              <div>
                <h2 className="text-[#808184] font-medium">End date</h2>
                <h2 className=" font-medium">{experience?.end_date}</h2>
              </div>
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
