import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div
      className="bg-yellow-50 flex items-center justify-center flex-col"
      style={{ height: "60vh" }}
    >
      <h1 className="text-7xl font-semibold mb-5">Newsletter</h1>
      <div className="text-2xl font-light mb-5">
        Get timely updates from your favorite products
      </div>
      <div className="w-1/2 h-10 bg-white flex justify-between border">
        <input type="text" placeholder="Your e-mail" className="flex-1 pl-4" />
        <button className="flex-none w-20 bg-teal-500 text-white">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
