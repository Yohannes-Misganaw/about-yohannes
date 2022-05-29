import React from "react";
import { products } from "./data";
import Product from "./Product";

function Pl() {
  return (
    <div className="relative flex flex-col md:h-700 h-840 bg-gray-200">
      <div className="absolute md:mt-32 md:left-4 mt-44 w-72 h-72 bg-purple-300 rounded-full animate-blob filter blur-lg opacity-80"></div>
      <div className="absolute md:mt-40 mt-320 md:left-500 w-72 h-72 bg-yellow-300 rounded-full animate-blob animation-delay-2000 filter blur-lg opacity-80"></div>
      <div className="absolute md:mt-96 mt-500 md:left-800 w-72 h-72 bg-cyan-300 rounded-full animate-blob animation-delay-4000 filter blur-lg opacity-80"></div>
      <div className="flex justify-center text-3xl mt-10 font-Oleo text-red-600 underline decoration-4">
        Here are some of my works
      </div>
      <div className="flex justify-center text-2xl font-Oleo text-red-600 mb-10 underline decoration-4">
        Check them out. 😉✌{" "}
      </div>
      <div className="flex justify-between flex-wrap w-full">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Pl;
