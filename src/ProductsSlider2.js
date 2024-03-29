import React from "react";
import "./ProductsSlider2.css";
import { LiaGreaterThanSolid } from "react-icons/lia";

function ProductsSlider() {
  const products = [
    {
      id: 1,

      image:
        "https://github.com/NitinRoshan18/Project-7/blob/main/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?raw=truehttps://github.com/NitinRoshan18/Project-7/blob/main/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?raw=true",
    },
    {
      id: 2,

      image:
        "https://github.com/NitinRoshan18/Project-7/blob/main/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?raw=true",
    },
    {
      id: 3,

      image:
        "https://github.com/NitinRoshan18/Project-7/blob/main/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?raw=true",
    },
    {
      id: 4,

      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/b/6/r/6mm-eva-anti-slip-home-gym-exercise-workout-fitness-for-men-original-imagwcg2mug7mztp.jpeg?q=70",
    },
    {
      id: 5,

      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/y/a/2/rpm800-manual-multifunction-treadmill-with-free-installation-0-original-imagg5zfy9drkphh.jpeg?q=70",
    },
    {
      id: 6,

      image:
        "https://rukminim2.flixcart.com/image/612/612/l1zc6fk0/jam-spread/l/8/g/1-as-it-is-atom-chocolate-peanut-butter-crunchy-1kg-gluten-free-original-imagdfbdzgkunmf4.jpeg?q=70",
    },
    {
      id: 7,
      image:
        "https://rukminim2.flixcart.com/image/612/612/kx7vc7k0/musical-keyboard/m/i/i/piano-keyboard-toy-for-kids-with-mic-dc-power-option-recording-original-imag9pu54hmvqyuz.jpeg?q=70",
    },
    {
      id: 8,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/y/w/r/remote-control-super-high-speed-racing-car-with-stylish-looks-original-imagtzd4ajywcpep.jpeg?q=70",
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
        <h3>Beauty, Food, Toys & more </h3> <LiaGreaterThanSolid className="product__header_icon2"/>
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
