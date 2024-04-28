import React from "react";

const ProfileCard = ([doctor, locate, NPI, taxo]) => {
  return (
    <div className="justify-center items-center bg-sky-800">
      <div className="flex flex-row p-2 round-lg border border-solid border-black">
        Profile Picture
      </div>
      <div className="flex flex-col p-2 rounded-lg border border-solid border-black">
        <div>Name: </div>
        <div>Location: </div>
        <div>NPI: </div>
        <div>Taxonomy: </div>
      </div>
    </div>
  );
};

export default ProfileCard;
