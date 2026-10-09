import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";

const facility = [
  { icon: FaTruckMoving, text: "free shipping", subtext: "On order over $100" },
  { icon: FaLock, text: "Secure Payment", subtext: "100% Secure payment" },
  {
    icon: GiReturnArrow,
    text: "Easy return",
    subtext: "10 days return ploicy",
  },
  {
    icon: BsFillClockFill,
    text: "24/7 support",
    subtext: "Dedicated customer service",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {facility.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center text-center sm:text-left"
              >
                <item.icon
                  className="h-10 w-10 flex-shrink-0 text-gray-700 "
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {item.text}
                  </p>
                  <p className="text-sm mt-1text-gray-900">{item.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
