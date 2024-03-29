import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

  function Product ({ id, title,description,description2, image, price, rating }) {

    const[{Cart}, dispatch]=useStateValue();
  
    
  
  
  const addToCart = () => {
    //dispatch items to data layer
   dispatch({
     type: "ADD_TO_Cart",
     item:{
      id: id,
      title: title,
      image: image,
      price: price,
      rating:rating,
     },
     
     
   });
  };
  
    return (
      <div className="products">
        <img
          src={image}
          alt=""
        />
        <div className="product___info">
          <p>{title}</p>
          <p>{description}</p>
          <p>{description2}</p>
          <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
           {Array.from({ length: rating }, (_, i) => (
           <p key={i}>⭐</p>
           ))}
         </div>
        </div>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    );
  }

  export default Product;