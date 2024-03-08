import React from "react";
import "./service.css";

const Service = ({ serviceName, description, imageLink }) => {
  return (
    <div className="service">
      <div className="w-[330px] rounded-md border">
        <img
          src={imageLink}
          alt="GYM"
          className="h-[220px] w-full rounded-md object-cover"
        />
        <div className="p-7">
          <h1 className="text-xl font-bold">{serviceName}</h1>
          <p className="mt-4 text-m text-gray-600">{description}</p>
          <button
            type="button"
            className="mt-5 rounded-sm bg-yellow px-6 py-2.5 text-[14px] font-bold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
