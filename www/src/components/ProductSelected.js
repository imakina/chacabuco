import React from "react";

export default function ProductSelected(props) {

  const { products } = props;

  const productRows = products.map((product, idx) => (
    <tr key={idx} onClick={() => props.onFoodClick(idx)}>
      <td>{product.description}</td>
      <td className="right aligned">{product.codigo}</td>
      <td className="right aligned">{product.price}</td>
      <td className="right aligned">{product.quantity}</td>
      <td className="right aligned">{product.price * product.quantity}</td>
    </tr>
  ));

  return (
    <div>
    <table className="ui selectable structured table">
    <thead>
      </thead>
      <tbody>
      <tr>
        <td className="right aligned">
          <button onClick={() => props.onPedidoClick()}>Confirmar Pedido</button>
        </td>
      </tr>
      </tbody>
    </table>
    <table className="ui selectable structured table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Selected products</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Descripcion</th>
          <th>Codigo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th className="right aligned" id="total-kcal">
            
          </th>
          <th className="right aligned" id="total-protein_g">
            {sum(products, "precio")}
          </th>
          <th className="right aligned" id="total-fat_g">
            {sum(products, "cantidad")}
          </th>
          <th className="right aligned" id="total-fat_g">
            
          </th>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}

function sum(products, prop) {
  return products
    .reduce((memo, product) => parseInt(product[prop], 10) + memo, 0.0)
    .toFixed(2);
}
