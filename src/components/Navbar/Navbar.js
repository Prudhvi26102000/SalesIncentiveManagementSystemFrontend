import React, { Component } from 'react'
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

    logout=()=>{
      localStorage.clear();

      window.location.href="/";
    }

  render() {
    return (
      <div className='navbar'>
        <nav className='nav1'>
          <div className='logo'>Sales Incentive</div>
          <ul className='ul1'>
              <li><Link className='a1' to="/upload">Upload</Link></li>
              <li><Link className='a1' to="/salesperson">SalesPerson</Link></li>
              <li><Link className='a1' to="/products">Products</Link></li>
              <li><Link className='a1' to="/quota">Quota</Link></li>
              <li><button className='button1' onClick={this.logout}>logout</button></li>
          </ul>
          
        </nav>
        <section className='section1'></section>
      </div>
    )
  }
}
