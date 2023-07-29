import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../assets/icons/mail.png";
import like from "../../assets/icons/like.png";
import { GrNotification } from "react-icons/gr";
import NotificationContext from "../../context/Context";
const SmallScreenNav = () => {
  const { showDialog, setShowDialog } = useContext(NotificationContext);

  const handleDialogShow = () => {
    setShowDialog(true);
  };

 
  return (
    <div className="w-[94%] bg-white mx-[3%] border absolute lg:hidden">
      <ul className="py-6">
        <li className="small_nav_links_style hover:bg-[#0000000e] py-2 pl-3 hover:text-primaryColor">
          <Link
            href="#"
            className="flex gap-2 font-inter text-[16px] font-[600] items-center"
          >
            <img src={mailIcon} alt="" /> <span>Inbox</span>
          </Link>
        </li>
        <li className="small_nav_links_style hover:bg-[#0000000e] py-2 pl-3 hover:text-primaryColor">
          <Link
            href="#"
            className="flex gap-2 font-inter  items-center text-[16px] font-[600]"
          >
            <img src={like} alt="" /> <span>Wishlist</span>
          </Link>
        </li>
        <li
          className="small_nav_links_style hover:bg-[#0000000e] py-2 pl-3 hover:text-primaryColor"
          onClick={handleDialogShow}
        >
          <Link
            href="#"
            className="flex gap-2 font-inter items-center text-[16px] font-[600]"
          >
            <GrNotification /> <span>Notification</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SmallScreenNav;
