import React, { Component } from 'react'
import "../Navbar/Navbar.css";

export default class Upload extends Component {
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
        <section className='section1'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" onChange={this.uploadFile}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
