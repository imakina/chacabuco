import React, { Component } from "react";

import Header from '../components/Header'
import Routes from '../components/Routes'

const divStyle = {
  marginTop: 30
}

class App extends Component {

  render() {

    return (
        <div>
          <Header />
          <div className="ui container" style={divStyle}>
            <Routes />
          </div>
          </div>
    );
  }
}

export default App;
