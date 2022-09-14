import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Quota = () => {

    const logout=()=>{
        localStorage.clear();

        window.location.href="/";
    }

    const [quota,setQuota]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const res=await axios.get("http://localhost:8080/admin/quotaDetails");

        console.log(res.data);
        setQuota(res.data);
    }


  return (
    <div className='navbar'>
        <nav className='nav1'>
          <div className='logo'>Sales Incentive</div>
          <ul className='ul1'>
              <li><Link className='a1' to="/upload">Upload</Link></li>
              <li><Link className='a1' to="/salesperson">SalesPerson</Link></li>
              <li><Link className='a1' to="/products">Products</Link></li>
              <li><Link className='a1' to="/quota">Quota</Link></li>
              <li><button className='button1' onClick={logout}>logout</button></li>
          </ul>
        </nav>
        <section className='section1'>
            <div className='container'>
              <div className="py-4">
                <h1 className='heading'>Quota Details</h1>
                <Link className="btn btn-outline-dark" to="/quotas/add">Add Quota</Link>
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">S.no</th>
                      <th scope="col">City</th>
                      <th scope="col">limit</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {quota.map((quotas, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{quotas.city}</td>
                          <td>{quotas.limit}</td>
                          <td>
                            <Link class="btn btn-outline-primary mr-2" to={`/quota/editquota/${quotas.id}`}>Edit</Link>
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

export default Quota