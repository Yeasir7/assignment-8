import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mb-12 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Listed Book</NavLink>
            </li>
            <li>
              <NavLink>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-2 p-2 border-[#23BE0A] rounded-md"
                  : "text-[#131313CC]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listedBook"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-2 p-2 border-[#23BE0A] rounded-md"
                  : "text-[#131313CC]"
              }
            >
              Listed Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pageToRead"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-2 p-2 border-[#23BE0A] rounded-md"
                  : "text-[#131313CC]"
              }
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn bg-[#23BE0A] text-white">Sign Up</a>
        <a className="btn bg-[#59C6D2] text-white">Sign In</a>
      </div>
    </div>
  );
};

export default Nav;
