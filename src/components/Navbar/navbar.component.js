import React from "react";
import {
  BiChevronRight,
  BiSearch,
  BiChevronDown,
  BiMenu,
} from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Kochi <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="h-12 container flex justify-between items-center">
      <div className="w-1/2 h-full flex">
        <img
          className="w-1/2 h-full object-none  "
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
          alt=""
        />
        <div className=" py-2 my-3 w-11/12 flex gap-3 items-center bg-white rounded ">
          <div className="pl-1">
            <BiSearch className="w-full h-full" />
          </div>
          <input
            type="search"
            className="w-full rounded focus:outline-none"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
      </div>

      <div className="w-1/2 ">
        <div className="flex items-center h-16  float-right ">
          <div className="h-full flex ">
            <select
              name="cars"
              id="cars"
              className="focus:outline-none bg-navCol-700 text-gray-400 text-xs flex items-center hover:text-white cursor-pointer h-full "
            >
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="h-12 flex items-center py-3 gap-3 px-3 mr-4 ">
            <img
              className="rounded-full h-full"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="h-full flex items-center text-xs text-white ">
            <h4 className="">Hi,Guest</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
const NavLd = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2">
          <div className="w-12 h-12 ">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
            <BiSearch />
            <input
              type="search"
              className="w-full focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
            Bhubaneswar
            <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-700 px-4 py-2">
        <div className="md:hidden">
          {
            //mobile screen
            <NavSm />
          }
        </div>
        <div className="hidden lg:hidden md:flex">
          {
            //tab
            <NavMd />
          }
        </div>
        <div className="hidden lg:flex">
          {
            //desktop
            <NavLd />
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
