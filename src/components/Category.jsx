import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "../style/CategoryStyle.css";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const { uniqueProduct } = useContext(DataContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   FetchAllProducts();
  // }, []);

  return (
    <div className="bg-[#101029]">
      <div className="flex flex-wrap justify-center md:justify-around max-w-7xl mx-auto gap-7 px-4 py-5 items-center">
        {uniqueProduct?.map((element, index) => {
          return (
            <div key={index}>
              <button
                className="button-33"
                onClick={() => navigate(`/Categorywise/${element}`)}
              >
                {element}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
