"use client";

import { useState, useEffect } from "react";

export default function Home({ state }) {
  const [showPosts, setshowPosts] = useState();

  const apiUrl = "https://disease.sh/v3/covid-19/states/{state}";

  let displayData;

  async function pullJson() {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    displayData = responseData.cases;
    setshowPosts(displayData);
    console.log(responseData);
  }

  useEffect(() => {
    pullJson();
  }, []);

  return (
    <div className="">
      <main className="">
        <h1>
          Cases of COVID in {state}: {showPosts}
        </h1>
      </main>
    </div>
  );
}
