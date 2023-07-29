import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/totelLogo.png";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import instagram from "../assets/icons/instagram.png";

const FooterSocial = () => {
  return (
    <footer className="md:flex pb-10 justify-between items-center px-10 bg-white text-base-content flex-row">
      <div className="">
        <Link to="/">
          <img src={footerLogo} alt="" />
        </Link>
      </div>
      <div className="">
        <p className="text-[16px] font-[400] text-[#5F6D7E] mt-2 font-inter">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
      <div className="flex gap-6 lg:mt-0 mt-4">
        <Link to="#">
          <img src={facebook} alt="" />
        </Link>
        <Link to="#">
          <img src={google} alt="" />
        </Link>
        <Link to="#">
          <img src={apple} alt="" />
        </Link>
        <Link to="#">
          <img src={instagram} alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default FooterSocial;
