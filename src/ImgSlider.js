import React, { useState } from "react";
import './ImgSlider.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const slideToNextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  React.useEffect(() => {
    const interval = setInterval(slideToNextImage, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);


  return (
    <div className="image-carousel">
      <button onClick={handlePrevClick} className="prev-button">
        &lt;
      </button>
      <img src={images[currentIndex]} alt="" className="image" />
      <button onClick={handleNextClick} className="next-button">
        &gt;
      </button>
      <div className="bullet-points">
        {images.map((image, index) => (
          <li key={index} className={`bullet-point ${index === currentIndex ? "active" : ""}`} />
        ))}
        </div>
    </div>
  );
};

const images = [

  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8644f8c9570972c6.jpg?q=20"
  ,
  
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6701030f290f9f81.jpg?q=20"
  ,
  
  
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20"
  ,
  
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d3a2f1f5dfa35719.png?q=20"
  ,
  
    
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/97c710b1b8b764df.png?q=20"
  ,
  
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ae9a1349fe262071.png?q=20"
  ,
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/611e77220cd10cee.png?q=20"
  ,
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e3979c15c66e558b.jpg?q=20"
  ,
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d4e55307f526de0e.jpg?q=20"
  ,
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ea7c1f1041411ab8.jpg?q=20"
  ,

];

function ImgSlider() {
  return (
    <div className="imgSlider">
      <ImageCarousel images={images} />
    </div>
  );
}

export default ImgSlider;