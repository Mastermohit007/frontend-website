import React from "react";
import Carousel1 from "../components/Carousel1";
import MidBanner from "../components/MidBanner";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel1 />
      <MidBanner />
      <Features />
    </div>
  );
};

export default Home;
