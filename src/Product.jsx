import React from "react";

function Product({ img, link }) {
  return (
    <div className="relative md:ml-8 md:mr-8 flex bg-gray-200 md:w-72 w-5/12 h-fit overflow-hidden rounded-lg mx-3 my-4 border-4 border-black">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img w-full" />
      </a>
    </div>
  );
}

export default Product;
