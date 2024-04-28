"use client";

import Landing from "../components/Landing";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import React, { useState, useEffect } from "react";

const Page = ({ state, city, zip, search }) => {
  const [results, setResults] = useState();

  const getData = async () => {
    const response = await fetch("/api/userdata", {
      method: "POST",
      body: JSON.stringify({
        state: { state },
        city: { city },
        zip: { zip },
        search: { search },
      }),
    });

    const data = await response.json();

    setResults(data);
  };

  useEffect(() => {
    getData("https://npiregistry.cms.hhs.gov/api/?version=2.1");
  }, [results]);

  console.log(results);

  return (
    <div className="">
      <Landing />
      <div className="flex flex-col text-center">
        <Button text="Search" background="bg-cyan-300" link="results" />
      </div>
      <Dropdown />
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
    </div>
  );
};

export default Page;
