import React from "react";
import StateDropdown from "./StateDropdown";
import DistanceDropdown from "./DistanceDropdown";

const Landing = () => {
  return (
    <div className="flex justify-center items-center bg-sky-800">
      <div className="text-6xl font-bold text-sky-400">
        Website Name
        <div className="text-neutral-950 text-base bg-white">
          <div className="flex flex-col text-3xl text-center underline">
            Provider Search
          </div>
          <div className="flex flex-col text-center text-2xl">
            Search by location:
          </div>
          <div className="ml-20">
            <div>
              State: <StateDropdown />{" "}
            </div>
            <div>
              City:{" "}
              <input
                className="rounded border  border-solid"
                text="text"
              ></input>
            </div>
            <div>
              Zip Code:{" "}
              <input
                className="rounded border  border-solid"
                text="text"
              ></input>
            </div>
            <div>
              Search Radius: <DistanceDropdown />
            </div>
          </div>
          <div className="text-2xl flex flex-col text-center">
            Search by provider:{" "}
          </div>
          <div className="ml-20">
            <div>
              Name:{" "}
              <input
                className="rounded border  border-solid"
                text="text"
              ></input>
            </div>
            <div>
              NPI:{" "}
              <input
                className="rounded border  border-solid"
                text="text"
              ></input>
            </div>
            <div>
              Taxonomy:{" "}
              <input
                className="rounded border  border-solid"
                text="text"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
