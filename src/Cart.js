import React from "react";
import "./Cart.css";
import { BsShieldFillCheck } from "react-icons/bs";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";


function Cart() {
  const [{cart,user}, ] = useStateValue();
  return (
    <div className="cart">
      <h3>Hello,{user?.email}</h3>
      <div className="cart_left">
        <div className="cart_address">
          <p>From Saved Addresses</p>
          <input
            type="text"
            className="pincode"
            placeholder="Enter Delivery Pincode"
          />
        </div>
        <div className="cart_items">
        {cart.map(item =>(
            <CartProduct
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
            />
            ))}
          
          <div className="order_button">
            <button className="order_btn">Order Now</button>
          </div>
        </div>
      </div>
      <div className="cart_right">
        <div className="subtotal">
          <Subtotal/>
        </div>

        <p className="secure">
          
          <BsShieldFillCheck className="shield" />
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </p>
      </div>
    </div>
  );
}

export default Cart;
