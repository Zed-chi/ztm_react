import React from "react";
import Item from "./collection-item";

const Preview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((x, i) => i < 4)
        .map(({id, ...rest }) => (
          <Item key={id} {...rest}/>
        ))}
    </div>
  </div>
);

export default Preview;
