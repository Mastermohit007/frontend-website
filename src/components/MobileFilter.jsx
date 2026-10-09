import React, { useContext } from "react";
import { RiFilterFill } from "react-icons/ri";
import { DataContext } from "../context/DataContext";

const MobileFilter = ({
  openfilter,
  setOpenfilter,
  search,
  setSearch,
  brand,
  setBrand,
  price_range,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange,
}) => {
  const { uniqueProduct, brandProduct } = useContext(DataContext);

  const toggle = () => {
    setOpenfilter(!openfilter);
  };

  return (
    <>
      <div className="bg-gray-300 flex justify-between items-center mt-5 rounded-md px-4 py-2 md:hidden">
        <h1 className="font-semibold text-xl">filter</h1>
        <RiFilterFill onClick={() => toggle()} />
      </div>
      {openfilter ? (
        <div className="bg-gray-200 p-2 md:hidden ">
          <input
            type="text"
            id="filter-one"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white rounded-md p-2 border-2 w-full"
          />
          {/* heading part */}
          <h1 className="p-2 rounded-md mt-10 text-center bg-violet-300 text-xl font-bold ">
            Category
          </h1>
          {/* category-wise products */}
          <div className="flex flex-col  pt-2 mt-1">
            {uniqueProduct?.map((product_cate, index) => {
              return (
                <div key={index} className="flex  w-[200px] gap-2 pt-3 ">
                  <input
                    type="checkbox"
                    name={product_cate}
                    id=""
                    value={product_cate}
                    onChange={handleCategoryChange}
                    checked={category === product_cate}
                  />
                  <button className="cursor-pointer  overflow-hidden text-xl font-semibold">
                    {product_cate}
                  </button>
                </div>
              );
            })}
          </div>
          {/* brand-wise products  */}
          <h1 className="p-2 rounded-md mt-10 text-center bg-violet-300 text-xl font-bold ">
            Brand
          </h1>
          <select
            name=""
            id=""
            value={brand}
            onChange={handleBrandChange}
            className="w-[200px] mt-5 border-3 border-black rounded-md bg-white w-full"
          >
            {brandProduct?.map((item, index) => {
              return (
                <option key={index} className="text-semibold overflow-hidden">
                  {item}
                </option>
              );
            })}
          </select>
          <h1 className="p-2 rounded-md mt-10 text-center bg-violet-300 text-xl font-bold ">
            Price Range
          </h1>
          <div className="flex flex-col gap-5 items-center mt-5">
            <label>Price Range : ${price_range[1]}</label>
            <input
              type="range"
              name="price"
              min={2}
              max={100}
              value={price_range[1]}
              onChange={(e) =>
                setPriceRange([price_range[0], Number(e.target.value)])
              }
            />
            <button
              className="bg-red-600 text-white rounded-md p-2 mt-5 m-3 hover:bg-red-500 "
              onClick={() => {
                setSearch("");
                setBrand("All");
                setCategory("All");
                setOpenfilter(false);
              }}
            >
              Reset filter
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileFilter;
