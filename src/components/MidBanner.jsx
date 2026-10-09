import React from "react";
import banner from "../assets/banner.jpg";
import "../style/MidBannerStyle.css";

const MidBanner = () => {
  return (
    <div className="bg-gray-200 md:py-25">
      <div
        className=" relative bg-cover bg-center max-w-7xl mx-auto pt-28 bg-red-200 md:rounded-3xl h-[550px] md:h-[600]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:rounded-3xl bg-opacity-50 flex justify-center items-center">
          <div className="text-white text-center px-4  ">
            <h1 className="grand text-4xl font-bold md:text-5xl lg:text-6xl mb-4">
              This Is Banner
            </h1>
            <p className="text-lg md:text-xl mb-6 md:w-[800px] ">
              Welcome to
              <span className="font-semibold text-orange-600">
                {" "}
                360 Kingdom
              </span>
              , your one-stop destination for the latest and greatest items.
              From cutting-edge gadgets to must-have accessories, we’re here to
              power up your life with premium products and
              <strong className="text-orange-600"> unbeatable service</strong> .
            </p>
            <button className="button-62">shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
