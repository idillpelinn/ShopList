import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SideBar.css'

import { HiBarsArrowDown} from 'react-icons/hi2';
export default class Sidebar extends Component {
  render() {
    return (
      <div className='navbar'>
        
        <Link to="/category" className='menu-bars'>
            <HiBarsArrowDown color='black'size={30}></HiBarsArrowDown> <h4>{this.props.info.title}</h4>
            
        </Link>
        
        
      </div>
    )
  }
}
