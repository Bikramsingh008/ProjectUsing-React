import React from "react";
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = ({count}) => {


  return (
    <div className="Header">
      <div>
        <p>
          Yummy<span style={{ color: "rgb(233, 162, 22)" }}>Food</span>
        </p>
      </div>

      <div>
        <ul className="parts">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/ourfood">Our Food</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <p
          className="menu-button"
          style={{ fontSize: "30px", cursor: "pointer" }}
        >
          <GiHamburgerMenu />
        </p>
        <div style={{ fontSize: "30px", padding: "30px", cursor:'pointer'}}>
          <div>{count}</div>
          <FaCartShopping />
        </div>
      </div>
    </div>
  );
};

export default Header;
