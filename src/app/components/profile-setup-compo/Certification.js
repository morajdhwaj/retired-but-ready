import React from "react";

const Certification = ({ stepUp, stepDown }) => {
  return (
    <div>
      <div className=" flex flex-col mx-20">
        <h1 className="text-2xl font-bold ">Certifications</h1>
        <h3 className="text-gray-400 text-noraml mt-5  ">
          [Example:Microsoft Certifified Solution Associate (MCSA)]
        </h3>
        <div className="mt-8 flex flex-col gap-4 w-auto  ">
          <input
            type="text"
            className="bg-gray-100 border rounded-lg   border-gray-300 py-1"
          />
          <input
            type="text"
            className="bg-gray-100 border  border-gray-300 py-1  rounded-lg  "
          />
          <input
            type="text"
            className="bg-gray-100 border  border-gray-300 py-1  rounded-lg "
          />
          <input
            type="text"
            className="bg-gray-100 border   border-gray-300 py-1  rounded-lg  "
          />
          <input
            type="text"
            className="bg-gray-100 border  border-gray-300 py-1  rounded-lg  "
          />
          <input
            type="text"
            className="bg-gray-100 border  border-gray-300 py-1  rounded-lg  "
          />
        </div>
        <div className="mt-8  font-semibold">
          <h2 className="text-gray-700  text-lg">
            Would you like to charge for your services?
          </h2>
          <div className="flex  items-center gap-5 mt-3 ">
            <input type="radio" value="yes" id="Yes" name="option" />
            <label for="yes">Yes</label>
            <input type="radio" value="no" id="No" name="option" />
            <label for="No">No</label>
          </div>

          <div className=" mt-5 ">
            <h1 className="text-gray-700  text-lg">Currency you accept</h1>
            <select
              type="text"
              className="bg-gray-100 border rounded-lg w-[500px]  border-gray-300 py-1 mt-3"
            >
              <option>INR</option>
              <option>USD</option>
              <option>EURO</option>
            </select>
          </div>
          <div className="text-gray-700  text-xl mt-5">
            <h1>About you</h1>
          </div>
        </div>
        <div>
          <h3 className="text-gray-700 text-lg  mt-3 w-[100%]">
            Keep it crisp.Keep is classy.You can write about your years of
            experience,Industry or achievements.You can also share your hobbies
            Or Quirks
          </h3>
        </div>
        <input
          type="text"
          placeholder="(this will be visible to other along with your photo ,so make it crisp and classy)
          "
          className="bg-gray-100 border rounded-lg mt-3   border-gray-300    h-[200px]"
        />
        <h2 className="text-gray-700  text-lg mt-10">
          Max character limit-1000
        </h2>

        <div>
          <h1 className="  text-2xl text-[#773FC6] mt-10 text-center">
            Preview as visitor
          </h1>
          <div className="text-center mt-5 flex gap-10 items-center justify-center rounded ">
            <button
              onClick={stepDown}
              className="border-2 border-[#773FC6] w-[200px] text-[#773FC6] py-1 text-xl font-semibold "
            >
              Go back
            </button>
            <button className="border-2 border-[#773FC6] w-[200px]  py-1 text-xl font-semibold  bg-[#773FC6] text-white rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
