import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css";
import "../Products/Products.css";

const Products = () => {

    const [products,serProducts]=useState([]);

    useEffect(()=>{
        loadProducts();
    },[]);

    const loadProducts=async()=>{
        const result=await axios.get("http://localhost:8080/admin/vehicles");
        console.log(result);
        serProducts(result.data);
    }

    const deleteProduct=async(id)=>{
        await axios.delete(`http://localhost:8080/admin/deleteVehicle/${id}`);
        loadProducts();
    }


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
        <section className='container'>
        <div className='container'>
            <div className='py-4'>
                <h1 className='heading1'>List Of Products</h1>
                <Link className='btn btn-outline-dark' to="/products/add">Add Product</Link>
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Product Cost</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{product.name}</td>
                          <td>{product.type}</td>
                          <td>{product.cost}</td>
                          <td>
                            <button class="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                          </td>
                        </tr>
                    ))}
                  </tbody>
                  
                </table>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Products