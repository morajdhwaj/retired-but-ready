import React from "react";

const Certification = ({
  stepDown,
  handleSubmit,
  certificateName,
  setCertificateName,
  acceptableCurrencies,
  setAcceptableCurrencies,
}) => {
  return (
    <div>
      <div className=" flex flex-col mx-20">
        <h1 className="text-2xl font-bold ">Certifications</h1>
        <h3 className="text-gray-500 text-noraml mt-5  ">
          [Example:Microsoft Certifified Solution Associate (MCSA)]
        </h3>
        <div className="mt-8 flex flex-col gap-4 w-auto  ">
          <input
            value={certificateName}
            onChange={(e) => setCertificateName(e.target.value)}
            type="text"
            className="bg-[#f2f1f3] border px-2 border-gray-300 h-10   rounded w-full"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-gray-500  text-lg">
            Would you like to charge for your services?
          </h2>
          <div className="flex  items-center gap-5 mt-3 ">
            <input type="radio" value="yes" id="Yes" name="option" />
            <label for="yes">Yes</label>
            <input type="radio" value="no" id="No" name="option" />
            <label for="No">No</label>
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
        <input
          type="text"
          placeholder="(this will be visible to other along with your photo ,so make it crisp and classy)
          "
          className="bg-gray-100 border rounded-lg mt-3 px-2 border-gray-300    h-[200px]"
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
              onClick={stepDown}
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
