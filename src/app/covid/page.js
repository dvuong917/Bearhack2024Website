"use client";
import React from "react";
import ActiveCases from "../../components/ActiveCases";
import TotalDeaths from "../../components/TotalDeaths";
import StateDropdown from "../../components/StateDropdown";
import Button from "../../components/Button";
import { useState } from "react";

const Page = () => {
  const [state, setState] = useState("California");
  return (
    <div className="flex flex-col gap-12 bg-sky-800 h-screen justify-center items-center">
      <p className="text-6xl font-bold text-sky-400"> Dr. Discover </p>
      <div className="flex flex-col bg-white rounded-xl py-3 px-3 text-xl w-9/12 text-center">
        <p className="text-3xl underline py-4">COVID-19 Tracker</p>
        <div className="flex flex-row justify-center items-center py-4 gap-5 text-gray-500 text-md">
          <StateDropdown state={state} setState={setState} />
          <p className="w-4/12 text-gray-700">
            ACTIVE COVID CASES: <ActiveCases state={state} />
          </p>
          <p className="w-4/12 text-gray-700">
            TOTAL COVID DEATHS: <TotalDeaths state={state} />
          </p>
        </div>
      </div>
      <Button text="Home" background="bg-cyan-300" link=".." />
    </div>
  );
};

export default Page;
