import React, { Component } from "react";
import ProductSelected from "../components/ProductSelected";
import ProductSearch from "../components/ProductSearch";
import Client from "../components/Client";

class Products extends Component {
  state = {
    selectedProducts: []
  };

  removeProductItem = itemIndex => {
    const filteredProducts = this.state.selectedProducts.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedProducts: filteredProducts });
  };

  addProduct = product => {
    const newProducts = this.state.selectedProducts.concat(product);
    this.setState({ selectedProducts: newProducts });
  };

  confirmPedido = () => {
    Client.pedido(this.state.selectedProducts, message => {
      alert(message);
    });
  }

  render() {
    const { selectedProducts } = this.state;

    return (
        <div className="Products">
          <div className="ui text container">
            <ProductSelected
              products={selectedProducts}
              onProductClick={this.removeProductItem}
              onPedidoClick={this.confirmPedido}
            />
            <ProductSearch onProductClick={this.addProduct} />
          </div>
        </div>
    );
  }
}

export default Products;
