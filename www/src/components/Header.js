import React from 'react';
import {
  NavLink
} from "react-router-dom";
import { Images } from "../themes/"

const container = {
  marginTop: 15,
}

const Header = () => (
  <nav className="ui pointing tabular menu" style={container}>
    <div className="ui container">
      <NavLink to="/" className="brand item" >
        <img className="logo" src={Images.logo} alt="logo"/>
      </NavLink>
      <NavLink to="/invoice" className="item">Invoices</NavLink>
      <NavLink to="/combos" className="item">Combos</NavLink>
      <NavLink to="/products" className="item">Products</NavLink>
      <div className="right item">
        <NavLink to="/signin" role="button"> Log in</NavLink>
      </div>
    </div>
  </nav>

)

export default Header