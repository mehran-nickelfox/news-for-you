import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2">
        <div className="  animate-bounce">
          <div className="flex justify-items-center  w-24 h-24 bg-slate-300 rounded-lg shadow-2x1">
            <h1 className="ml-4 mt-8">Loading</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
