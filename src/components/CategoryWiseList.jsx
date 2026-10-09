import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/CarouselStyle.css";
import { useCart } from "./CartContext";

const CategoryWiseList = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="space-y-4 mt-2 rounded md">
      <div className="flex bg-gray-200 items-center rounded-md gap-7 p-2">
        <img
          src={item.images[0]}
          alt={item.title}
          className="md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer"
          onClick={() => navigate(`/products/${item.id}`)}
        />
        <div className="space-y-2">
          <h1 className="font-bold text-xl  text-orange-500 w-full line-clamp-3">
            {item.title}
          </h1>
          <h3 className="font-bold  md:text-xl text-gray-700 w-full line-clamp-3">
            {item.description}
          </h3>
          <p>
            <span className="font-bold text-red-600 text-xl md:text-3xl">
              $ {item.price}
            </span>
          </p>
          <p className="text-sm">
            FREE Delivery upto <span className="font-bold"> Mon, 23 sept </span>{" "}
            <br />
            or fastest delivery
            <span className="font-bold "> sun, 21 sept </span>
          </p>
          <button
            className="md:button-62 bg-gradient-to-r from-[#ef4765] to-[#790679]  text-white px-3 py-1 rounded-full font-bold"
            onClick={() => addToCart(item)}
          >
            add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseList;
