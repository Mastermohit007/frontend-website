import axios from "axios";
import { children, createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  // fetching all products from api

  const FetchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products?limit=200",
      );
      const productData = res.data;
      // const newdata = productData.data;
      // const updatedData = newdata.data;
      // const obj1 = Object.assign({}, updatedData);
      // const obj2 = obj1.data
      // console.log(updatedData);
      setData(productData);
    } catch (error) {
      console.log(
        "Api data is not fetch properly, pls check the DataContext file",
      );
    }
  };
  //  fetching product category function
  const productCategory = (data, property) => {
    const newItem = data?.map((elem) => {
      return elem[property].name;
    });
    // const diffProperty = newItem.map((curElem) => {
    //   return curElem.name;
    // });
    // newCat = [...new Set(diffProperty)];
    // return newCat;
    const radhe = ["All", ...new Set(newItem)];
    return radhe;
  };
  const brandCategory = (data, property) => {
    const newItem = data?.map((elem) => {
      return elem[property];
    });
    // const diffProperty = newItem.map((curElem) => {
    //   return curElem.name;
    // });
    // newCat = [...new Set(diffProperty)];
    // return newCat;
    const radhe = ["All", ...new Set(newItem)];
    return radhe;
  };
  //   console.log(data.Category);
  const uniqueProduct = productCategory(data, "category");
  const brandProduct = brandCategory(data, "title");
  // console.log(brandProduct);

  return (
    <DataContext.Provider
      value={{ data, setData, FetchAllProducts, uniqueProduct, brandProduct }}
    >
      {children}
    </DataContext.Provider>
  );
};
