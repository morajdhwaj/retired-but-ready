import React from "react";

const SkillsComponent = ({ stepUp, stepDown }) => {
  return (
    <div className="mx-20">
      <div className="flex  flex-col gap-8 ">
        <div>
          <div className="flex">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Most recent Designation
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded">
            <option>Software Developer</option>
            <option>Testing</option>
            <option>Human Resource</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Total Work Experience
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded">
            <option>1 Year</option>
            <option>2 Year</option>
            <option>3 Year</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Personal field
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select className="bg-[#f2f1f3] border border-gray-300 h-10  w-72 rounded">
            <option>1 Year</option>
            <option>2 Year</option>
            <option>3 Year</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Personal expertise
            </h2>
            <h6 className="font-small text-gray-300 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select className="bg-[#f2f1f3] border border-gray-300 h-10 w-72 rounded">
            <option>1 Year</option>
            <option>2 Year</option>
            <option>3 Year</option>
          </select>
        </div>
      </div>

      <div className=" mt-5">
        <h1 className="font-bold text-2xl ">Personal Skills</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <div className="flex flex-col gap-2 mt-5">
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded "></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
        </div>
      </div>

      <div className="  mt-5 ">
        <h1 className="text-2xl font-bold">Professional Skills</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <div className="flex flex-col gap-2 mt-5">
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10 rounded"></input>
        </div>
      </div>

      <div className=" mt-8 flex gap-20">
        <button
          onClick={stepDown}
          className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
        >
          Go back
        </button>
        <button
          onClick={stepUp}
          className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SkillsComponent;
