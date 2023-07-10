import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-1 m-1 relative" style={{ height: "70vh" }}>
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-5">{item.title}</h1>
        <button className="p-3 bg-white text-gray-800 cursor-pointer font-medium">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
