"use client";
import React, { useState, useEffect } from "react";

const Results = ({ state, city, zip, search }) => {
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
          <p>Name: </p>
          <p>Location: </p>
          <p>NPI: </p>
          <p>Taxonomy: </p>
        </div>
      </div>
      <div className="flex flex-row p-2 round-lg border border-solid border-black">
        Profile Picture
      </div>
      <div className="flex flex-row p-2 rounded-lg border border-solid border-black">
        <p>Name: </p>
        <p>Location: </p>
        <p>NPI: </p>
        <p>Taxonomy: </p>
      </div>
    </div>
  );
};

export default Results;
