import axios from 'axios';
import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddProducts = () => {
    
    const navigate=useNavigate();
    const [product,setProduct]=useState({
        name:"",
        type:"",
        cost:""
    });

    const {name,type,cost}=product;

    const onInputChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/admin/addvehicle",product);
        navigate("/products");
    }

  return (
    <div className='container'>
            <section className='section1'>
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A Product</h2>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter the Product Name"
                                name="name"
                                value={name}
                                required
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Type Of Product"
                                name="type"
                                value={type}
                                required
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Cost of the Product"
                                name="cost"
                                required
                                value={cost}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-primary btn-block">Add Product</button>
                        </form>
                </div>
            </section>
        </div>
  )
}

export default AddProducts