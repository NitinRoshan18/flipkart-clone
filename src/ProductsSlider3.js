import React from "react";
import "./ProductsSlider3.css";
import { LiaGreaterThanSolid } from "react-icons/lia";

function ProductsSlider() {
  const products = [
    {
      id: 1,
      image:
        "https://rukminim2.flixcart.com/image/612/612/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70",
    },
    {
      id: 2,
      image:
        "https://rukminim2.flixcart.com/image/612/612/l0pm3680/wall-decoration/p/7/e/macrame-wall-shelf-pure-cotton-2-board-with-dori-wall-hanging-original-imagcfmrdtn2m2vw.jpeg?q=70",
    },
    {
      id: 3,
      image:
        "https://rukminim2.flixcart.com/image/612/612/k44hksw0/wall-clock/3/z/n/403-403white-analog-kadio-original-imafn3chkfwasuqe.jpeg?q=70",
    },
    {
      id: 4,
      image:
        "https://rukminim2.flixcart.com/image/612/612/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70",
    },
    {
      id: 5,
      image:
        "https://rukminim2.flixcart.com/image/612/612/k3j1z0w0/ceiling-lamp/w/7/r/gold-01-classical-original-imafmbywhhurgf6b.jpeg?q=70",
    },
    {
      id: 6,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/bulb/z/2/m/-original-imagz4fqyp8jw3sd.jpeg?q=70",
    },
    {
      id: 7,
      image:
        "https://rukminim2.flixcart.com/image/612/612/kflftzk0pkrrdj-0/spiritual-festive-decor/k/y/e/ad-42-dealfreez-original-imafw3sfsqgwsuzg.jpeg?q=70",
    },
    {
      id: 8,
      image:
        "https://rukminim2.flixcart.com/image/612/612/kekadu80/sticker/z/z/k/wall-decals-pink-tree-with-birds-and-nest-wall-stickers-pvc-original-imafv826gpzauzjr.jpeg?q=70",
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
    <div className="carousel_container2">
      <span className="product__header">
        <h3>Beauty, Food, Toys & more </h3> <LiaGreaterThanSolid  className="product__header_icon2"/>
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
  );
}
export default ProductsSlider;
