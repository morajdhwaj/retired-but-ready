import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const Certification = ({
  stepDown,
  handleSubmit,
  certificateName,
  setCertificateName,
  acceptableCurrencies,
  setAcceptableCurrencies,
  step,
  setStep,
  isCharged,
  setIsCharged,
  aboutYou,
  setAboutYou,
  setShowModal,
}) => {
  const [certificates, setCertificates] = useState([]);

  const handleStepDown = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/get-all-certifications",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCertificates(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const transformedCertificates = certificates.map((cert) => {
    return { value: cert.certification_name, label: cert.certification_name };
  });

  const handleCertificate = (selected, selection) => {
    const { action } = selection;

    if (action === "clear") {
      setCertificateName([]);
    } else if (action === "select-option") {
      if (selected.length <= 5) {
        setCertificateName(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setCertificateName(selected);
    }
  };

  console.log(aboutYou, "sddd");

  return (
    <div>
      <div className=" flex flex-col mx-20">
        <h1 className="text-2xl font-bold ">Certifications</h1>
        <h3 className="text-gray-500 text-noraml mt-5  ">
          [Example:Microsoft Certifified Solution Associate (MCSA)]
        </h3>
        <div className="mt-8 flex flex-col gap-4 w-auto  ">
          <Select
            id="certificate"
            value={certificateName}
            instanceId="selectSkills"
            isMulti
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
            options={transformedCertificates}
            onChange={handleCertificate}
          />
        </div>
        <div className="mt-8">
          <h2 className="text-gray-500  text-lg">
            Would you like to charge for your services*
          </h2>
          <div className="flex items-center gap-5 mt-3">
            <input
              id="yes"
              type="radio"
              checked={isCharged}
              onChange={() => setIsCharged(true)}
            />
            <label htmlFor="yes">Yes</label>

            <input
              id="no"
              type="radio"
              checked={!isCharged}
              onChange={() => setIsCharged(false)}
            />
            <label htmlFor="no">No</label>
          </div>

          <div className=" mt-5 ">
            <h1 className="text-gray-500  text-base">Currency you accept</h1>
            <select
              type="text"
              className="bg-[#f2f1f3] border px-2 border-gray-300 h-10   rounded w-full"
              value={acceptableCurrencies}
              onChange={(e) => setAcceptableCurrencies(e.target.value)}
            >
              <option>INR</option>
              <option>USD</option>
              <option>EURO</option>
            </select>
          </div>
          <div className="text-gray-500  text-xl mt-5">
            <h1>About you</h1>
          </div>
        </div>
        <div>
          <h3 className="text-gray-500 text-sm  mt-3 w-[100%]">
            Keep it crisp.Keep is classy.You can write about your years of
            experience,Industry or achievements.You can also share your hobbies
            Or Quirks
          </h3>
        </div>
        <textarea
          value={aboutYou}
          onChange={(e) => setAboutYou(e.target.value)}
          placeholder="(this will be visible to others along with your photo, so make it crisp and classy)"
          className="bg-gray-100 border rounded-lg mt-3 px-2 border-gray-300 h-[200px] resize-none p-5"
        />
        <h2 className="text-gray-500  text-sm mt-10">
          Max character limit-1000
        </h2>

        <div>
          <h1 className="  text-2xl text-[#773FC6] mt-10 text-center">
            Preview as visitor
          </h1>
          <div className="mt-10 gap-10 flex w-full">
            <button
              onClick={handleStepDown}
              className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
            >
              Go back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
