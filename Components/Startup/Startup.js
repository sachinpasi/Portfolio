import React from "react";

const Startup = ({ isLoading }) => {
  return (
    <div
      className={`fixed left-0 right-0 top-0 bottom-0 z-50 w-full h-screen bg-white flex justify-center items-center transform-gpu  ${
        isLoading ? "" : "-translate-x-full"
      }  transition-transform duration-1000`}
    >
      <div className="text-start  ">
        <h3 className="text-2xl font-semibold opacity-60">Hello, I'm</h3>
        <h3 className="text-grayish-green text-8xl font-semibold whitespace-normal -ml-1 ">
          Sachin
        </h3>
        <h3 className="text-3xl font-semibold opacity-60 mt-1">
          Welcome to my Portfolio
        </h3>
      </div>
    </div>
  );
};

export default Startup;
