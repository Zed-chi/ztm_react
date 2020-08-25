import React from "react";
//import { Link } from "react-router-dom";
import SigninForm from "../components/signin";

const Sign = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className="sign-in-and-sign-up">
    
    <SigninForm/>
  </div>
);

export default Sign;
