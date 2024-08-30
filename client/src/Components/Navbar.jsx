import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBoxOpen,
  faBookmark,
  faClockRotateLeft,
  faDownload,
  faLayerGroup,
  faRss,
  faScroll,
  faStar,
  faUsers,
  faPhone,
  faShieldHalved,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="flex flex-col w-10 h-auto ml-2.5 gap-1 mt-4">
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faHome} />
        <span className="font-poppins text-md font-500">Home</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faUser} />
        <span className="font-poppins text-md font-500">Profile</span>
      </div>
      <hr className="border border-dark-grey w-full mt-2" />
      <span className="font-poppins text-lg font-700">You</span>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faBoxOpen} />
        <span className="font-poppins text-md font-500">Orders</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faBookmark} />
        <span className="font-poppins text-md font-500">Bookmarks</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faClockRotateLeft} />
        <span className="font-poppins text-md font-500">History</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faDownload} />
        <span className="font-poppins text-md font-500">Downloads</span>
      </div>
      <hr className="border border-dark-grey w-full mt-2" />
      <span className="font-poppins text-lg font-700">Pages</span>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faLayerGroup} />
        <span className="font-poppins text-md font-500">Categories</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faRss} />
        <span className="font-poppins text-md font-500">Free</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faScroll} />
        <span className="font-poppins text-md font-500">Scripts</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faStar} />
        <span className="font-poppins text-md font-500">Reviews</span>
      </div>
      <hr className="border border-dark-grey w-full mt-2" />
      <span className="font-poppins text-lg font-700">Company</span>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faUsers} />
        <span className="font-poppins text-md font-500">AboutUs</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faPhone} />
        <span className="font-poppins text-md font-500">ContactUs</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faShieldHalved} />
        <span className="font-poppins text-md font-500">Privacy Policy</span>
      </div>
      <div className="w-full h-9 border border-main-color rounded-md flex items-center pl-5 gap-5 cursor-pointer">
        <FontAwesomeIcon className="text-md" icon={faDatabase} />
        <span className="font-poppins text-md font-500">Terms Of Services</span>
      </div>
      <hr className="border border-dark-grey w-full mt-2" />
      <span className="font-poppins text-md font-500 text-dark-grey">
        Copyright © 2024 CookTube. All Right Reseved.
      </span>
    </div>
  );
};

export default Navbar;
