import React, { useReducer, useState } from "react";
import { useCart } from "../components/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../style/MidBannerStyle.css";
import "../style/CategoryStyle.css";

const Cart = () => {
  const { cartProduct, productQuantity, deleteProduct } = useCart();
  // const [count, setCount] = useState();
  const navigate = useNavigate();

  const totalPrice = cartProduct.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-10 mx-auto max-w-6xl mb-5 px-2 md:px-0">
      {cartProduct.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl">
            Cart Items : ({cartProduct.length})
          </h1>
          <div className="mt-10">
            {cartProduct.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-200 flex justify-between items-center w-full p-5 mt-3 rounded-md "
                >
                  <div className="flex items-center gap-4 px-3">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-20 w-20 rounded-md"
                      onClick={() => navigate("/Products")}
                    />
                    <div>
                      <h1 className="md:w-[300px] font-bold line-clamp-2">
                        {item.title}
                      </h1>
                      <p className="text-red-500 md:text-lg font-semibold">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-500 text-lg text-white rounded-md gap-5 font-bold p-2 flex">
                    <button
                      onClick={() =>
                        productQuantity(cartProduct, item.id, "decrease")
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        productQuantity(cartProduct, item.id, "increase")
                      }
                    >
                      +
                    </button>
                  </div>
                  <div
                    className="hover:bg-orange-600 transition-all hover:text-white rounded-md p-3 hover:shadow-2xl"
                    onClick={() => deleteProduct(item.id)}
                  >
                    <FaTrashCan className="text-2xl text-red-800  cursor-pointer " />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className=" items-center mx-100 h-[200px] ">
          <h1 className="p-10 text-green-900 text-bold text-xl ">
            your shopping cart is empty
          </h1>
          <button
            onClick={() => navigate("/Products")}
            // className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer "
            className="button-62 ml-20"
          >
            Continue Shopping
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 ">
        <div className="bg-orange-100 border-3 border-gray-300 rounded-md p-7 mt-4 space-y-2 ">
          <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 rounded-md"
              // value={user?.fullName}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="p-2 rounded-md"
              // value={location?.county}
            />
          </div>
          <div className="flex w-full gap-5">
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="">State</label>
              <input
                type="text"
                placeholder="Enter your state"
                className="p-2 rounded-md w-full"
                // value={location?.state}
              />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="">PostCode</label>
              <input
                type="text"
                placeholder="Enter your postcode"
                className="p-2 rounded-md w-full"
                // value={location?.postcode}
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="">Country</label>
              <input
                type="text"
                placeholder="Enter your country"
                className="p-2 rounded-md w-full"
                // value={location?.country}
              />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="">Phone No</label>
              <input
                type="text"
                placeholder="Enter your Number"
                className="p-2 rounded-md w-full"
              />
            </div>
          </div>
          <button className="button-87">Submit</button>
          <div className="flex items-center justify-center w-full text-gray-700">
            ---------OR-----------
          </div>
          <div className="flex justify-center">
            <button
              // onClick={getLocation}
              className="bg-red-500 text-white px-3 py-2 rounded-md"
            >
              Detect Location
            </button>
          </div>
        </div>
        <div className="bg-orange-100 border-3 border-gray-300 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
          <h1 className="text-gray-800 font-bold text-xl">Bill details</h1>
          <div className="flex justify-between items-center">
            <h1 className="flex gap-1 items-center text-gray-700">
              <span>
                <LuNotebookPen />
              </span>
              Items total
            </h1>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="flex gap-1 items-center text-gray-700">
              <span>
                <MdDeliveryDining />
              </span>
              Delivery Charge
            </h1>
            <p className="text-red-500 font-semibold">
              <span className="text-gray-600 line-through">$25</span> FREE
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="flex gap-1 items-center text-gray-700">
              <span>
                <FaBagShopping />
              </span>
              Handling Charge
            </h1>
            <p className="text-red-500 font-semibold">$5</p>
          </div>
          <hr className="text-gray-400 mt-2" />
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">Grand total</h1>
            <p className="font-semibold text-lg">
              ${totalPrice > 0 ? totalPrice + 5 : totalPrice}
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-gray-700 mb-3 mt-7">
              Apply Promo Code
            </h1>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter code"
                className="p-2 rounded-md w-full"
              />
              <button className="bg-white text-black border-3 border-gray-400 px-4 cursor-pointer py-1 rounded-3xl">
                Apply
              </button>
            </div>
          </div>
          <button className="bg-violet-900 text-white font-bold px-3 py-2 rounded-3xl w-full cursor-pointer mt-3">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
