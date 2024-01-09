import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const ProfileDetails = ({ userData }) => {
  const [countries, setCountries] = useState([]);
  const [step, setStep] = useState("");
  const [edit, setEdit] = useState(false);
  const [userId, setUserId] = useState("");
  const [displayName, setDisplayName] = useState(userData?.user_display_name);
  const [firstName, setFirstName] = useState(userData?.user_first_name);
  const [lastName, setLastName] = useState(userData?.user_last_name);
  const [age, setAge] = useState(userData?.user_age);
  const [gender, setGender] = useState(userData?.user_gender);
  const [country, setCountry] = useState(userData?.country_name);
  const [state, setState] = useState(userData?.user_state);
  const [city, setCity] = useState(userData?.user_city);

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

  console.log(userData, "profile");

  return (
    <div className="flex  flex-col gap-5  ">
      <div className="flex  gap-5 justify-end mt-5">
        <button onClick={() => setEdit(!edit)}>
          <FaEdit size={30} />
        </button>
        {edit && (
          <button onClick={() => setEdit(!edit)}>
            <h2 className="font-semibold text-blue-500">Update</h2>
          </button>
        )}
      </div>

      <div className="flex  flex-col gap-5 mx-20 ">
        <div className="w-full">
          <h2 className="font-semibold text-gray-500">Profile display name</h2>
          {edit ? (
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
            />
          ) : (
            <h2 className="font-semibold text-gray-500">
              {userData.user_display_name}
            </h2>
          )}
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Fist Name</h2>
            {edit ? (
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
              />
            ) : (
              <h2 className="font-semibold text-gray-500">
                {userData.user_first_name}
              </h2>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Last Name</h2>
            {edit ? (
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
              />
            ) : (
              <h2 className="font-semibold text-gray-500">
                {userData.user_last_name}
              </h2>
            )}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Age</h2>
            {edit ? (
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
              />
            ) : (
              <h2 className="font-semibold text-gray-500">
                {userData.user_age}
              </h2>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Gender</h2>
            {edit ? (
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
              />
            ) : (
              <h2 className="font-semibold text-gray-500">
                {userData.user_gender}
              </h2>
            )}
          </div>
        </div>{" "}
        <div className="flex gap-5">
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">City</h2>
            {edit ? (
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
              />
            ) : (
              <h2 className="font-semibold text-gray-500">
                {userData.user_city}
              </h2>
            )}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Country</h2>
            {edit ? (
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded"
              >
                {countries?.map((country) => (
                  <option key={country.id}>{country.name}</option>
                ))}
              </select>
            ) : (
              <h2 className="font-semibold text-gray-500">
                {userData.country_name}
              </h2>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">State</h2>
            {edit ? (
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
              />
            ) : (
              <h2 className="font-semibold text-gray-500">
                {userData.user_state}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
