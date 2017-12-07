import React from 'react';
import Header from './Header'

const layout = {

}

const main = {
  marginTop : 30
}


const Layout = (props) => (
  <div style={layout}>
    <Header />
    <div className="ui container" style={main}>
        {props.children}
    </div>
  </div>
)

export default Layout