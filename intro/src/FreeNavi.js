import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from "reactstrap";

import "./FreeNavi.css";
import { GiMagicLamp } from "react-icons/gi";

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
            <Collapse isOpen={this.state.isOpen} navbar></Collapse>
          </NavbarText>
        </Navbar>
      </div>
    );
  }
}
