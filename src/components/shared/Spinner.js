import React from "react";

const Spinner = () => {
  return (
    <>
      <div>
        <div className="animate-bounce">
          <div className="w-24 h-24 bg-white rounded-lg shadow-2x1">
            Loading
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
