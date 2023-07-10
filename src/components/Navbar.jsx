import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="h-16">
      <div className="flex justify-between px-5 py-2.5">
        <div className="flex flex-1 items-center">
          <span className="cursor-pointer text-sm">EN </span>
          <div className="border border-solid border-gray-300 flex items-center ml-6 p-1">
            <input className="outline-none" type="text" placeholder="search" />
            <SearchIcon className="text-gray-600 text-md cursor-pointer" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-3xl text-center cursor-pointer">
            Madam Ink Online
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end overflow-hidden">
          <div className="text-sm cursor-pointer m-4">REGISTER</div>
          <div className="text-sm cursor-pointer m-4">SIGN IN</div>
          <div className="text-sm cursor-pointer m-4">
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
