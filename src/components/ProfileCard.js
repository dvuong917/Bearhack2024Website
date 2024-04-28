import React from "react";

const ProfileCard = ([doctor, locate, NPI, taxo]) => {
  return (
    <div className="flex flex-row g p-2 round-lg border border-solid border-black">
      <img
        className="w-32 h-32 gap-3"
        src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
      ></img>

      <div>
        <div>Name: </div>
        <div>Location: </div>
        <div>NPI: </div>
        <div>Taxonomy: </div>
      </div>
    </div>
  );
};

export default ProfileCard;
