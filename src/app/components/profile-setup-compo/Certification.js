import React from "react";

const Certification = () => {
  return (
    <div>
      <div className=" flex flex-col mx-20">
        <h1 className="text-2xl font-bold ">Certifications</h1>
        <h3 className="text-gray-500 text-noraml mt-5  ">
          [Example:Microsoft Certifified Solution Associate (MCSA)]
        </h3>
        <div className="mt-8 flex flex-col gap-4 w-auto  ">
          <input
            type="text"
            className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
          />
          <input
            type="text"
            className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
          />
          <input
            type="text"
            className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
          />
          <input
            type="text"
            className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
          />
          <input
            type="text"
            className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
          />
          <input
            type="text"
            className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
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
              className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option> Option 5</option>
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
          className="bg-gray-100 border rounded-lg mt-3   border-gray-300    h-[200px]"
        />
        <h2 className="text-gray-500  text-sm mt-10">
          Max character limit-1000
        </h2>

        <div>
          <h1 className="  text-2xl text-[#773FC6] mt-10 text-center">
            Preview as visitor
          </h1>
          <div className="text-center mt-5 flex gap-10 items-center justify-center rounded ">
            {" "}
            <button className="text-[#773fc6] border-2 border-[#773fc6]  w-[200px]  font-medium  rounded py-1">
              Go back
            </button>
            <button className="bg-[#773fc6]  w-[200px] text-white font-medium rounded py-1 ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
