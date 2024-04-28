import React from "react";
import SortDropdown from "./SortDropdown";

const Results = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-sky-800">
      <div className="text-6xl text-sky-400 font-bold">Search Results</div>
      <div className="text-base text-neutral-950">
        Sort By: <SortDropdown />{" "}
      </div>

      <div className="flex flex-row g p-2 round-lg border border-solid border-black">
        <img
          className="w-32 h-32 gap-3"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        ></img>
        <div>
          <div>Name: </div>
          <div>Location: </div>
          <div>NPI: </div>
          <div>Taxonomy: </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
