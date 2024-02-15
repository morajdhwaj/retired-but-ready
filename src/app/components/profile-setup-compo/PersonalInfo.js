"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PersonalInfo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  displayName,
  setDisplayName,
  // age,
  // setAge,
  gender,
  setGender,
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  userId,
  setCompanyId,
  step,
  setStep,
  setShowModal,
  mobile_no,
}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryStates, setSelectedCountryStates] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const handleStepUp = () => {
    if (!city || !country || !state) {
      setShowModal(true);
      return;
    }

    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/registration-step/1",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        user_first_name: firstName,
        user_last_name: lastName,
        user_display_name: displayName,
        user_mobile: mobile_no,
        country_id: "11",
        country_name: country,
        user_state: state,
        user_city: city,
        city_coordinates: ["12.3210", "43.432123"],
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

  console.log("this is mobile data", mobile_no);
  const getCountries = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/get-all-countries",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    if (selectedCountry) {
      const selectedCountryObject = countries.find(
        (country) => country.name === selectedCountry
      );

      if (selectedCountryObject) {
        setSelectedCountryStates(selectedCountryObject.states);
        setCountry(selectedCountryObject.name);
        setCompanyId(selectedCountryObject.id); // Set the country id here
      }
    } else {
      setSelectedCountryStates([]);
    }
  }, [selectedCountry, countries, setCompanyId]);

  return (
    <div className="flex  flex-col gap-5  sm:mx-5 xl:mx-20  ">
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Profile display name</h2>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="bg-[#f2f1f3] border border-gray-300 h-10 px-2 rounded w-full"
        />
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">First Name</h2>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full px-2 rounded"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Last Name</h2>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full px-2 rounded"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Gender</h2>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full px-2 rounded"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">City*</h2>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full px-2 rounded"
          />
        </div>
      </div>{" "}
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Country*</h2>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full px-2 rounded"
          >
            {countries?.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">State*</h2>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full px-2 rounded"
          >
            {selectedCountryStates.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleStepUp}
        className="bg-[#773fc6] p-2 text-white font-medium rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalInfo;
