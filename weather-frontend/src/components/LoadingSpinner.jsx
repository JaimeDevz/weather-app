import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
    </div>
  );
};

export default LoadingSpinner;
