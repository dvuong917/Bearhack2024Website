import React from "react";
import ActiveCases from "../../components/ActiveCases";
import TotalDeaths from "../../components/TotalDeaths";

const page = () => {
  return (
    <div className="flex flex-col">
      <div>
        ACTIVE COVID CASES IN CALIFORNIA: <ActiveCases state="California" />
      </div>
      <div>
        TOTAL COVID DEATHS IN CALIFORNIA: <TotalDeaths state="California" />
      </div>
    </div>
  );
};

export default page;
