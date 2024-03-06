import React from "react";

const ProgressBar = ({ name, percentage }) => {
  return (
    <>
      <div className="flex justify-between mb-1 w-3/4">
        <span className="text-2xl mt-3 font-medium text-black-500">{name}</span>
        <span className="text-2xl mt-3 font-medium text-black-500">{percentage}%</span>
      </div>
      <div className="w-3/4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
