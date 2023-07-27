import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import './GirisYap.css'


export default class CartList extends Component {
  
  
  renderCart() {
    return (
      
      <Table  striped>
        <thead>
          <tr>
            <th>Ürün Listesi ~ {new Date().toLocaleDateString()}</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
             
              <td>{cartItem.product.productName}</td>
             
              <td>
                <Button
                  color="danger"  
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  Sil
                </Button>
              </td>
              <td>.</td>
              <td>.</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    );
   
  }
  render() {
    return <div >{this.renderCart()}
     <Button className="link"> <Link to="/home">  Kaydet</Link></Button></div>;
  }
}
