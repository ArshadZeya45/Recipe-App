import React from "react";

const Banner = () => {
  return (
    <div className="w-full mt-6 sm:mt-10 rounded-xl relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

      {/* Image */}
      <img
        src="https://t4.ftcdn.net/jpg/03/83/42/07/360_F_383420760_eLY1AXaZ5nr9ql7zcTG89k82k6OqUcez.jpg"
        alt="Banner"
        className="w-full h-40 sm:h-60 md:h-72 lg:h-96 object-cover rounded-xl"
      />
    </div>
  );
};

export default Banner;
