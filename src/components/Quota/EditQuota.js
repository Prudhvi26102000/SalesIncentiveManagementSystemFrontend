import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditQuota = () => {

    let navigate=useNavigate();
    const {id} =useParams();
    const [quota,setQuota]=useState({
        city:"",
        limit:""
    })

    const {city,limit}=quota;

    const onInputChange=(e)=>{
        setQuota({...quota,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        loadQuota();
    },[]);

    const loadQuota = async () => {
        //const result=await axios.get("http://localhost:8080/admin/quotaDetails");
        const result = await axios.get(`http://localhost:8080/admin/findquota/${id}`);
        console.log(result.data);
        setQuota(result.data);
      };

      const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/admin/updateQuota/${id}`,quota);
        navigate("/quota");
      }

  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Edit Quota</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter the City Name"
            name="city"
            value={city}
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
            onChange={e => onInputChange(e)}
          />
        </div>
        <button className="btn btn-warning btn-block">Update Quota</button>
      </form>
    </div>
  </div>
  )
}

export default EditQuota