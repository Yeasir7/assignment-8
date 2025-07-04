import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
    return (
      <div>
        {/* header */}
        <div className="w-full py-8 flex items-center justify-center bg-[#1313130D] rounded-2xl font-black text-[28px]">
          <h1>Books</h1>
        </div>
        {/* dropdown */}
        <div className="my-8 flex items-center justify-center">
          <div className="dropdown dropdown-start ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#23BE0A] text-white"
            >
              Sort by{" "}
              <RiArrowDropDownLine className="w-[30px] h-[30px] text-white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Number</a>
              </li>
              <li>
                <a>pages</a>
              </li>
              <li>
                <a>Published Year</a>
              </li>
            </ul>
          </div>
        </div>
        {/* tabs */}
        <div className="flex -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap">
          <Link
            onClick={() => setTabIndex(0)}
            to=""
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            onClick={() => setTabIndex(1)}
            to=""
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
      </div>
    );
};

export default ListedBook;