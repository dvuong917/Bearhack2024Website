import Landing from "../components/Landing";
import Button from "../components/Button";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Landing />
      <div className="flex flex-col text-center">
        <Button text="Search" background="bg-cyan-300" />
      </div>
    </div>
  );
};

export default page;
