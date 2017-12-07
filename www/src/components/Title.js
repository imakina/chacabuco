import React, { Component } from "react";
import { 
  Container,
  Header
} from 'semantic-ui-react'

const subtitle = {
  marginBottom: 30
}

class Title extends Component {

  render() {

    return (
        <div>
            <Header as='h2'>{this.props.title}</Header>
            <div style={subtitle}>{this.props.subtitle}</div>
            <Container text>
                {this.props.children}
            </Container>
        </div>
    )
  }
}
export default Title;