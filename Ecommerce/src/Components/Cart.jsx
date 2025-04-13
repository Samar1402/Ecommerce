import React from "react";
import bagimg from "../assets/cartbag.webp";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        <img
          src={bagimg}
          alt="Empty Cart"
          className="w-60 h-60 object-contain mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Hey, it feels so light!</h3>
        <p className="text-gray-600 mb-4">
          There is nothing in your bag. Let's add some items.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
