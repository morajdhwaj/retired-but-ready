"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const SkillsComponent = ({
  userId,
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
  step,
  setStep,
  setShowModal,
}) => {
  const [allSkills, setAllSkills] = useState([]);

  const handleStepUp = () => {
    if (
      !lastDesignation ||
      !totalExperience ||
      !professionalField ||
      !professionalExpertise ||
      personalSkills?.length === 0 ||
      professionalSkills?.length === 0
    ) {
      setShowModal(true);
      return;
    }

    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/registration-step/3",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        last_designation: lastDesignation,
        total_experience: totalExperience,
        professional_field: professionalField,
        professional_expertise: professionalExpertise,
        skills: {
          personal: personalSkills.map((item) => item.label),
          professional: professionalSkills.map((item) => item.label),
        },
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
    const { action, option } = selection;

    if (action === "clear") {
      setPersonalSkills([]);
    } else if (action === "select-option") {
      if (selected.length < 6) {
        setPersonalSkills(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setPersonalSkills(selected);
    } else if (action === "create-option") {
      // Allow creating a new option only if the limit is not reached
      if (selected.length <= 5) {
        const newOption = { value: option.value, label: option.label };
        setAllSkills((prevSkills) => [...prevSkills, newOption]);
        setPersonalSkills((prevSkills) => [...prevSkills, newOption]);
      } else {
        toast.error("Maximum total limit is 5");
      }
    }

    const hasMaximumSkills = selected.length >= 5;

    // if (hasMaximumSkills) {
    //   // toast.error("Maximum selection limit is 5");
    // }
  };

  const handleProfessionalSkill = (selected, selection) => {
    const { action, option } = selection;

    if (action === "clear") {
      setProfessionalSkills([]);
    } else if (action === "select-option") {
      if (selected.length < 6) {
        setProfessionalSkills(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setProfessionalSkills(selected);
    } else if (action === "create-option") {
      // Allow creating a new option only if the limit is not reached
      if (selected.length <= 5) {
        const newOption = { value: option.value, label: option.label };
        setAllSkills((prevSkills) => [...prevSkills, newOption]);
        setProfessionalSkills((prevSkills) => [...prevSkills, newOption]);
      } else {
        toast.error("Maximum total limit is 5");
      }
    }

    const hasMaximumSkills = selected.length >= 5;

    // if (hasMaximumSkills) {
    //   // toast.error("Maximum selection limit is 5");
    // }
  };

  console.log(professionalExpertise, "pssddddsss");

  return (
    <div className="mx-20 mb-40 ">
      <div className="flex  flex-col gap-8 ">
        <div>
          <div className="flex">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Most recent Designation*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={lastDesignation}
            onChange={(e) => setLastDesignation(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <option value="" disabled>
              Select Last Designation
            </option>
            <option>Senior Management</option>
            <option>Top-Level Manager</option>
            <option>Middle-Level Manager</option>
            <option>First level Manager/ Employee</option>
            <option>Chief Executive Officer (CEO)</option>
            <option>Chief Operating Officer (COO)</option>
            <option>President</option>
            <option>Director</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Total Work Experience*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={totalExperience}
            onChange={(e) => setTotalExperience(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <option value="" disabled>
              Select Total Work Experience
            </option>
            <option>30 to above Years</option>
            <option>20 to 30 Years </option>
            <option>10 to 20 Years</option>
            <option>5 to 10 Years</option>
            <option>5 and less Years</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Professional field*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={professionalField}
            onChange={(e) => setProfessionalField(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <option value="" disabled>
              Select Professional Field
            </option>
            <option>Healthcare</option>
            <option>Information Technology</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Engineering</option>
            <option>Sales</option>
            <option>Agriculture</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Professional expertise*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={professionalExpertise}
            onChange={(e) => setProfessionalExpertise(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2 w-full rounded"
          >
            <option value="" disabled>
              Select Professional Expertise
            </option>
            <option>Data Analysis</option>
            <option>Software Development</option>
            <option>Project Management </option>
            <option>Content Creation </option>
            <option>Social Media Marketing </option>
            <option>Network Security </option>
          </select>
        </div>
      </div>
      <div className="w-full  mt-5">
        <h1 className="font-bold text-2xl ">Personal Skills*</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <CreatableSelect
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
        <h1 className="font-bold text-2xl ">Professional Skills*</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <CreatableSelect
          id="professional"
          value={professionalSkills}
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
          onClick={handleStepDown}
          className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
        >
          Go back
        </button>
        <button
          onClick={handleStepUp}
          className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2"
        >
          Submit & Next
        </button>
      </div>
    </div>
  );
};

export default SkillsComponent;
