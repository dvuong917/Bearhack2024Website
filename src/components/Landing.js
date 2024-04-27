import React from "react";

const Landing = () => {
  return (
    <div className="flex justify-center items-center bg-sky-800">
      <div className="flex flex-col text-center text-6xl font-bold text-sky-400">
        Website Name
        <div className="text-neutral-950 text-base bg-white">
          <div className="text-3xl underline">Provider Search</div>
          <div className="text-2xl">Search by location:</div>
          <div>Zip Code: </div>
          <div>City: </div>
          <div>State: </div>
          <div>Search Radius: </div>
          <div className="text-2xl">Search by provider: </div>
          <div>Name:</div>
          <div>NPI: </div>
          <div>Taxonomy: </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
