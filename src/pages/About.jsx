import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-green-100 rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center deva">
          About 360 Kingdom
        </h1>

        <p className="text-gray-700 text-lg">
          Welcome to
          <span className="font-semibold text-red-600">360 Kingdom</span>, your
          one-stop destination for the latest and greatest items. From
          cutting-edge gadgets to must-have accessories, we’re here to power up
          your life with premium products and
          <strong>unbeatable service</strong> .
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At 360 Kingdom, our mission is to make innovative technology
            accessible to everyone. We’re passionate about connecting people
            with the tools and tech they need to thrive in a digital world — all
            at competitive prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">
            Why Choose 360 Kingdom?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Top-quality products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision a future where technology elevates everyday life. At
            <strong> 360 Kingdom</strong> , we’re committed to staying ahead of
            the curve, offering cutting-edge solutions that are both practical
            and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">
            Join the 360 Kingdom Family
          </h3>
          <p className="text-gray-700 mb-4">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional — <strong>360 kingdom</strong> has
            something for everyone.
          </p>
          <Link to={"/Products"}>
            <button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
