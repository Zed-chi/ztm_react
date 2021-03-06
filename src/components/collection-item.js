import React from "react";

const Item = ({ id, imageUrl, name, price }) => (
  <div
    className="collection-item"    
  >
    <div className="image"
    style={{background:`url(${imageUrl})`}}
    ></div>
<div className="collection-footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
</div>
  </div>
);

export default Item;
