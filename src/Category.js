import React from "react";
import "./Category.css";
import { SlArrowDown } from "react-icons/sl";

function Category() {
  return (
    <div className="category">
      <div className="category_options">
        <img src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" />
        <p>Grocery</p>
      </div>

      <div className="category_options">
        <img src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" />
        <p>Mobiles</p>
      </div>

      
      <div className="category_options">
          <img src="https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/fashion.webp" />
          <p className="toggle">
            Fashion <SlArrowDown className="down_arrow" />
          </p>
      </div>

      <div className="fashion_options">
        <p>New Customer?</p>
        <p id="sign_up">Sign Up</p> <hr />
        <span className="options">
          <a href="#">My Profile</a>
          <br />
        </span>
        <span className="options">
          <a href="#">flipkart Plus</a>
          <br />
        </span>
        <span className="options">
          <a href="#">Orders</a>
          <br />
        </span>
        <span className="options">
          <a href="#">Wishlist</a>
          <br />
        </span>
        <span className="options">
          <a href="#">Rewards</a>
          <br />
        </span>
        <span className="options">
          <a href="#">Gift Cards</a>
          <br />
        </span>
      </div>

      

      <div className="category_options">
        <img src="https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/electronic.webp" />
        <p>
          Electronics <SlArrowDown className="down_arrow" />
        </p>
      </div>

      <div className="category_options">
        <img src="https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/furniture.webp" />
        <p>
          Home & Furniture <SlArrowDown className="down_arrow" />
        </p>
      </div>

      <div className="category_options">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" />
        <p>Appliances </p>
      </div>

      <div className="category_options">
        <img src="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" />
        <p>Travel </p>
      </div>

      <div className="category_options">
        <img src="https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/toy.webp" />
        <p>
          Beauty, Toys & More <SlArrowDown className="down_arrow" />
        </p>
      </div>
      <div className="category_options">
        <img src="https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/2wheeler.webp" />
        <p>
          Two Wheelers <SlArrowDown className="down_arrow" />
        </p>
      </div>
    </div>
  );
}

export default Category;
