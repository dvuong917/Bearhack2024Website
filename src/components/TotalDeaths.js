"use client";

import { useState, useEffect } from "react";

const TotalDeaths = ({ state }) => {
  const [showPosts, setshowPosts] = useState();

  const apiUrl = `https://disease.sh/v3/covid-19/states/${state}`;

  let displayData;

  async function pullJson() {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    displayData = responseData.deaths;
    setshowPosts(displayData);
    console.log(responseData);
  }

  useEffect(() => {
    pullJson();
  }, []);

  return showPosts;
};

export default TotalDeaths;
