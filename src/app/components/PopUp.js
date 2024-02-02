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
        className={`bg-white rounded-md z-50  h-[60vh] w-full sm:w-4/5 md:w-3/5 xl:w-2/5 mt-5 sm:mr-20`}
      >
        {close && (
          <div className="m-2 flex justify-end">
            <button onClick={close}>
              {" "}
              <GrClose />
            </button>
          </div>
        )}

        <div className="flex flex-col items-center justify-center h-full gap-5 mx-32">
          {error ? (
            <MdError size={50} color="gray" />
          ) : (
            <SiCachet size={50} color="#39b54a" />
          )}
          <h2 className="text-xl font-medium text-[#773fc6] text-center">
            {title}
          </h2>

          {action == "Report" && (
            <ReportOption
              setReportType={setReportType}
              reportType={reportType}
            />
          )}
          <p className="text-xs text-center">{message}</p>
          <button
            className="bg-[#773fc6] px-20 py-2 rounded-lg text-white"
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
