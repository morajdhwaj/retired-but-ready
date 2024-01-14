"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const RetireCausssse = [
  { value: "Medical issues", label: "Medical issues" },
  { value: "Family issues", label: "Family issues" },
  { value: "Retired from service", label: "Retired from service" },
];

const SkillsComponent = ({
  skills,
  stepUp,
  stepDown,
  setSkills,
  lastDesignation,
  setLastDesignation,
  totalExperience,
  setTotalExperience,
  professionalField,
  setProfessionalField,
  professionalExpertise,
  setProfessionalExpertise,
}) => {
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/get-all-skills",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAllSkills(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const personalSkills = allSkills.filter(
    (skill) => skill.skill_category === "personal"
  );
  const professionalSkills = allSkills.filter(
    (skill) => skill.skill_category === "professional"
  );

  // console.log("Personal Skills:", personalSkills);
  // console.log("Professional Skills:", professionalSkills);

  const transformedPersonalSkills = personalSkills.map((skill) => {
    return { value: skill.skill_name, label: skill.skill_name };
  });
  const transformedProfessionalSkills = professionalSkills.map((skill) => {
    return { value: skill.skill_name, label: skill.skill_name };
  });

  const handleCauseChange = async (selected, selection) => {
    const { action } = selection;
    if (action === "clear") {
    } else if (action === "select-option") {
    } else if (action === "remove-value") {
      console.log("remove");
    }
    setSkills(selected);
  };

  // console.log(allSkills, "ss");
  return (
    <div className="mx-20 mb-40 ">
      <div className="flex  flex-col gap-8 ">
        <div>
          <div className="flex">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Most recent Designation
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={lastDesignation}
            onChange={(e) => setLastDesignation(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          >
            <option>Software Developer</option>
            <option>Testing</option>
            <option>Human Resource</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Total Work Experience
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <input
            value={totalExperience}
            onChange={(e) => setTotalExperience(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          ></input>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Professional field
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <input
            value={professionalField}
            onChange={(e) => setProfessionalField(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-72 rounded"
          ></input>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Professional expertise
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <input
            value={professionalExpertise}
            onChange={(e) => setProfessionalExpertise(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 w-72 rounded"
          ></input>
        </div>
      </div>
      <div className="w-full  mt-5">
        <h1 className="font-bold text-2xl ">Personal Skills</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <Select
          id="skills"
          value={skills}
          instanceId="selectSkills"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={transformedPersonalSkills}
          onChange={handleCauseChange}
        />
      </div>
      <div className="w-full  mt-5">
        <h1 className="font-bold text-2xl ">Professional Skills</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <Select
          id="skills"
          value={skills}
          instanceId="selectSkills"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={transformedProfessionalSkills}
          onChange={handleCauseChange}
        />
      </div>

      <div className=" mt-8 flex gap-20">
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

export default SkillsComponent;
