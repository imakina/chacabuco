import React from 'react';
import {
  NavLink
} from "react-router-dom";

const linkStyle = {
  marginRight: 15
}


const Header = () => (
  // <nav className="ui fixed top menu navbar">
  //   <div className="ui container">
  //     <NavLink to="/" className="brand item" >Chacabuco</NavLink>
  //     <NavLink to="/products" className="active item">Products</NavLink>
  //     <NavLink to="/about" className="item">About</NavLink>
  //   </div>
  // </nav>

  <div class="ui vertical center aligned">
    <div class="ui container">
      <div class="ui pointing tabular menu">
        <NavLink to="/" className="brand item">
          <img class="logo" src="6594867.jpg" />
        </NavLink>
        <NavLink to="/invoice" className="item">Invoices</NavLink>
        <NavLink to="/combos" className="item">Combos</NavLink>
        <NavLink to="/products" className="item">Products</NavLink>
        {/* <div class="right item">
          <a class="ui button" role="button">Log in</a>
          <a class="ui button" role="button">Sign Up</a>
        </div> */}
      </div>
    </div>
  </div>


)

export default Header