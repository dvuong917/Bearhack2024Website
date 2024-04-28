import React from "react";

const Results = () => {
  return (
    <div className="justify-center items-center bg-sky-800">
      <div className="flex flex-col text-6xl text-sky-400 font-bold">
        Search Results
      </div>
      <div className="text-base text-neutral-950">Sort By: </div>
      <div className="ml-15">
        <div className="flex flex-row p-2 round-lg border border-solid border-black">
          Profile Picture
        </div>
      </div>
      <div className="ml-15">
        <div className="flex flex-row p-2 round-lg border border-solid border-black">
          <div>Name: </div>
          <div>Location: </div>
          <div>NPI: </div>
          <div>Taxonomy: </div>
        </div>
      </div>
      <div className="flex flex-row p-2 round-lg border border-solid border-black">
        Profile Picture
      </div>
      <div className="flex flex-row p-2 rounded-lg border border-solid border-black">
        <div>Name: </div>
        <div>Location: </div>
        <div>NPI: </div>
        <div>Taxonomy: </div>
      </div>
    </div>
  );
};

export default Results;
