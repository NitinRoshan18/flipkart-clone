import React from "react";
import "./ProductsSlider.css";
import { LiaGreaterThanSolid } from "react-icons/lia";

function ProductsSlider() {
  const products = [
    {
      id: 1,

      image:
        "https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/printer.webp",
        name:""
    },
    {
      id: 2,

      image:
        "https://github.com/NitinRoshan18/Project-7/blob/main/camera.jpeg?raw=true",
    },
    {
      id: 3,

      image:
        "https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/hardisk.webp",
    },
    {
      id: 4,

      image:
        "https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/ink-jet_printer.webp",
    },
    {
      id: 5,

      image:
        "https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/keyboard.webp",
    },
    {
      id: 6,

      image:
        "https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/monitor.webp",
    },
    {
      id: 7,
      image:
        "https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/projector.webp",
    },
    {
      id: 8,
      image:
        "https://raw.githubusercontent.com/NitinRoshan18/Project-7/main/camera.webp",
    },
  ];

  const carouselRef = React.useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= 300; 
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += 300; // Adjust scroll amount as needed
  };

  return (
    <div className="cont">
    <div className="carousel_container">
      <span className="product__header">
        <h3>Best of Electronics</h3> <LiaGreaterThanSolid  className="product__header_icon2"/>
      </span>
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="product-carousel" ref={carouselRef}>
        {products.map((product) => (
          <div className="product_container" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details"></div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
    <div className="flight">
        <img
          className="flight-banner"
          src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/fc822dc700322fcd.jpg?q=20"
        />
      </div>

    </div>
  );
}
export default ProductsSlider;
