import React from "react";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";

function CartProduct({ id, image, title, price, rating }) {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart =() => {
        dispatch({

             type: 'REMOVE_FROM_Cart',
             id: id,  
        })
    }
  return (
    <div className="cartProduct">
      <img className="cartProduct_image" src={image} />

      <div className="cartProduct_info">
         <p className="cartProduct_title">{title}</p>
         <p className="cartProduct_price">
            <small>₹</small>
           <strong>{price}</strong>
         </p>
         
          <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CartProduct;
