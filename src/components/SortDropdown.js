import React from "react";

const SortDropdown = () => {
  return (
    <select>
      <option value="distance">distance</option>
      <option value="alphabetical">alphabetical</option>
      <option value="npi">NPI</option>
      <option value="taxo">Taxonomy</option>
    </select>
  );
};

export default SortDropdown;
