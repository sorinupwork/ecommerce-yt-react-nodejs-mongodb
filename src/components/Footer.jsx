import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col p-5">
        <h1 className="text-3xl font-semibold">Madam Ink Online</h1>
        <p className="my-5 mx-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex">
          <div className="w-10 h-10 rounded-full text-white bg-blue-800 flex items-center justify-center mr-5">
            <FacebookIcon />
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-red-500 flex items-center justify-center mr-5">
            <InstagramIcon />
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-blue-400 flex items-center justify-center mr-5">
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-7 text-lg font-bold">Useful Links</h3>
        <ul className="m-0 p-0 flex flex-wrap">
          <li className="w-1/2 mb-2">Home</li>
          <li className="w-1/2 mb-2">Cart</li>
          <li className="w-1/2 mb-2">My Acount</li>
          <li className="w-1/2 mb-2">Order Tracking</li>
          <li className="w-1/2 mb-2">Wishlist</li>
          <li className="w-1/2 mb-2">Terms & Conditions</li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-7 text-lg font-bold">Contact</h3>
        <div className="mb-5 flex items-center">
          <MapIcon className="mr-3" /> 622 Dixie Path, South Tobinchester 98336
        </div>
        <div className="mb-5 flex items-center">
          <LocalPhoneIcon className="mr-3" /> +1 234 567 890
        </div>
        <div className="mb-5 flex items-center">
          <EmailIcon className="mr-3" /> contact@madam.com
        </div>
        <img
          className="w-1/2"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
        />
      </div>
    </div>
  );
};

export default Footer;
