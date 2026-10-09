import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowSingleProduct from "./ShowSingleProduct";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "./CartContext";

const SingleProduct = () => {
  const params = useParams();
  const { addToCart } = useCart();
  console.log(params.id);
  const [Value, setValue] = useState();
  // const { addToCart } = useCart();
  // const [originalPrice, setOriginalPrice] = useState();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${params.id}`,
      );
      console.log(res);

      const product_detail = res.data;
      setValue(product_detail);
      // console.log(Value);
    } catch (error) {
      console.log(
        "error at the time of product fetching in the singleProduct components",
      );
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  // const OriginalPrice = Math.round((Value.price + (Value.price * 600) )/ 100);

  return (
    <>
      {Value ? (
        <div className="px-4 pb-3 md:px-0">
          <ShowSingleProduct title={Value.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full">
              <img
                src={Value.images[0]}
                alt={Value.title}
                className="w-full rounded-2xl object-cover "
              />
            </div>
            {/* product details */}

            <div className="flex flex-col gap-6">
              <h1 className="text-gray-600 font-bold">{Value.title}</h1>
              <div className="text-gray-700">{Value.category.name}</div>
              <p className="text-xl text-red-500 font-bold">
                ${Value.price}
                {"  "}
                <span className="line-through text-gray-700 gap-2">
                  ${Value.price + 200}
                </span>{" "}
                <span className="bg-red-500 text-white px-4 py-2 rounded-full">
                  40 % discount
                </span>
              </p>
              <p className="text-gray-600">{Value.description}</p>

              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  // onChange={ }
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-red-500"
                />
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => addToCart(Value)}
                  className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md"
                >
                  <FaCartPlus className="w-6 h-6" /> Add to Cart
                </button>
              </div>
            </div>

            {/* product quantity */}
          </div>
        </div>
      ) : (
        <div className="w-[400px] bg-red-300 pt-20 h-[400px] rounded-md ">
          there is nothing to show here ,, pls refresh the page to get product
        </div>
      )}
    </>
  );
};

export default SingleProduct;
