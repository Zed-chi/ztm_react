import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className="header">
      <Link to="/">
         <i className="logo">x</i>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">shop</Link>
        <Link className="option" to="/contact">contact</Link>
        <Link className="option" to="/shop">1</Link>
        <Link className="option" to="/shop">2</Link>
      </div>
  </div>
);

export default Header;
