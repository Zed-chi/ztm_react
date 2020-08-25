import React from "react";
import { withRouter } from "react-router-dom";

const Menu = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.pushState(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className="background-image"
      style={{ background: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <h3 className="subtitle">Shop now</h3>
    </div>
  </div>
);

export default withRouter(Menu);
