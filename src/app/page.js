import Landing from "../components/Landing";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Landing />
      <div>
        <Button text="Search" background="bg-cyan-300" />
      </div>
      <Dropdown />
    </div>
  );
};

export default page;
