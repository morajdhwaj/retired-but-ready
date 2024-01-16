"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

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

const WhyRBR = ({ userId }) => {
  const [cause, setCause] = useState([]);
  const [updatedCause, setUpdatedCause] = useState([]);
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data);
        setUserData(response?.data);
        setCause(response?.data?.retirement_cause);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleCauseChange = async (selected, selection) => {
    const { action } = selection;
    if (action === "clear") {
    } else if (action === "select-option") {
    } else if (action === "remove-value") {
      console.log("remove");
    }
    setUpdatedCause(selected);
  };

  const updateUser = () => {
    const options = {
      method: "PUT",
      url: "https://retpro.catax.me/user/update-profile",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        user_display_name: userData?.user_display_name,
        user_first_name: userData?.user_first_name,
        user_last_name: userData?.user_last_name,
        user_age: userData?.user_age,
        user_gender: userData?.user_gender,
        country_id: userData?.country_id,
        country_name: userData?.country_name,
        user_state: userData?.user_state,
        user_city: userData?.user_city,
        city_coordinates: userData?.city_coordinates,
        profile_headline: userData?.profile_headline,
        profile_summary: userData?.profile_summary,
        last_designation: userData?.last_designation,
        total_experience: userData?.total_experience,
        professional_field: userData?.professional_field,
        professional_expertise: userData?.professional_expertise,
        skills: userData?.skills,
        languages: userData?.languages,
        english_proficiency: userData?.english_proficiency,
        education: userData?.education,
        work_history: userData?.work_history,
        certifications: userData?.certifications,
        is_charged: userData?.is_charged,
        acceptable_currencies: userData?.acceptable_currencies,
        interests: userData?.interests,
        retirement_cause: updatedCause.map((item) => item.label),
        social_links: userData?.social_links,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setEdit(!edit);
        getUserData();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  if (userData.length === 0) {
    return <h1 className="mx-5">Loading...</h1>;
  }

  console.log(userData, "data");
  console.log(
    updatedCause.map((item) => item.label),
    "update cause"
  );

  console.log(cause);

  return (
    <div className="flex  flex-col gap-5  m-3 ">
      <div className="flex  gap-5 justify-end ">
        <button onClick={() => setEdit(!edit)}>
          <FaEdit size={30} />
        </button>
        {edit && (
          <button onClick={updateUser}>
            <h2 className="font-semibold text-[#773fc6]">Save changes</h2>
          </button>
        )}
      </div>

      <div className="w-full">
        <h2 className="font-semibold text-gray-500">
          What is the cause of your retirement
        </h2>

        {edit ? (
          <Select
            id="selectCause"
            instanceId="selectCause"
            isMulti
            value={updatedCause}
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
            options={RetireCause}
            onChange={handleCauseChange}
          />
        ) : (
          <div>
            {cause.map((item) => (
              <h1 key={item} className="font-semibold">
                {item}
              </h1>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyRBR;
