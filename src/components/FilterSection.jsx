import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const FilterSection = ({
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

  return (
    <div className="h-max w-[300px ]  bg-gray-200 mt-10 p-4 rounded-md hidden md:block">
      <input
        type="text"
        id="filter-one"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white rounded-md p-2 border-2"
      />

      {/* heading part */}
      <h1 className="p-2 rounded-md mt-10 text-center bg-violet-300 text-xl font-bold ">
        Category
      </h1>
      {/* category-wise products */}
      <div className="flex flex-col pt-2 mt-1">
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
        className="w-[200px] mt-5 border-3 border-black rounded-md bg-white"
      >
        {brandProduct?.map((item, index) => {
          return (
            <option key={index} className="text-semibold overflow-hidden">
              {item}
            </option>
          );
        })}
      </select>
      {/* price Range  */}
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
      </div>
      <button
        className="bg-red-600 text-white rounded-md p-2 mt-5 m-3 hover:bg-red-500 "
        onClick={() => {
          setSearch("");
          setBrand("All");
          setCategory("All");
        }}
      >
        Reset filter
      </button>
    </div>
  );
};

export default FilterSection;
