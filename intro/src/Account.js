import React, { useState } from 'react';
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { BiExit} from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { MdOutlineAccountCircle} from 'react-icons/md';

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs>
      
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          <MdOutlineAccountCircle></MdOutlineAccountCircle>
          Hesabım
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header> <Link to="/oldlist"> Listelerim</Link> </DropdownItem>
          <DropdownItem header> <Link to="/oldnotes">Geçmiş Notlarım</Link></DropdownItem>
          <DropdownItem header>Hesap Bilgilerim</DropdownItem>
          <DropdownItem divider />
          <DropdownItem> <BiExit /> <Link to="/">Çıkış</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
    </Nav>
  );
}

export default Example;