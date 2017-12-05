import React, { Component } from "react";

class Invoice extends Component {

  render() {

    return (
      <div>
        <h1 class="ui header">Invoice</h1>
        <div class="ui container stackable two column grid">
            <div class="column">
            <p> select product </p>
            </div>
            <div class="column">
            <p> selected product </p>
            </div>
        </div>    
      </div>
    );
  }
}

export default Invoice;
