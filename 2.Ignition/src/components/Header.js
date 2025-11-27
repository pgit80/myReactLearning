import React from "react";
import ReactDom from "react-dom/client";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let buttonText = "Login";
  const [btnTextReact, setBtnTextReact] = useState("Login"); // this state varaible will re-render the whole header element
  // but diff algo only changes the difference from previous version
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart 🛒</li>
          <button
            className="login-btn"
            onClick={() => {
              btnTextReact === "Login"
                ? setBtnTextReact("Logout")
                : setBtnTextReact("Login");
              // this onclick is updating the button text but it is not updated on the UI
              // console.log(btnTextReact);
              // each time we are clicking on the button following process is happening
              // - A reconciliation processs is triggered
              // - React finds out the difference between old header and new header and runs the diff algo
              // - this is called a render cycle
            }}
          >
            {btnTextReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
