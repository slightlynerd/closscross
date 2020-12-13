import { useState } from "react";
import cn from "classnames";
import logo from "../assets/logo.svg";
import graduating from "../assets/graduating.svg";
import search from "../assets/search.svg";
import star from "../assets/star.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  const [mode, setMode] = useState("training");

  return (
    <nav className="navbar px-8 py-3">
      <div className="flex justify-between">
        {/* logo */}
        <div className="flex items-center justify-center">
          <div className="flex items-center mr-4">
            <img className="block h-8 w-auto" src={logo} alt="logo"></img>
          </div>
          <div className="border border-gray-500 text-white text-sm rounded-sm">
            <button
              className={cn({
                "bg-white text-black": mode === "training",
                "px-3 font-semibold py-1": true,
              })}
              onClick={() => setMode("training")}
            >
              Training Mode
            </button>
            <button
              className={cn({
                "bg-white text-black": mode === "live",
                "px-3 font-semibold py-1": true,
              })}
              onClick={() => setMode("live")}
            >
              Live Mode
            </button>
          </div>
        </div>
        {/* filter */}
        <div className="flex items-center justify-between text-white">
          <div>
            <button className="border border-gray-500 rounded-sm font-semibold py-1 px-3 text-sm mr-2">
              Show All
            </button>
          </div>
          <div>
            <button className="border border-gray-500 bg-white text-black rounded-sm font-semibold py-1 px-3 text-sm mr-2">
              Crypto
            </button>
          </div>
          <div>
            <button className="border border-gray-500 rounded-sm font-semibold py-1 px-3 text-sm mr-2">
              Commodities
            </button>
          </div>
          <div>
            <button className="border border-gray-500 bg-white text-black rounded-sm font-semibold py-1 px-3 text-sm mr-2">
              Stock
            </button>
          </div>
          <div>
            <button className="border border-gray-500 rounded-sm font-semibold py-1 px-3 text-sm mr-2">
              Index
            </button>
          </div>
          <div>
            <button className="border border-gray-500 rounded-sm font-semibold py-1 px-3 text-sm mr-2">
              Currency
            </button>
          </div>
        </div>
        {/* notification */}
        <div className="ml-3 flex relative">
          <img src={search} alt="search" className="mr-6"></img>
          <img src={star} alt="star" className="mr-6"></img>
          <img src={graduating} alt="graduating" className="mr-6"></img>
          <div>
            <button
              className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              ></img>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
