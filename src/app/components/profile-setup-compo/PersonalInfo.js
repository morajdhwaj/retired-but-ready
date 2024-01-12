"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const PersonalInfo = ({
  stepUp,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  displayName,
  setDisplayName,
  age,
  setAge,
  gender,
  setGender,
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

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

  return (
    <div className="flex  flex-col gap-5  sm:mx-5 xl:mx-20  ">
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Profile display name</h2>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
        />
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Fist Name</h2>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Last Name</h2>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Age</h2>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Gender</h2>
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          />
        </div>
      </div>{" "}
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">City</h2>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Country</h2>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          >
            {countries?.map((country) => (
              <option key={country.id}>{country.name}</option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">State</h2>
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
          />
        </div>
      </div>
      <button
        onClick={stepUp}
        className="bg-[#773fc6] p-2 text-white font-medium rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalInfo;
