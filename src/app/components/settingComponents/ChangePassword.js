import React from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";

const ChangePassword = ({ optionFunction }) => {
  return (
    <>
      <div className="shadow-xl p-4 pb-10 min-h-[30vh] bg-white rounded-lg ">
        <button className="flex gap-2 items-center ">
          <IoReturnUpBackSharp size={25} />
          <span className="text-sm">Back</span>
        </button>
        <div className="pl-8 mt-5">
          <div className="">
            <h1 className="text-lg font-semibold">Change Password</h1>
            <p className="text-md">Create a new password</p>
          </div>

          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="">
              Type your current password
            </label>
            <input
              type="text"
              className={`rounded-lg w-72 p-1 border-2 mt-2 `}
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="">
              Type your new password
            </label>
            <input
              type="text"
              className={`rounded-lg w-72 p-1 border-2 mt-2 `}
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="">
              Type your new password
            </label>
            <input
              type="text"
              className={`rounded-lg w-72 p-1 border-2 mt-2 `}
            />
          </div>
          <button
            className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-7 `}
            onClick={() => optionFunction("security")}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
