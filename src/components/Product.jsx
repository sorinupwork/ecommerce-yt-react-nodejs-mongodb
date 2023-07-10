import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
  return (
    <div
      className="flex-1 m-1 h-80 flex items-center justify-center bg-blue-100 relative"
      style={{ minWidth: "280px" }}
    >
      <div className="w-48 h-48 rounded-full bg-white absolute"></div>

      <img src={item.img} alt="popular product" className="h-3/4 z-10" />
      <div className="opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out w-full h-full absolute top-0 left-0 bg-black/25 z-20 flex items-center justify-center cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-2 hover:bg-blue-200 hover:scale-110 transition-all duration-500 ease-in-out ">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-2  hover:bg-blue-200 hover:scale-110 transition-all duration-500 ease-in-out">
          <SearchOutlinedIcon />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-2  hover:bg-blue-200 hover:scale-110 transition-all duration-500 ease-in-out">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
