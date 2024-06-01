
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios, * as others from 'axios';
export default function View()
{

    const [users,setUsers] = useState([])

   useEffect(()=>
   {
    axios.get("http://localhost:3001/getUser")
    .then(result => setUsers(result.data))
    .catch( err => console.log(err));
   
   })

   const handleDelete = (id)=>
   {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
   }
    return(
        <>
         
     
<div id="sidebar">
    <a href="#" class="brand">
    <i class='bx bx-buildings'></i>
        <span class="text">Admin Portal</span>
    </a>
    <ul class="side-menu top">
        <li class="active">
            <Link to="/dash">
                <i class='bx bxs-dashboard' ></i>
                <span class="text">Dashboard</span>
            </Link>
        </li>
        <li>
            <Link to="/user">
                <i class='bx bx-plus-medical'></i>
                <span class="text">Add User</span>
            </Link>
        </li>
        <li>
            <a href="#">
            <i class='bx bxs-group'></i>
                <span class="text">View Users</span>
            </a>
        </li>

        <li>
            <Link to="/addroute">
            <i class='bx bx-plus-medical'></i>
                <span class="text">Add Routes</span>
            </Link>
        </li>
        <li>
            <a href="#">
            <i class='bx bxs-location-plus' ></i>
                <span class="text">View Location</span>
            </a>
        </li>
        <li>
            <a href="#">
            <i class='bx bxs-spreadsheet'></i>
                <span class="text">Billing</span>
            </a>
        </li>

        <li>
            <Link to="/not">
            <i class='bx bxs-megaphone'></i>
                <span class="text">Notify</span>
            </Link>
        </li>
      
    </ul>
    <ul class="side-menu">
        <li>
            <a href="#">
                <i class='bx bxs-cog' ></i>
                <span class="text">Settings</span>
            </a>
        </li>
        <li>
            <Link to="/" class="logout">
                <i class='bx bxs-log-out-circle' ></i>
                <span class="text">Logout</span>
            </Link>
        </li>
    </ul>
</div>

<div id="contest">
   
    <nav>
        <i class='bx bx-menu' ></i>
        <a href="#" class="nav-link">Categories</a>
        <form action="#">
            <div class="form-input">
                <input type="search" placeholder="Search..."/>
                <button type="submit" class="search-btn"><i class="bi bi-search"></i></button>
            </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden/>
        <label for="switch-mode" class="switch-mode"></label>
        <a href="#" class="notification">
            <i class='bx bxs-bell' ></i>
        </a>
        <a href="#" class="profile">
        
        </a>
    </nav>
 
    <main>
        <div class="head-title">
            <div class="left">
                <h1>Notify</h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="#">Notify</a>
                    </li>
                    <li><i class='bx bx-chevron-right' ></i></li>
                    <li>
                        <Link class="active" to="/dash">Home</Link>
                    </li>
                </ul>
            </div>
            <Link to="/dash" class="btn-download">
                <i class='bx bxs-cloud-download' ></i>
                <span class="text">Back</span>
            </Link>
        </div>

     
       <div className='w-100 bg-white rounded p-3' style={{width:"150px"}}>
        <Link to="/user" className='btn btn-secondary'>Add +</Link>
       <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="row" >Name</th>
          <th>Email</th>
       
          <th>Roll-no</th>
          <th>Year</th>
          <th>Role</th>
          <th>Phone-no</th>
          <th>Bus-no</th>
          <th>Boarding</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        users.map((user)=>
        {
            return <tr>
                <td >{user.name}</td>
                <td>{user.email}</td>
             
                <td>{user.roll}</td>
                <td>{user.year}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
                <td>{user.bus}</td>
                <td>{user.boarding}</td>
                <td><Link class="btn btn-success" to={`/up/${user._id}`}><i class="bi bi-pencil"></i></Link> <button class="btn btn-danger" onClick={(e)=> handleDelete(user._id)}><i class="bi bi-trash3"></i></button></td>


            </tr>
        })
       }
      
      </tbody>
    </table>
          

       </div>
    

    </main>
 
</div>

        </>
    )
}