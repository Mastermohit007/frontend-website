import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/CarouselStyle.css";
import CategoryWiseList from "./CategoryWiseList";
import { TiChevronLeft } from "react-icons/ti";

const Categorywise = () => {
  const param = useParams();
  const navigate = useNavigate();
  const itemCategory = param.category;
  const [searchData, setSearchData] = useState([]);

  const getCategoryWise = async () => {
    try {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products?limit=200",
      );
      const ProductData = res.data.filter((item) => {
        if (itemCategory === "All") {
          return item;
        }
        return item.category.name === itemCategory;
      });
      setSearchData(ProductData);

      //   console.log(ProductData);
    } catch (error) {
      console.log(
        "there is a problem to fetching the data in the category wise component ",
      );
    }
  };
  useEffect(() => {
    getCategoryWise();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto px-4 mb-10 mt-10">
          <button
            className="bg-gradient-to-r from-[#ef4765] to-[#790679] px-3 text-white text-bold py-1 rounded-md flex gap-1 justify-center items-center"
            onClick={() => navigate("/")}
          >
            <TiChevronLeft />
            Prev
          </button>
          {searchData?.map((item, index) => {
            return <CategoryWiseList key={index} item={item} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center w-[400px] h-[400px]">
          <div className="bg-red-200 w-full items-center">
            <h1>there is nothing related data to display here </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorywise;
