"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const RetireCause = [
  {
    value: "Retired from service/business",
    label: "Retired from service/business",
  },
  {
    value: "Early Retired from service/business",
    label: "Early Retired from service/business",
  },
  { value: "Working from home", label: "working from home" },
  {
    value: "Physically challenged/Disable",
    label: "Physically challenged/Disable",
  },
  { value: "Medical issue", label: "Medical issue" },
  { value: "Family issue", label: "Family issue" },
  { value: "Others", label: "Others" },
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
        retirement_cause: updatedCause.map((item) => item.label),
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
          <CreatableSelect
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
