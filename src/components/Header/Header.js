import React, { useContext } from "react";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
import userAvatar from "../../assets/images/image4.png";
import totelLogo from "../../assets/images/totelLogo.png";
import "./Header.css";
import NotificationContext from "../../context/Context";
const Header = () => {
  const { setShowDialog } = useContext(NotificationContext);

  const handleNotificationClick = () => {
    setShowDialog(true);
  };

  const navLinks = ["inbox", "Wishlist", "Reservation", "Listing"];
  return (
    <div className="px-10 bg-white shadow">
      <nav className="flex justify-between items-center">
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
    </div>
  );
};

export default Header;