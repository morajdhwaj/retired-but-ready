import React from "react";
import { GrClose } from "react-icons/gr";
import { MdError } from "react-icons/md";
import { SiCachet } from "react-icons/si";
import ReportOption from "./pop-up/ReportOption";

const PopUp = ({
  onClick,
  title,
  message,
  action,
  error,
  close,
  setReportType,
  reportType,
}) => {
  return (
    <div className="fixed inset-0 flex  justify-center z-50">
      <div className="absolute inset-0 bg-black/50 opacity-75"></div>
      <div
        className={`bg-white rounded-md z-50  h-[50vh] w-full sm:w-4/5 md:w-3/5 xl:w-3/6 mt-20 sm:mr-20 py-5`}
      >
        {close && (
          <div className="mt-2 mr-2 flex  justify-end">
            <button onClick={close}>
              {" "}
              <GrClose color="#f96363" />
            </button>
          </div>
        )}

        <div className="flex flex-col items-center justify-between h-full pb-20 mt-5   gap-2 mx-32">
          {error ? (
            <MdError size={50} color="gray" />
          ) : (
            <SiCachet size={50} color="#39b54a" />
          )}
          <h2 className="text-2xl font-semibold text-[#773fc6] text-center">
            {title}
          </h2>

          {action == "Report" && (
            <ReportOption
              setReportType={setReportType}
              reportType={reportType}
            />
          )}
          <p className="text-lg text-center w-full ">{message}</p>
          <button
            className="bg-[#773fc6] px-20 py-2 rounded-lg text-white hover:s"
            onClick={onClick}
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
