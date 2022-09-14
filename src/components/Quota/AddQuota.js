import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddQuota = () => {


    // const navigate=useNavigate();
//     const [user,setUSer]=useState({
//         email : "",
// 	    password : "",
// 	    city : "",
// 	    monthly_sales: "",
// 	    commission_value:"",
// 	    contact:""
//     });

    const navigate=useNavigate();
    const [quota,setQuota]=useState({
        city:"",
        limit:"",
    });

    const {city,limit}=quota;

    const onInputChange=(e)=>{
        setQuota({...quota,[e.target.name]:e.target.value});
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/admin/addQuota",quota);
        navigate("/quota");
    }


  return (
    <div className='container'>
            <section className='section1'>
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add Quota</h2>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the city Name"
                                name="city"
                               value={city}
                                required
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter the Limit"
                                name="limit"
                               value={limit}
                                required
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-primary btn-block">Add Quota</button>
                        </form>
                </div>
            </section>
        </div>
)


//     const {email,password,city,monthly_sales,commission_value,contact}=user;

//     const onInputChange =e =>{
//         setUSer({...user, [e.target.name] : e.target.value });
//     };

//     const onSubmit=async(e)=>{
//         e.preventDefault();
//         await axios.post("http://localhost:8080/admin/addSalesPerson",user);
//         navigate("/salesperson")

//     }

//   return (
//         <div className='container'>
//             <section className='section1'>
//                 <div className="w-75 mx-auto shadow p-5">
//                     <h2 className="text-center mb-4">Add A User</h2>
//                         <form onSubmit={e => onSubmit(e)}>
//                             <div className="form-group">
//                                 <input
//                                 type="email"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your E-mail Address"
//                                 name="email"
//                                 value={email}
//                                 required
//                                 onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                 type="password"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter User Password"
//                                 name="password"
//                                 value={password}
//                                 required
//                                 onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                 type="number"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your Contact Number"
//                                 name="contact"
//                                 required
//                                 value={contact}
//                                 onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                 type="text"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter the City Name"
//                                 name="city"
//                                 required
//                                 value={city}
//                                 onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                 type="number"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Monthly Sales"
//                                 name="monthly_sales"
//                                 required
//                                 value={monthly_sales}
//                                 onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                 type="number"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your Contact Number"
//                                 name="commission_value"
//                                 required
//                                 value={commission_value}
//                                 onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <button className="btn btn-primary btn-block">Add User</button>
//                         </form>
//                 </div>
//             </section>
//         </div>
//   )
}

export default AddQuota