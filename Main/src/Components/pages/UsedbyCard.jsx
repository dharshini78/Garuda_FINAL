import React from "react";

const UsedbyCard = ({ title, desc }) => {
  return (
    <div className="bg-gray-200 w-[360px] p-7 rounded-xl shadow-lg">
      <h2 className="text-4xl mb-2 font-medium">{title}</h2>
      <div className="text text-xl">
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default UsedbyCard;
