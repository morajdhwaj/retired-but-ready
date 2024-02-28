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
  gender,
  setGender,
  country,
  setCountry, // Update the prop name
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
    if (country) {
      const selectedCountryObject = countries.find((c) => c.name === country);

      if (selectedCountryObject) {
        setSelectedCountryStates(selectedCountryObject.states);
        setCompanyId(selectedCountryObject.id); // Set the country id here
      }
    } else {
      setSelectedCountryStates([]);
    }
  }, [country, countries, setCompanyId]);

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
          <h2 className="font-semibold text-gray-500">Country*</h2>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 w-full px-2 rounded"
          >
            {countries && (
              <>
                <option value="" disabled>
                  Select country
                </option>
                {countries.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">State*</h2>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 w-full px-2 rounded"
          >
            {selectedCountryStates && (
              <>
                <option value="" disabled>
                  Select State
                </option>
                {selectedCountryStates.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">City*</h2>
          <input
            value={city}
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full px-2 rounded"
          />
        </div>
      </div>
      <button
        onClick={handleStepUp}
        className="bg-[#773fc6] p-2 text-white font-medium rounded"
      >
        Submit & Next
      </button>
    </div>
  );
};

export default PersonalInfo;
