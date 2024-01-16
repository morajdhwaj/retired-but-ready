"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";

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
  personalSkills,
  setPersonalSkills,
  professionalSkills,
  setProfessionalSkills,
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

  const displayPersonalSkills = allSkills.filter(
    (skill) => skill.skill_category === "personal"
  );
  const displayProfessionalSkills = allSkills.filter(
    (skill) => skill.skill_category === "professional"
  );

  const transformedPersonalSkills = displayPersonalSkills.map((skill) => {
    return { value: skill._id, label: skill.skill_name };
  });
  const transformedProfessionalSkills = displayProfessionalSkills.map(
    (skill) => {
      return { value: skill._id, label: skill.skill_name };
    }
  );

  const handlePersonalSkill = (selected, selection) => {
    const { action } = selection;

    if (action === "clear") {
      setPersonalSkills([]);
    } else if (action === "select-option") {
      if (selected.length <= 5) {
        setPersonalSkills(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setPersonalSkills(selected);
    }
    const hasMinimumSkills = selected.length >= 3;

    if (!hasMinimumSkills) {
      toast("Please select at least 3 professional skills", {
        icon: "👍",
      });
    }
  };

  const handleProfessionalSkill = (selected, selection) => {
    const { action } = selection;

    if (action === "clear") {
      setProfessionalSkills([]);
    } else if (action === "select-option") {
      if (selected.length <= 5) {
        setProfessionalSkills(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setProfessionalSkills(selected);
    }

    const hasMinimumSkills = selected.length >= 3;

    if (!hasMinimumSkills) {
      toast("Please select at least 3 professional skills", {
        icon: "👍",
      });
    }
  };

  console.log(displayPersonalSkills, "dd");
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
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
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
          <select
            value={totalExperience}
            onChange={(e) => setTotalExperience(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
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
          <select
            value={professionalField}
            onChange={(e) => setProfessionalField(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-72 rounded"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
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
          <select
            value={professionalExpertise}
            onChange={(e) => setProfessionalExpertise(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2 w-72 rounded"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
      <div className="w-full  mt-5">
        <h1 className="font-bold text-2xl ">Personal Skills</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <Select
          id="personal"
          value={personalSkills}
          instanceId="selectSkills"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={transformedPersonalSkills}
          onChange={handlePersonalSkill}
        />
      </div>
      <div className="w-full  mt-5">
        <h1 className="font-bold text-2xl ">Professional Skills</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <Select
          id="professional"
          value={displayProfessionalSkills.skill_name}
          instanceId="selectSkills"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={transformedProfessionalSkills}
          onChange={handleProfessionalSkill}
        />
      </div>

      <div className=" mt-10 flex w-full gap-10">
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
