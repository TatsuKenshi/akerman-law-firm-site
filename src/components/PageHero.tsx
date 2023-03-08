import React from "react";
import banner1 from "../assets/banner1.jpg";

const PageHero = () => {
  return (
    <div className="relative h-96 mt-8 overflow-hidden bg-sky-900 bg-opacity-50">
      <div className="absolute z-30 flex w-full h-full">
        <div className="relative z-30 w-4/6 md:w-3/6 lg:w-2/6 px-6 py-4 text-white md:w-1/2">
          <h2 className="text-md md:text-lg lg:text-xl mb-4">
            This is a banner title
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            excepturi? Eligendi quibusdam provident atque commodi ipsum ex,
            consequatur perspiciatis ullam alias, iure quod assumenda omnis.
            Ipsam corrupti sequi eveniet nulla.
          </p>
          <span></span>
        </div>
        <div className="absolute top-0 right-0 flex w-full h-full">
          <div className="w-1/6 h-full bg-sky-900"></div>
          <div className="relative w-1/6">
            <svg
              fill="currentColor"
              viewBox="0 0 100 100"
              className="absolute inset-y-0 z-20 h-full text-sky-900"
            >
              <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 100 100"
              className="absolute inset-y-0 z-10 h-full ml-6 text-yellow-700 text-opacity-50"
            >
              <polygon points="0,0 100,0 50,100 0,100"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 block w-full h-full">
        <img
          alt="Corporate Office"
          className="object-cover h-full min-w-full"
          src={banner1}
        />
      </div>
    </div>
  );
};

export default PageHero;
