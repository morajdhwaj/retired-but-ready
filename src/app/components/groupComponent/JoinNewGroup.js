import React from "react";
import Image from "next/image";

const JoinNewGroup = () => {
  const data = [
    {
      information: "Lorem ipsum dolor",
      member: "241 member",
    },
    {
      information: "Lorem ipsum dolor",
      member: "242 member",
    },
    {
      information: "Lorem ipsum dolor",
      member: "243 member",
    },
    {
      information: "Lorem ipsum dolor",
      member: "244 member",
    },
    {
      information: "Lorem ipsum dolor",
      member: "245 member",
    },
    // {
    //   information: "Lorem ipsum dolor",
    //   member: "246 member",
    // },
  ];

  return (
    <div className="px-10  mb-28   max-h-[80vh]">
      <div className="  rounded-lg  flex flex-col items-center p-5 gap-2 self-start border bg-white">
        <div className="text-center  text-lg font-bold ml-3">
          <h1 className="text-sm">Groups you might be interested in</h1>
        </div>

        <div className="overflow-y-scroll max-h-[60vh]">
          {data.map((curelem, key) => (
            <div key={key} className="">
              <div className="mt-10 flex mx-5 ">
                <div>
                  <Image
                    src="/assets/Ellipse-39.png"
                    width={50}
                    height={50}
                    alt="pic"
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                  />
                </div>
                <div>
                  <p className=" mx-2 text-center">{curelem.information}</p>
                  <p className="text-sm mx-2">{curelem.member}</p>
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <button className="border-2 border-[#A8359C] w-20 p-1 rounded-lg text-sm font-bold">
                  Join
                </button>
              </div>
              <div className="border-2 mt-2 border-gray-200 mx-5" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5 mb-full">
          <button className="border-2  border-[#A8359C] w-40 h-10 text-lg font-medium text-center rounded-lg">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNewGroup;
