import React, { useContext, useState } from "react";
import { GrNotification } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import userAvatar from "../../assets/images/image4.png";
import totelLogo from "../../assets/images/totelLogo.png";
import NotificationContext from "../../context/Context";

import "./Header.css";
import SmallScreenNav from "./SmallScreenNav";
const Header = () => {
  const { setShowDialog } = useContext(NotificationContext);
  const [showBar, setShowBar] = useState(true);
  const [showDropdown, setshowDropdown] = useState(false);
  const handleNotificationClick = () => {
    setShowDialog(true);
  };

  const handleToggleClick = () => {
    setShowBar((prevShowBar) => !prevShowBar);
    setshowDropdown(true);
    if (showDropdown) {
      setshowDropdown(false);
    }
  };

  const navLinks = ["inbox", "Wishlist", "Reservation", "Listing"];

  return (
    <div className="lg:px-10 px-2 bg-white shadow">
      {/* this navbar will hide in small screen */}
      <nav className="lg:flex justify-between items-center h-[80px] hidden ">
        <Link>
          <img src={totelLogo} alt="" />
        </Link>
        <ul className="flex items-center ">
          {navLinks.map((link) => (
            <li className="p-5">
              <Link
                href="#"
                className="hover:text-primaryColor text-black font-inter text-[14px] font-[600]"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex  items-center gap-4">
          <button className="px-5 py-3  border-2 font-inter text-[15px] font-[600] rounded-full hover:bg-primaryColor hover:text-white hover:border-transparent">
            Create Post
          </button>
          <GrNotification
            color="red"
            className="cursor-pointer hover:primaryColor hover-icon border-2 h-12 w-12 rounded-full p-2"
            onClick={handleNotificationClick}
          />
          <img
            src={userAvatar}
            alt=""
            className="h-12 w-12 border-2 rounded-full cursor-pointer"
          />
        </div>
      </nav>

      {/* this navbar will show small screen  */}
      <nav className="flex items-center justify-between h-[80px] lg:hidden">
        <div>
          <img src={totelLogo} alt="" />
        </div>
        <div className="cursor-pointer h-10 w-10 p-2 flex items-center justify-center hover:bg-slate-200 rounded-full">
          {showBar ? (
            <svg
              onClick={handleToggleClick}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clip-path="url(#clip0_212_476)">
                <path
                  d="M4.16162 18H20.1616C20.7116 18 21.1616 17.55 21.1616 17C21.1616 16.45 20.7116 16 20.1616 16H4.16162C3.61162 16 3.16162 16.45 3.16162 17C3.16162 17.55 3.61162 18 4.16162 18ZM4.16162 13H20.1616C20.7116 13 21.1616 12.55 21.1616 12C21.1616 11.45 20.7116 11 20.1616 11H4.16162C3.61162 11 3.16162 11.45 3.16162 12C3.16162 12.55 3.61162 13 4.16162 13ZM3.16162 7C3.16162 7.55 3.61162 8 4.16162 8H20.1616C20.7116 8 21.1616 7.55 21.1616 7C21.1616 6.45 20.7116 6 20.1616 6H4.16162C3.61162 6 3.16162 6.45 3.16162 7Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_212_476">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.161621)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <FaTimes onClick={handleToggleClick} />
          )}
        </div>
      </nav>

      {showDropdown && <SmallScreenNav />}
    </div>
  );
};

export default Header;
