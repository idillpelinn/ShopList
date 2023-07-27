import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,

} from "reactstrap";
import { FiShoppingCart } from 'react-icons/fi';
import {BsCart4} from 'react-icons/bs'
import './CartSummary.css'

export default class CartSumary extends Component {
  renderSummary(){
    return(
    <UncontrolledDropdown nav inNavbar>
    <DropdownToggle  nav caret>
      <BsCart4></BsCart4>
     AlışVeriş Listem
    </DropdownToggle>
    <DropdownMenu  right>
      {this.props.cart.map((cartItem) => (
        <DropdownItem className="cartlist" key={cartItem.product.id}>
            
          {cartItem.product.productName}
        
        </DropdownItem>
      ))}

      <DropdownItem >
        <Link  className="listlink" to="list"> <FiShoppingCart size={20} color="" /> Listeye Git
        </Link>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>)
        
    }
    render() {
    

    return (
      
       <div> {this.props.cart.length>0?this.renderSummary():<div></div>}</div>
       
      
    );
  }
}
