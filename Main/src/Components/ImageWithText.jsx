import React from "react";

const ImageWithText = ({ img }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <img src={img} className="w-full p-[50px] " />
      </div>
      <div className="w-1/2 px-4">
        <p className="primary-heading-about">About</p>
        <h1 className="primary-header-title">REVOLUTIONIZING EDUCATION</h1>
        <p className="text-gray-600 text-wrap text-left">
       <b> At Garuda, we believe immersive technology holds the key to shattering the limitations of traditional education. Our groundbreaking VR platform transcends textbooks and lectures, plunging learners into extraordinary educational experiences that fuel limitless understanding.  With our groundbreaking cryptocurrency rewards system, we're transforming knowledge into a currency of its own, fueling a global community of passionate, empowered learners.  Garuda isn't just about education – it's about igniting the spark of human brilliance.
       </b> </p>
      </div>
    </div>
  );
};

export default ImageWithText;
