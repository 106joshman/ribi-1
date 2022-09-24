import React from "react";
import { useState } from "react";

export const Paginate = ({
  donorsPerPage,
  totalDonors,
  changePage,
  // currentPage,
  // nextPage,
  // prevPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalDonors / donorsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="flex justify-center my-4">
        {/* If currentpage is beyond page 1, allow user to go back one page. You can't go back if you're on page 1. */}
        {/* {currentPage > 1 ? (
          <li className="" onclick={() => prevPage(currentPage)}>
            <a href="#">PREV</a>
          </li>
        ) : (
          ""
        )} */}
        {pageNumber.map((number) => (
          <li
            key={number}
            className="px-2 border rounded-lg hover:bg-[#f6655f] hover:text-white font-poppins cursor-pointer mx-1"
          >
            <button onClick={() => changePage(number)} className="p-2">
              {number}
            </button>
          </li>
        ))}

        {/* {currentPage < pageNumber[pageNumber.length - 1] ? (
          <li className="" onclick={() => nextPage(currentPage)}>
            <a href="#">NEXT</a>
          </li>
        ) : (
          ""
        )} */}
      </ul>
    </nav>
  );
};
