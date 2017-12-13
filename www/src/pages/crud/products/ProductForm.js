import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as productActions from '../../../reducers/productRedux';
// import Title from '../../../components/Title';

import { 
  Form, 
  Button, 
} from 'semantic-ui-react'

class ProductForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      product : this.props.product
    }
  }

  handleChange = (e, {name,value}) => {
    this.setState({ product: { ...this.state.product, [name]: value} });
    console.log("change", this.state)
  }

  handleSave = () => this.props.createProduct(this.state.product)

  componentDidMount() {
    console.log("component mount", this.props)
  }

  componentWillReceiveProps() {
    console.log("received props")
  }

  render() {

    const { code, description, price } = this.state.product

    return (
      <div>

            <Form>

              <Form.Input
                label='Codigo'
                placeholder='Codigo' 
                name='code' 
                value={code} 
                onChange={this.handleChange} />

              <Form.Input
                label='Descripcion'
                placeholder='Descripcion' 
                name='description' 
                value={description} 
                onChange={this.handleChange} />

              <Form.Input
                label='Precio'
                placeholder='Precio' 
                name='price' 
                value={price} 
                onChange={this.handleChange} />

              <Button.Group widths='2'>
                <Button 
                  basic 
                  primary 
                  onClick={this.handleSave}
                >Guardar</Button>
                <Button basic color='red'> Cancelar</Button>
              </Button.Group>
            </Form>

            {/* <Message icon>
              <Icon name='circle notched' loading />
              <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
              </Message.Content>
            </Message> */}

    </div>    
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    // product: state.product
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    // createProduct: product => dispatch(productActions.createProduct(product)),
    // requestProducts: product => dispatch(productActions.request()),
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
