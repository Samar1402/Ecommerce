import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductArray from "./ProductArray";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("jeans");
  const [show, setShow] = useState(4);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = ProductArray.filter(
    (item) => item.category === selectedCategory
  );

  const ShowMore = () => setShow((prev) => prev + 4);
  const ShowLess = () => setShow(4);

  return (
    <div className="p-4">
      {/* Category Buttons */}
      <div className="mb-8 flex justify-center space-x-4">
        {["jeans", "shirts", "tshirts"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setShow(4);
            }}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 capitalize"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
        {filteredProducts.slice(0, show).map((item) => (
          <div
            key={item.id}
            className={`bg-white p-6 rounded-lg transition duration-300 cursor-pointer relative ${
              hoveredId === item.id ? "z-20 scale-110 shadow-2xl" : "z-0"
            }`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => navigate(`/details/${item.id}`)}
          >
            <div className="w-full h-96 mb-4">
              <img
                src={item.image}
                alt="product"
                className="w-full h-full object-contain rounded"
              />
            </div>
            <p className="text-xl font-semibold">{item.name}</p>
            <p className="text-lg text-blue-600">{item.Price}</p>
            <p className="text-sm text-gray-500">{item.Size}</p>
          </div>
        ))}
      </div>

      {/* Show More / Less Buttons */}
      <div className="flex justify-center space-x-4">
        {show < filteredProducts.length && (
          <button
            onClick={ShowMore}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Show More
          </button>
        )}
        {show > 4 && (
          <button
            onClick={ShowLess}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
