"use client";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const Experiences = ({
  stepUp,
  stepDown,
  englishProficiency,
  setEnglishProficiency,
  languages,
  setLanguages,
  companyName,
  setCompanyName,
  title,
  setTitle,
  step,
  setStep,
  setShowModal,
  companyStart,
  setCompanyStart,
  companyEnd,
  setCompanyEnd,
}) => {
  const [showMore, setShowMore] = useState(0);

  const handleStepUp = () => {
    if (!englishProficiency || !languages || !companyName || !title) {
      setShowModal(true);
      return;
    }
    setStep(step + 1);
  };
  const handleStepDown = () => {
    setStep(step - 1);
  };

  console.log(showMore, "start");

  return (
    <div className="h-full mx-20  ">
      <div>
        <h1 className="text-2xl font-semibold">English Proficiency</h1>
        <h4 className="text-gray-400 font-normal text-sm">
          Retired but ready is an ideal plateform for Intermediate/Native
          English speakers.
          <br />
          Please indicate your english language proficiency with honesty.
        </h4>
        <select
          value={englishProficiency}
          onChange={(e) => setEnglishProficiency(e.target.value)}
          className=" mt-5 h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
        >
          <option>Basic</option>
          <option>Conversational</option>
          <option>Competent</option>
          <option>Proficient</option>
          <option>Fluent</option>
        </select>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Other Languages you know</h1>
        <h4 className="text-gray-400 text-sm">
          Being multilingual is always a bonus.
        </h4>
        <br />
        <div className="flex flex-col gap-5">
          <input
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            className=" h-10  bg-[#f2f1f3] px-2 border-gray-300  border rounded  w-full"
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-[#773FC6] font-semibold">Work History</h1>
        <h3 className="text-[#BCC0C9] text-sm">
          This lets others know where you have worked and your wealth of
          expertise.
        </h3>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Add Experience</h1>
      </div>
      <div className="mt-5 ">
        <div className="">
          <div>
            <h2 className="text-[#808184] font-medium">Company Name*</h2>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
            />
          </div>
          <div className="mt-5">
            <h2 className="text-[#808184] font-medium">Title*</h2>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
            />
          </div>
          <div className="flex gap-6 mt-5">
            <div className="w-1/2">
              <h2 className="text-[#808184] font-medium">Start date</h2>
              <input
                value={companyStart}
                onChange={(e) => setCompanyStart(e.target.value)}
                className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                type="date"
              ></input>
            </div>
            <div className="w-1/2">
              <h2 className="text-[#808184] font-medium">End date</h2>
              <input
                value={companyEnd}
                onChange={(e) => setCompanyEnd(e.target.value)}
                className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                type="date"
              ></input>
            </div>
          </div>
        </div>
        {showMore >= 1 && (
          <div className=" mt-10">
            <div className="flex justify-end">
              <button onClick={() => setShowMore(showMore - 1)}>
                <GrClose />
              </button>
            </div>
            <div>
              <h2 className="text-[#808184] font-medium">Company Name*</h2>
              <input
                // value={companyName}
                // onChange={(e) => setCompanyName(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-[#808184] font-medium">Title*</h2>
              <input
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="flex gap-6 mt-5">
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">Start date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">End date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
            </div>
          </div>
        )}
        {showMore >= 2 && (
          <div className=" mt-10">
            <div className="flex justify-end">
              <button onClick={() => setShowMore(showMore - 1)}>
                <GrClose />
              </button>
            </div>
            <div>
              <h2 className="text-[#808184] font-medium">Company Name*</h2>
              <input
                // value={companyName}
                // onChange={(e) => setCompanyName(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-[#808184] font-medium">Title*</h2>
              <input
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="flex gap-6 mt-5">
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">Start date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">End date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
            </div>
          </div>
        )}
        {showMore >= 3 && (
          <div className=" mt-10">
            <div className="flex justify-end">
              <button onClick={() => setShowMore(showMore - 1)}>
                <GrClose />
              </button>
            </div>
            <div>
              <h2 className="text-[#808184] font-medium">Company Name*</h2>
              <input
                // value={companyName}
                // onChange={(e) => setCompanyName(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-[#808184] font-medium">Title*</h2>
              <input
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="flex gap-6 mt-5">
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">Start date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">End date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
            </div>
          </div>
        )}
        {showMore >= 4 && (
          <div className=" mt-10">
            <div className="flex justify-end">
              <button onClick={() => setShowMore(showMore - 1)}>
                <GrClose />
              </button>
            </div>
            <div>
              <h2 className="text-[#808184] font-medium">Company Name*</h2>
              <input
                // value={companyName}
                // onChange={(e) => setCompanyName(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-[#808184] font-medium">Title*</h2>
              <input
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="flex gap-6 mt-5">
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">Start date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">End date</h2>
                <input
                  className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
                  type="date"
                ></input>
              </div>
            </div>
          </div>
        )}
        {showMore < 5 && (
          <div className="flex justify-center items-center">
            <button
              onClick={() => setShowMore(showMore + 1)}
              className="text-xl text-[#773fc6] font-medium mt-10"
            >
              + ADD more positions
            </button>
          </div>
        )}

        <div className="mt-10 gap-10 flex w-full">
          <button
            onClick={handleStepDown}
            className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
          >
            Go back
          </button>
          <button
            onClick={handleStepUp}
            className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2 "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
