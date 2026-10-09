import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/CarouselStyle.css";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel1 = () => {
  const { data, FetchAllProducts } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    FetchAllProducts();
  }, []);
  // console.log(data);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {
          // startd

          data?.slice(0, 10).map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 "
                >
                  <div className="flex flex-col md:flex-row py-4 md:my-0  md:py-0 md:h-[600px] justify-center items-center gap-50 px-4">
                    <div className="space-y-6">
                      <h1 className="uppercase text-2xl md:text-3xl font-semibold text-red-400">
                        some data is fetched from free store api
                      </h1>
                      <h1 className="text-white text-2xl md:text-4xl font-bold uppercase md:w-[500px] ">
                        {item.title}
                      </h1>
                      <p className="md:w-[500px] h-max text-[cyan]">
                        {item.description}
                      </p>
                      <h1 className="text-[#daa520] pro  font-bold uppercase">
                        Price : ${item.price}
                      </h1>
                      <button
                        className="button-62"
                        onClick={() => navigate("/products")}
                      >
                        Shop now
                      </button>
                    </div>
                    <div className="w-[400px] bg-white rounded-full  ">
                      <img
                        src={item.images[0]}
                        alt={item.brand}
                        className="rounded-full w-[400px] shadow-red-400 shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })

          // end
        }
      </Swiper>
      <Category />
    </div>
  );
};

export default Carousel1;
