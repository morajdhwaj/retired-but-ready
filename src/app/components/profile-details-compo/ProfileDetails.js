import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const ProfileDetails = ({ userId }) => {
  const [countries, setCountries] = useState([]);
  const [userData, setUserData] = useState([]);
  const [step, setStep] = useState("");
  const [edit, setEdit] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    getCountries();
    getUserData();
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
        setDisplayName(response?.data?.user_display_name);
        setFirstName(response?.data?.user_first_name);
        setLastName(response?.data?.user_last_name);
        setAge(response?.data?.user_age);
        setGender(response?.data?.user_gender);
        setCity(response?.data?.user_city);
        setState(response?.data?.user_state);
        setCountry(response?.data?.country_name);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const updateUser = () => {
    const options = {
      method: "PUT",
      url: "https://retpro.catax.me/user/update-profile",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        user_display_name: displayName,
        user_first_name: firstName,
        user_last_name: lastName,
        user_age: age,
        user_gender: gender,
        country_id: userData?.country_id,
        country_name: country,
        user_state: state,
        user_city: city,
        city_coordinates: userData?.city_coordinates,
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

  console.log(userData, "profile");

  return (
    <div className="flex  flex-col   ">
      <div className="flex  gap-5 justify-end mt-5">
        <button onClick={() => setEdit(!edit)}>
          <FaEdit size={30} />
        </button>
        {edit && (
          <button onClick={updateUser}>
            <h2 className="font-semibold text-[#773fc6]">Save changes</h2>
          </button>
        )}
      </div>

      <div className="flex  flex-col gap-5  mx-5">
        <div className="w-full">
          <h2 className="font-semibold text-gray-500">Profile display name</h2>
          {edit ? (
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  rounded w-full"
            />
          ) : (
            <h2 className="font-semibold ">{userData.user_display_name}</h2>
          )}
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Fist Name</h2>
            {edit ? (
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10  px-2  rounded w-full"
              />
            ) : (
              <h2 className="font-semibold ">{userData.user_first_name}</h2>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Last Name</h2>
            {edit ? (
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10   px-2 rounded w-full"
              />
            ) : (
              <h2 className="font-semibold ">{userData.user_last_name}</h2>
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
                className="bg-[#f2f1f3] border border-gray-300 h-10  px-2 rounded w-full"
              />
            ) : (
              <h2 className="font-semibold ">{userData.user_age}</h2>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">Gender</h2>
            {edit ? (
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10  px-2 rounded w-full"
              />
            ) : (
              <h2 className="font-semibold ">{userData.user_gender}</h2>
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
                className="bg-[#f2f1f3] border border-gray-300 h-10 px-2 rounded w-full"
              />
            ) : (
              <h2 className="font-semibold ">{userData.user_city}</h2>
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
                className="bg-[#f2f1f3] border border-gray-300 h-10  px-2 w-full rounded"
              >
                {countries?.map((country) => (
                  <option key={country.id}>{country.name}</option>
                ))}
              </select>
            ) : (
              <h2 className="font-semibold ">{userData.country_name}</h2>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-gray-500">State</h2>
            {edit ? (
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10  px-2 rounded w-full"
              />
            ) : (
              <h2 className="font-semibold ">{userData.user_state}</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
