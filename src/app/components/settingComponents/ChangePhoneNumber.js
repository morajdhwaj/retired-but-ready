import React from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";

const ChangePhoneNumber = ({ optionFunction, showOption }) => {
  return (
    <>
      <div className="shadow-xl p-4 pb-10 min-h-[30vh] bg-white rounded-lg ">
        <button className="flex gap-2 items-center ">
          <IoReturnUpBackSharp size={25} />
          <span className="text-sm">Back</span>
        </button>
        <div className="pl-8 mt-5">
          <div className="">
            <h1 className="text-lg font-semibold">Phone Number</h1>
            <p className="text-md">Number you have added</p>
          </div>
          <div className="mt-3">
            <p className="text-md">Primary Number</p>
            <p className="text-sm">91+ 1234567899</p>
            <button
              className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-5 ${
                showOption == "addPhone" ? "hidden" : "block"
              }`}
              onClick={() => optionFunction("phoneOtp")}
            >
              Add Number
            </button>
          </div>
          <div className="mt-10">
            <input
              type="text"
              className={`rounded-lg w-64 p-2 border-2 ${
                showOption == "addPhone" ? "block" : "hidden"
              } `}
            />
            <button
              className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-3 ${
                showOption == "addPhone" ? "block" : "hidden"
              }`}
              onClick={() => optionFunction("security")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePhoneNumber;
