import React from "react";

const Results = () => {
  return (
    <div className="flex justify-center items-center bg-sky-800">
      <div className="text-6xl text-sky-400">Search Results</div>
      <div className="text-base text-neutral-950">Sort By: </div>
      <div className="flex flex-row p-2 round-lg border border-solid border-black">
        Profile Picture
      </div>
      <div className="flex flex-row p-2 round-lg border border-solid border-black">
        <div>Name: </div>
        <div>Location: </div>
        <div>NPI: </div>
        <div>Taxonomy: </div>
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
