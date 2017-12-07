import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Main from "./pages/Main";
import Combos from "./pages/crud/CombosPage";
import Products from "./pages/crud/ProductsPage";
import Invoice from "./pages/Invoice";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/combos" component={Combos}/>
        <Route path="/products" component={Products}/>
        <Route path="/invoice" component={Invoice}/>
    </Switch>
)

export default Routes

// ./src/routes.js
// import React  from 'react';
// import { Route } from 'react-router';
// import Home from './pages/Main'
// import About from './pages/About'
// import Book from './pages/Invoice'
// import App from './pages/App'

// export default (
//   <Route path="/" component={App}>
//     {/* <IndexRoute component={Home}></IndexRoute> */}
//     <Route path="/about" component={About}></Route>
//     <Route path="/books" component={Book}></Route>
//   </Route>
// );