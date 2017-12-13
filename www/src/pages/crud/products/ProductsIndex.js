import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../../reducers/productRedux';
import { Tab } from 'semantic-ui-react'

import Table from './ProductTable';
import Form from './ProductForm';

class ProductsIndex extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : [{}],
      product : {
        code : '',
        description : '',
        price : 0,
      },
      fetching: false
    }
  }

  //
  // component
  //
  // Create 
  handleCreate = (product) => this.props.createProduct(product) 
  // Delete
  handleDelete = (product) => this.props.removeProduct(product)
  // One
  handleOne = (product) => this.setState({product:product})
  //
  // end component

  // Fetch al store para tener los productos completos
  componentDidMount() {
    this.props.listProducts()
  }

  // Recupero los prods completos
  componentWillReceiveProps(newProps) { 
    // console.log("receive props", newProps)
    this.setState({
      products: newProps.product.products,
      product: newProps.product.product,
      fetching: newProps.product.fetching
    })
  }

  renderForm = () => {
    return (
      <Tab.Pane>
        <Form
          product={this.state.product} 
          createProduct={this.handleCreate}
          fetching={this.state.fetching}
        />
      </Tab.Pane>
    )
  }

  renderTable = () => {
    return (
      <Tab.Pane>
        <Table 
          products={this.state.products} 
          handleDelete={this.handleDelete} 
          handleOne={this.handleOne} 
        />
      </Tab.Pane>
    )
  }

  render() {

    const {
      products
    } = this.state

    const menu = {
      fluid : true,
      vertical : true,
      tabular : 'right'
    }

    return (
        <Tab 
          menu={menu} 
          panes={
            [
              { menuItem: 'Crud', render: () => this.renderForm() },
              { menuItem: 'Tables', render: () => this.renderTable(products) },
            ]
          } 
        />
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    product: state.product
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    listProducts: (product) => dispatch(productActions.listRequest()),
    createProduct: (product) => dispatch(productActions.createRequest(product)),
    removeProduct: (product) => dispatch(productActions.removeRequest(product)),
    oneProduct: (product) => dispatch(productActions.oneRequest(product)),
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);
