import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Images/logo.png";

const Header = () => {
  return (
    <div className="w-screen h-auto flex items-center justify-center pt-3 bg-dark-white">
      <div className="w-95 h-auto flex flex-row items-center gap-26">
        <div className="w-12 h-auto flex flex-row items-center gap-10">
          <FontAwesomeIcon
            className="text-2xl text-main-color cursor-pointer"
            icon={faBars}
          />
          <div className="flex flex-row items-center cursor-pointer">
            <img src={Logo} className="w-30" alt="web logo" />
            <span className="font-poppins text-2xl font-800 text-main-color">
              CookTube
            </span>
          </div>
        </div>
        <div className="w-30 h-10 flex flex-row items-center border border-dark-grey rounded-md">
          <input
            type="text"
            className="w-95 px-3 border-none outline-none"
            placeholder="Search..."
          ></input>
          <FontAwesomeIcon
            className="text-dark-grey cursor-pointer"
            icon={faSearch}
          />
        </div>
        <div className="w-7 h-auto flex flex-row items-center gap-6">
          <FontAwesomeIcon
            className="text-2xl text-dark-grey cursor-pointer"
            icon={faHeart}
          />
          <FontAwesomeIcon
            className="text-2xl text-dark-grey cursor-pointer"
            icon={faShoppingCart}
          />
          <FontAwesomeIcon
            className="text-2xl text-dark-grey cursor-pointer"
            icon={faUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
