import React from "react";

const PagesOnPages = ({ page, pageHandler, dynamicPage }) => {
  const getPages = (current, total) => {
    const Pages = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) Pages.push(i);
    } else {
      if (current <= 3) {
        Pages.push(1, 2, 3, "...", total);
      } else if (current >= total - 2) {
        Pages.push(1, "...", total - 2, total - 1, total);
      } else {
        Pages.push(1, "...", current - 1, current, current + 1, "...", total);
      }
    }
    return Pages;
  };

  return (
    <div>
      <button
        disabled={page === 1}
        className={`mr-5 ${page === 1 ? "bg-red-400" : "bg-red-600"} text-white font-semibold rounded-md cursor-pointer px-3 py-2 hover:bg-red-500`}
        onClick={() => pageHandler(page - 1)}
      >
        Prev
      </button>
      {getPages(page, dynamicPage).map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              typeof item === "number" && pageHandler(item);
            }}
            className={`cursor-pointer ${item === page ? "text-red-500 border-4 border-gray-700 bg-green-400 rounded-full " : " "} mx-2 px-2 py-1`}
          >
            {item}
          </span>
        );
      })}
      <button
        disabled={page === dynamicPage}
        className={` ml-2 ${page === dynamicPage ? "bg-red-400" : "bg-red-600"} text-white font-semibold rounded-md cursor-pointer   px-3 py-2 hover:bg-red-500`}
        onClick={() => pageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PagesOnPages;
