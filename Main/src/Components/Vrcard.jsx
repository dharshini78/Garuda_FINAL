import React from "react";

const Vrcard = ({ img, title, desc }) => {
  return (
    <div className="flex flex-wrap justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-5 w-[385px] h-[450px]">
      <div className="w-[385px]">
        <img
          src={img}
          className="object-cover w-[385px] h-[385px] rounded "
        ></img>
      </div>
      <div className="p-5 flex justify-center text-center">
        <a href="#">
          <h5 className="flex justify-center mb-2 text-2xl font-normal text-center tracking-tight text-black dark:text-white ">
            {title}
          </h5>
        </a>
      </div>
      <div className="">
        <a
          href="#"
          className="flex items-center px-3 py-2 font-normal text-3xl justify-center text-center text-white bg-[#007FF8] rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[385px] h-[70px]"
        >
          Purchase
        </a>
      </div>
    </div>
  );
};
export default Vrcard;
