import React, { Component } from "react";

class Invoice extends Component {

  render() {

    return (
      <div>
        <h1 className="ui header">Invoice</h1>
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

export default Invoice;
