import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { PiStarFourBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { PiGiftLight } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoTrendingUp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Cart from "./Cart";

function Header() {
  return (
    <div className="header">
      <div className="flipkart_logo">
        <Link to="/">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
        </Link>
      </div>

      <div className="flipkart_search">
        <CiSearch className="search_icon" />
        <input
          type="text"
          className="header_input"
          placeholder="Search for Products, Brands and More"
        />
      </div>
      <Link to="/Login" className="link-button">
        <div className="flipkart_user">
          <span className="sign_more">
            <PiUserCircleThin className="user_icon" />
            <sp
              className="header_text"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </sp>
            <SlArrowDown className="down_arrow" />

            <div className="sign-options">
              <div className="sign__up">
                <span>New Customer?</span>
                <span id="sign_up">Sign Up</span>
              </div>

              <div className="options">
                <PiUserCircleThin className="sign_icons" />
                <a href="#">My Profile</a>
              </div>
              <div className="options">
                <PiStarFourBold className="sign_icons" />
                <a href="#">Flipkart Plus </a>
              </div>
              <div className="options">
                <BsBoxSeam className="sign_icons" />
                <a href="#">Orders</a>
              </div>
              <div className="options">
                <CiHeart className="sign_icons" />
                <a href="#">Wishlist</a>
              </div>
              <div className="options">
                <PiGiftLight className="sign_icons" />
                <a href="#">Rewards</a>
              </div>
              <div className="options">
                <FaRegCreditCard className="sign_icons" />
                <a href="#">Gift Cards</a>
              </div>
            </div>
          </span>
        </div>
      </Link>

      <Link to="/Cart" className="link-button">
        <div className="flipkart_cart">
          <PiShoppingCartThin className="cart_icon" />
          <span>Cart</span>
        </div>
      </Link>

      <div className="flipkart_seller">
        <BsShop className="shop_icon" />
        <span>Become a Seller</span>
      </div>

      <div className="flipkart_more">
        <AiOutlineMore className="more" />
        <div className="more-options">
          <span className="option">
            <GoBell />
            <a href="#">Notification Preferences</a>
            <br />
          </span>
          <span className="option">
            <RiCustomerServiceLine />
            <a href="#">27x7 Customer Care</a>
            <br />
          </span>
          <span className="option">
            <IoTrendingUp />
            <a href="#">Advertise</a>
            <br />
          </span>
          <span className="option">
            <MdOutlineFileDownload />
            <a href="#">Download App</a>
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
