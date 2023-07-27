import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSumary from "./CartSumary";
import "./Navi.css";
import { GiMagicLamp } from "react-icons/gi";
import {GrNotes, } from "react-icons/gr";
import {HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import Profile from "./Account.js";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="secondary" light expand="xs">
          <NavbarBrand className="navbarBrand" href="/home">
            {" "}
            <GiMagicLamp size={50} color="#a7bff8" /> Grocery Genie
          </NavbarBrand>
          <NavbarText>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link to="/not"> <GrNotes></GrNotes>Not Defteri</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.google.com/maps/@39.0876459,35.1777724,6z">
                  <HiLocationMarker></HiLocationMarker>
                    Market bul
                  </NavLink>
                </NavItem>
                

                <CartSumary
                  removeFromCart={this.props.removeFromCart}
                  cart={this.props.cart}
                ></CartSumary>
                <Profile></Profile>
              </Nav>
            </Collapse>
          </NavbarText>
        </Navbar>
      </div>
    );
  }
}
