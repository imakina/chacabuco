import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";
import Products from "../pages/Products";
import Invoice from "../pages/Invoice";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/products" component={Products}/>
        <Route path="/invoice" component={Invoice}/>
    </Switch>
)

export default Routes