import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 className="text-3xl font-semibold m-5">Dresses</h1>
      <div className="flex justify-between">
        <div className="m-5">
          <span className="text-lg font-semibold mr-5">Filter Products:</span>
          <select className="p-2 mr-5 cursor-pointer">
            <option value="" selected disabled>
              Color
            </option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>

          <select className="p-2 mr-5 cursor-pointer">
            <option value="" selected disabled>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="m-5">
          <span className="text-lg font-semibold mr-5">Sort Products:</span>
          <select className="p-2 mr-5 cursor-pointer">
            <option value="" selected>
              Newest
            </option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
          </select>
        </div>
      </div>

      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
