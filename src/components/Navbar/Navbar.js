import React, { Component } from 'react'
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <nav className='nav1'>
          <div className='logo'>Sales Incentive</div>
          <ul className='ul1'>
              <li><a className='a1' href="/upload">Upload</a></li>
              <li><Link className='a1' to="/salesperson">SalesPerson</Link></li>
              <li><Link className='a1' to="/products">Products</Link></li>
              <li><a className='a1' href="/quota">Quota</a></li>
              <li><a className='a1' href="/logout">logout</a></li>
          </ul>
          
        </nav>
        <section className='section1'></section>
      </div>
    )
  }
}
