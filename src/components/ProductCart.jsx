import React from "react";
import "../style/MidBannerStyle.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductCart = ({ product }) => {
  // console.log(product);
  // console.log(product.title);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const changePageOnClick = () => {
    navigate(`/products/${product.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative border-red-200 border-2 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all h-max p-2">
      <img
        src={product.images[0]}
        alt={product.title}
        className="bg-gray-200 aspect-square rounded-2xl"
        onClick={() => changePageOnClick()}
      />
      <h1 className="line-clamp-2 p-2 font-semibold">{product.title}</h1>
      <p className="my-1 text-lg font-bold text-grey-800 "> ${product.price}</p>
      <button
        className="text-white bg-violet-500 rounded-3xl w-full px-3 py-2 md:gap-2 font-semibold md:font-bold text-xl flex justify-center items-center"
        onClick={() => addToCart(product)}
      >
        <MdOutlineShoppingCart className="h-6 w-6" /> Add to cart
      </button>
    </div>
  );
};

export default ProductCart;
