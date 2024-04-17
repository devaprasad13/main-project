import { useNavigate, useParams } from "react-router-dom"
import { useState,useEffect } from 'react';
import axios, * as others from 'axios';
export default function Update()
{
        const {id} = useParams()
        const[name,setName] = useState()
        const[email,setEmail] = useState()
        const[password,setPassword] = useState()
        const[roll,setRoll] = useState()
        const[year,setYear] = useState()
        const[role,setRole] = useState()
        const[phone,setPhone] = useState()
        const[bus,setBus] = useState()
        const[boarding,setBoarding] = useState()
        const navigate = useNavigate()
        useEffect(()=>
   {
    axios.get("http://localhost:3001/getUp/"+id)
    .then(result =>{ console.log(result.data)
      setName(result.data.name)
      setEmail(result.data.email)
      setPassword(result.data.password)
      setRoll(result.data.roll)
      setYear(result.data.year)
      setRole(result.data.role)
      setPhone(result.data.phone)
      setBus(result.data.bus)
      setBoarding(result.data.boarding)
    })
    .catch( err => console.log(err));
   
  },[])

  const Update = (e)=>
  {
      e.preventDefault()
      axios.put("http://localhost:3001/up/"+id,{name,email,password,roll,year,role,phone,bus,boarding})
      .then(result=> console.log(result))
      .catch(err => console.log(err))
      navigate('/view')
  }
    return(
    <>
      <div class='d-flex vh-120 bg-warning justify-content-center align-items-center'>
        
        <div class='w-50 bg-white rounded p-3'>
   <form onSubmit={Update}>
      <h2>Update User</h2>
      <div className="mb-2">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={name}  onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div className="mb-2">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div className="mb-2">
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <div className="mb-2">
        <label htmlFor="">Roll-no</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={roll} onChange={(e)=>setRoll(e.target.value)}></input>
      </div>
      <div className="mb-2">
        <label htmlFor="">Year</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={year} onChange={(e)=>setYear(e.target.value)}></input>
      </div>

      <div className="mb-2">
        <label htmlFor="">Role</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={role} onChange={(e)=>setRole(e.target.value)}></input>
      </div>

      <div className="mb-2">
        <label htmlFor="">Phone-no</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
      </div>


      <div className="mb-2">
        <label htmlFor="">Bus-no</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={bus} onChange={(e)=>setBus(e.target.value)}></input>
      </div>
      <div className="mb-2">
        <label htmlFor="">Boarding</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={boarding} onChange={(e)=>setBoarding(e.target.value)}></input>
      </div>
      <button  class='btn btn-success'>Update</button>
      </form>
        </div>
        
        
        </div> 
    
    
    
    </>
    )
}