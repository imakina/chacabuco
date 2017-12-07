import React, { Component } from "react";

class Products extends Component {

  render() {

    return (
      <div>
        <h1 className="ui header">Products</h1>
        <div className="ui container stackable two column grid">
            <div className="column">
            <p> select product </p>
            </div>
            <div className="column">
            <p> selected product </p>
            </div>
        </div>    
      </div>
    );
  }
}

export default Products;
