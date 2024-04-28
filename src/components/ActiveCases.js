"use client";

import { useState, useEffect } from "react";

const ActiveCases = ({ state }) => {
  const [showPosts, setshowPosts] = useState();

  const apiUrl = `https://disease.sh/v3/covid-19/states/${state}`;

  let displayData;

  async function pullJson() {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    displayData = responseData.active;
    setshowPosts(displayData);
    console.log(responseData);
  }

  useEffect(() => {
    pullJson();
  }, [state]);

  return showPosts;
};

export default ActiveCases;
