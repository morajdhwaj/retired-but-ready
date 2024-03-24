"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

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
  { value: "Freelance work", label: "Freelance work" },
  { value: "Full-time work", label: "	Full-time work" },
  { value: "Part-time work", label: "Part-time work" },
  { value: "Offer Consultancy", label: "Offer Consultancy" },
  { value: "Mentoring", label: "Mentoring" },
  {
    value: "Connect with other Retirees",
    label: "Connect with other Retirees",
  },
  {
    value: "Connect with peer professionals",
    label: "Connect with peer professionals",
  },
  {
    value: "Connect with same Industry Professionals",
    label: "Connect with same Industry Professionals",
  },
  { value: "Get & Give Advise", label: "Get & Give Advise" },
  { value: "Networking", label: "Networking" },
  { value: "Matchmaking / Dating", label: "Matchmaking / Dating" },
  { value: "Not-sure", label: "Not-sure" },
  { value: "Other", label: "Other" },
];

const SocialInfo = ({
  userId,
  retirementCause,
  setRetirementCause,
  facebook,
  setFacebook,
  twitter,
  setTwitter,
  linkedin,
  setLinkedin,
  instagram,
  setInstagram,
  step,
  setStep,
  setShowModal,
  age,
  setAge,
  wantFrom,
  setWantFrom,
}) => {
  const handleStepUp = () => {
    if (!age) {
      setShowModal(true);
      return;
    }
    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/registration-step/2",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        user_age: age,
        interests: wantFrom.map((item) => item.label),
        retirement_cause: retirementCause.map((item) => item.label),
        social_links: {
          linkedIn: linkedin,
          facebook: facebook,
          twitter: twitter,
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

  const handleCauseChange = async (selected, selection) => {
    const { action } = selection;
    if (action === "clear") {
    } else if (action === "select-option") {
    } else if (action === "remove-value") {
      console.log("remove");
    }

    setRetirementCause(selected);
  };
  const handleWantChange = (selectedOptions) => {
    if (selectedOptions.length <= 5) {
      setWantFrom(selectedOptions);
    } else {
      toast.error("Maximum selection limit is 5");
    }
  };
  const handleFacebookChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "" || inputValue.startsWith("https://")) {
      setFacebook(inputValue);
    } else {
      // Show toast for invalid input
      toast.error("Invalid facebook URL");
    }
  };

  const handleLinkedInChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "" || inputValue.startsWith("https://")) {
      setLinkedin(inputValue);
    } else {
      // Show toast for invalid input
      toast.error("Invalid LinkedIn URL");
    }
  };
  console.log(
    wantFrom.map((item) => item.label),
    "want"
  );

  return (
    <div className="flex  flex-col gap-5 mx-5 xl:mx-20 ">
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">
          What is the cause of your retirement
        </h2>

        <CreatableSelect
          id="selectCause"
          value={retirementCause}
          instanceId="selectCause"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={RetireCause}
          onChange={handleCauseChange}
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">
          What do you want to do on this platform
        </h2>
        <CreatableSelect
          id="selectWant"
          instanceId="selectWant"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={wants}
          value={wantFrom}
          onChange={handleWantChange}
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Age Category*</h2>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
        >
          <option value="" disabled>
            Select Age Category
          </option>
          <option>60+ Years</option>
          <option>45-60 Years</option>
          <option>30-45 Years</option>
          <option>Below 30 Years</option>
        </select>
      </div>
      <div className="">
        <h2 className="font-medium">Link your accounts</h2>
        <p className="text-xs text-gray-500">
          (provide links to your linkedin, facebook, google and other social
          media accounts that are relevant with your profile and work
          experience)
        </p>
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Facebook</h2>
        <input
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          placeholder="https://www.facebook.com/in/user-name/"
          className="bg-[#f2f1f3] border border-gray-300 h-10 px-2 rounded w-full"
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Twitter</h2>
        <input
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
          placeholder="https://www.twitter.com/in/user-name/"
          className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  rounded w-full"
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">LinkedIn</h2>
        <input
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className="bg-[#f2f1f3] border border-gray-300 h-10 px-2 rounded w-full"
          placeholder="https://www.linkedin.com/in/user-name-a44677249/"
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Instagram</h2>
        <input
          value={instagram}
          placeholder="https://www.instagram.com/in/user-name/"
          onChange={(e) => setInstagram(e.target.value)}
          className="bg-[#f2f1f3] border border-gray-300 h-10 px-2 rounded w-full"
        />
      </div>

      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Others</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  rounded w-full" />
      </div>
      <div className=" mt-5 flex w-full gap-10">
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

export default SocialInfo;
