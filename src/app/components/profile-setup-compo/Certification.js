import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";

const currencies = [
  { value: "USD", label: "United States Dollar" },
  { value: "EUR", label: "Euro" },
  { value: "INR", label: "Indian Rupees" },
  { value: "GBP", label: "British Pound Sterling" },
  { value: "AUD", label: "Australian Dollar" },
  { value: "CAD", label: "Canadian Dollar" },
  { value: "CHF", label: "Swiss Franc" },
  { value: "CNY", label: "Chinese Yuan" },
  { value: "SEK", label: "Swedish Krona" },
  { value: "NZD", label: "New Zealand Dollar" },
];

const Certification = ({
  userId,
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

  const router = useRouter();

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

  const handleCurrencyChange = async (selected, selection) => {
    const { action } = selection;

    if (action === "clear") {
      setAcceptableCurrencies([]);
    } else if (action === "select-option") {
      if (selected.length > 3) {
        toast.error("Max length 3: Please remove some currencies");
        return;
      }
    } else if (action === "remove-value") {
      console.log("remove");
    }

    setAcceptableCurrencies(selected);
  };

  const handleSubmit = () => {
    if (acceptableCurrencies?.length === 0) {
      setShowModal(true);
      return;
    }
    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/registration-step/5",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        certifications: [
          {
            certification_id: null,
            certification_name: "aws cloud",
            credentials: "UC-b88f5ab3-3812-4901-bf6e-0a751d09ef65",
            certification_date: "2022-11-26T00:00:00.000Z",
          },
        ],
        is_charged: true,
        acceptable_currencies: acceptableCurrencies.map((item) => item.label),
        profile_headline: "string",
        profile_summary: "string",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        router.push("/walls-page");
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  console.log(
    acceptableCurrencies.map((item) => item.label),
    "sddd"
  );

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
            <Select
              id="selectCurrency"
              value={acceptableCurrencies}
              instanceId="selectCurrencies"
              isMulti
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              options={currencies}
              onChange={handleCurrencyChange}
            />
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
