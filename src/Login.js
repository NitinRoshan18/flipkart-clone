import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login_left">
        <h2>Login</h2>
         <p>Get access to your Orders,</p> <p> Wishlist and Recommendations</p>
      </div>
      <div className="login_right">
         <input type="text" className="username" placeholder="Enter Email/Mobile number"/>
         <input type="password" className="password" placeholder="Enter Password"/>
         <p className="terms">By continuing, you agree to Flipkart's <a>Terms of Use</a> and <a>Privacy Policy.</a></p>
         <button className="login_btn">Login</button>
        <p className="sign_up_para"> New to Flipkart? Create an account</p>

      </div>
    </div>
  );
}

export default Login;
