import Landing from "../components/Landing";
import Button from "../components/Button";
import Results from "../components/Results";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-5 bg-sky-800 h-screen">
      <Landing />
      <div className="flex flex-row gap-5 text-center justify-center items-center">
        <Button text="Search" background="bg-cyan-300" link="" />
        <Button text="COVID Tracker" background="bg-cyan-300" link="covid" />
      </div>
      <Results />
    </div>
  );
};

export default page;
