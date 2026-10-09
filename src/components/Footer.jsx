import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between md:flex md:between">
        {/* first section */}
        <div className="mb-6 md:mb-0">
          <Link to="/">
            <h1 className="text-red-400 text-2xl font-bold">360 kingdom</h1>
          </Link>
          <p className="mt-2 text-sm">
            Powering Your World with the Best products
          </p>
          <p className="mt-2 text-sm">101, sahibabad Uttar pradesh 201008</p>
          <p className="text-sm">Email: kingdom360@gmail.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
        {/* second section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>
        {/* social media advertisement */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitter />
            <FaSquarePinterest />
          </div>
        </div>
        {/* newsletter advertisement  */}
        <div>
          <h3 className="text-xl font-semibold">keep smile & stay in touch</h3>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways, and more
          </p>
          <form action="" className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md  text-gray-200 focus:ring-2 focus:ring-gray-500 "
            />
            <button type="submit" className="button-62 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gyar-700 pt-6 text-sm text-center">
        <p>
          &copy {new Date().getFullYear()}{" "}
          <span className="text-red-400">360 kingdom</span>. All Rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
