import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCart from "../components/ProductCart";
import PagesOnPages from "../components/PagesOnPages";
import MobileFilter from "../components/MobileFilter";
// import Lottie from "lottie-react";
// import catnotfound from "../assets/catnotfound.json";

const Products = () => {
  const { data, FetchAllProducts } = useContext(DataContext);

  // for filtering the products from search
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price_range, setPriceRange] = useState([2, 100]);
  const [page, setPage] = useState(1);
  const [openfilter, setOpenfilter] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenfilter(false);
  };

  const filteredCategory = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category == "All" || item.category.name == category) &&
      (brand == "All" || item.title == brand) &&
      item.price >= price_range[0] &&
      item.price <= price_range[1],
  );

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenfilter(false);
  };

  // page selection
  const pageHandler = (Selectedpage) => {
    setPage(Selectedpage);
    window.scrollTo(0, 0);
  };

  const dynamicPage = Math.ceil(filteredCategory?.length / 8);
  // console.log(dynamicPage);
  // console.log(filteredCategory);

  useEffect(() => {
    FetchAllProducts();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <MobileFilter
          openfilter={openfilter}
          setOpenfilter={setOpenfilter}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          price_range={price_range}
          setPriceRange={setPriceRange}
          handleBrandChange={handleBrandChange}
          handleCategoryChange={handleCategoryChange}
        />
        {filteredCategory?.length > 0 ? (
          <>
            <div className="flex gap-8">
              <FilterSection
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                brand={brand}
                setBrand={setBrand}
                price_range={price_range}
                setPriceRange={setPriceRange}
                handleBrandChange={handleBrandChange}
                handleCategoryChange={handleCategoryChange}
              />
              {filteredCategory?.length > 0 ? (
                <div className="flex flex-col items-center gap-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-10">
                    {filteredCategory
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => {
                        return <ProductCart key={index} product={product} />;
                      })}
                  </div>
                  <PagesOnPages
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="mx-auto w-[400px] bg-red-500">
                  there is nothing to display
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-[400px]">
            {/* <Lottie animationData={catnotfound} classID="w-[500px]" /> */}
            there is nothing to display
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
