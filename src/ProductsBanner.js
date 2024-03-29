import React from "react";
import "./ProductsBanner.css";

function ProductBanner() {
  return (
    <div className="container_products">
      <div className="product">
        <h3>Most Loved Gifts</h3>
        <div className="product__info">
          <div className="product_box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/i/k/o/free-2-5-na-na-1-bracelet001-larafashion-original-imagz7y82t6vgg83.jpeg?q=70"
              className="product_image"
              alt=""
            />
            <p>Bangles, Bracelet & A... </p>
            <h3>Special Offer</h3>
          </div>
          <div className="product_box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/l2jcccw0/headphone/p/y/v/-original-imagduskcc5srd3z.jpeg?q=70"
              className="product_image"
              alt=""
            />
            <p> Neckband</p>
            <h3>Most Loved</h3>
          </div>
          <div className="product_box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/m/z/10-wave-black-10-arivo-black-white-original-imagu2sk4az9edw4.jpeg?q=70"
              className="product_image"
              alt=""
            />
            <p>Men's Casual Shoes</p>
            <h3>Min, 70% Off</h3>
          </div>
          <div className="product_box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/g/w/4/-original-imagxp8uu5pequex.jpeg?q=70"
              className="product_image"
              alt=""
            />
            <p>Smart Watches</p>
            <h3>Min. 50% Off</h3>
          </div>
        </div>
      </div>
      <div className="ads_container2">
        <img
          src="https://github.com/NitinRoshan18/Project-7/blob/main/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?raw=true"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductBanner;
