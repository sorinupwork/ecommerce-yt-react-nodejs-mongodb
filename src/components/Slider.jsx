import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="h-screen w-full flex relative overflow-hidden">
      <div
        className="w-12 h-12 bg-gray-200 border rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-3 cursor-pointer z-10"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftIcon />
      </div>

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="flex h-full transition-all duration-1000 ease-in-out"
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center w-screen h-screen bg-pink-100"
          >
            <div className="flex-1 h-full">
              <img src={item.img} alt={item.title} className="h-4/5" />
            </div>
            <div className="flex-1 p-12">
              <h1 className="text-7xl font-bold">{item.title}</h1>
              <p className="my-12 mx-0 text-xl font-medium tracking-wide">
                {item.desc}
              </p>
              <button className="p-3 bg-transparent text-xl cursor-pointer border-b border-black">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-12 h-12 bg-gray-200 border rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-3 cursor-pointer z-10"
        onClick={() => handleClick("right")}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Slider;
