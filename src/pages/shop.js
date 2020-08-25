import React from "react";
import shopdata from "../data";
import Preview from "../components/collection-preview";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectons:shopdata
    };
  }

  render() {
    return (
    <div className="shop-page">
      {
        this.state.collectons.map(({id, ...rest})=>(<Preview key={id} {...rest}/>))
      }
    </div>
    );
  }
}

export default Shop;
