import React from "react";
import "./Home.css";
import Category from "./Category";
import ImgSlider from "./ImgSlider";
import ProductsSlider from "./ProductsSlider";
import ProductsSlider2 from "./ProductsSlider2";
import ProductBanner from "./ProductsBanner";
import ProductsSlider3 from "./ProductsSlider3";
import Product from "./Products";
import { Footer1, Footer, Footer_End } from "./Footer";

function Home() {
  return (
    <div className="home">
      <div className="home_row">
        <Category />
      </div>
      <div className="home_row">
        <ImgSlider />
      </div>
      <div className="home_row">
        <ProductsSlider />
      </div>
      <div className="home_row">
        <ProductsSlider2 />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="iQOO 12 5G  (Legend, 12GB RAM, 256GB Storage)"
          description="| India's 1st Snapdragon® 8 Gen 3 Mobile Platform |"
          description2=" India's only Flagship with 50MP + 50MP + 64MP Camera"
          price={"54999"}
          image="https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg"
          rating={4}
        />

        <Product
          id="23456"
          title="iQOO Neo9 Pro 5G (Fiery Red, 8GB RAM, 256GB Storage) "
          description="| Snapdragon 8 Gen 2 Processor | Supercomputing Chip Q1 | "
          description2=" Flagship Level Sony IMX920 Camera"
          price={"37999"}
          image="https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <ProductBanner />
      </div>
      <div className="home_row">
        <ProductsSlider3 />
      </div>
      <div className="home_row">
        <Footer />
        <Footer1 />
        <Footer_End />
      </div>
    </div>
  );
}

export default Home;
