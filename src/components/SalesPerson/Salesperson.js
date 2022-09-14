import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css";
import "../SalesPerson/SalesPerson.css";
import { Link } from 'react-router-dom';
import axios from "axios";

 const Salesperson = ()=> {

  const [users,setUSer]=useState([]);

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result=await axios.get("http://localhost:8080/admin/allusers");
    //
    console.log(result);
    setUSer(result.data);
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8080/admin/deleteSalesPerson/${id}`);
    loadUsers();
  }

  const logout=()=>{

    localStorage.clear();

    window.location.href="/";

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
                <h1 className='heading'>List Of Sale Users</h1>
                <Link className="btn btn-outline-dark" to="/users/add">Add User</Link>
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">S.no</th>
                      <th scope="col">Email</th>
                      <th scope="col">City</th>
                      <th scope="col">Monthly_Sales</th>
                      <th scope="col">Commision</th>
                      <th scope="col">Contact</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{user.email}</td>
                          <td>{user.city}</td>
                          <td>{user.monthly_sales}</td>
                          <td>{user.commission_value}</td>
                          <td>{user.contact}</td>
                          <td>
                            {/* <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                            <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link> */}
                            <button class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                            {/* <Link class="btn btn-outline-primary mr-2">Delete</Link> */}
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


export default Salesperson;