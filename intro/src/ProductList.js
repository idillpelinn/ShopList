import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import "./productList.css";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h7 id="baslik1">Seçili Olan Kategori: {this.props.currentCategory}</h7>
        <Table className="product" hover>
          <thead className="table-primary">
            <tr>
              <th>Ürün İd</th>
              <th>Ürün Adı</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>
                  {" "}
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="dark"
                  >
                    Ekle
                  </Button>
                </td>
                <td>.</td>
                <td>.</td>
                <td>.</td>
                <td>.</td>
                <td>.</td>
                <td>.</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
