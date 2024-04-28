import React from "react";

const DistanceDropdown = () => {
  return (
    <select className="rounded border  border-solid">
      <option value="1">1 mile</option>
      <option value="5">5 mile</option>
      <option value="10">10 mile</option>
      <option value="15">15 mile</option>
      <option value="20">20 mile</option>
      <option value="30">30 mile</option>
    </select>
  );
};

export default DistanceDropdown;
