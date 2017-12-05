import React from "react";
import Client from "./Client";

const MATCHING_ITEM_LIMIT = 25;

class ProductSearch extends React.Component {
  state = {
    products: [],
    showRemoveIcon: false,
    searchValue: ""
  };

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === "") {
      this.setState({
        products: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({
        showRemoveIcon: true
      });

      // Client.search(value, products => {
      //   this.setState({
      //     products: products.slice(0, MATCHING_ITEM_LIMIT)
      //   });
      // });

      Client.products(value, products => {
        this.setState({
          products: products.slice(0, MATCHING_ITEM_LIMIT)
        });
      });

    }
  };

  handleSearchCancel = () => {
    this.setState({
      products: [],
      showRemoveIcon: false,
      searchValue: ""
    });
  };

  onChangeQuantity = e => {
    var localproducts = this.state.products.slice();    
    localproducts[e.target.id].cantidad = e.target.value  
    this.setState({products:localproducts})
    // console.log(localproducts)
  }

  render() {
    const { showRemoveIcon, products } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };

    const productRows = products.map((product, idx) => (
      <tr key={idx}>
        <td>{product.description}</td>
        <td className="right aligned">{product.code}</td>
        <td className="right aligned">{product.price}</td>
        <td className="right aligned">
          <div className="ui fluid search">
            <input 
                className="input right aligned ui" 
                type='text' 
                id={idx} 
                placeholder="0"
                onChange={this.onChangeQuantity}
              />
          </div>
        </td>
        <td className="right aligned">
            <button
            className="btn btn-default"
            onClick={() => this.props.onProductClick(product)}>ok</button>
        </td>
      </tr>
    ));

    return (
      <div id="food-search">
        <table className="ui selectable structured table">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="ui fluid search">
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search products..."
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className="search icon" />
                  </div>
                  <i
                    className="remove icon"
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="eight wide">Descripcion</th>
              <th>Codigo</th>
              <th>Precio</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductSearch;
