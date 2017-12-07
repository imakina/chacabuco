import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux" 
import App from "./pages/App";

import "./index.css";
import "./semantic/dist/semantic.min.css";

import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById("root") // eslint-disable-line no-undef
);
