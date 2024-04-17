
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useNavigate} from "react-router-dom"
import './Add.css'
import { useState } from 'react';
import axios from 'axios';
export default function ADD()
{
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const[roll,setRoll] = useState()
    const[year,setYear] = useState()
    const[role,setRole] = useState()
    const[phone,setPhone] = useState()
    const[bus,setBus] = useState()
    const[boarding,setBoarding] = useState()
   

    const Submit = (e)=>
    {
       
        axios.post("http://localhost:3001/user",{name,email,password,roll,year,role,phone,bus,boarding})
        .then(result=> console.log(result))
        .then(res=>alert("Created Successfully"))
        .catch(err => console.log(err))
      
    }
    return (
        <>
       <body>



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
            <Link to="/view">
            <i class='bx bxs-group'></i>
                <span class="text">View Users</span>
            </Link>
        </li>

        <li>
            <Link to="/rot">
            <i class='bx bxs-bus' ></i>
                <span class="text">Bus Routes</span>
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
            <Link href="/" class="logout">
                <i class='bx bxs-log-out-circle' ></i>
                <span class="text">Logout</span>
            </Link>
        </li>
    </ul>
</div>

<div id="content">
   
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
                <h1>Add User</h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="#">Add User</a>
                    </li>
                    <li><i class='bx bx-chevron-right' ></i></li>
                    <li>
                        <a class="active" to="/dash">Home</a>
                    </li>
                </ul>
            </div>
            <Link to="/dash" class="btn-download">
            <i class='bx bxs-cloud-download' ></i>
                <span class="texts">Back</span>
            </Link>
        </div>
             
             <div class='usering'>
                <form onSubmit={Submit}>
                
                   <table style={
                    {
                    
                        borderTopRightRadius:' 60px',
                        borderBottomLeftRadius:' 60px',
                        borderBottomRightRadius:' 10px',
                        borderTopLeftRadius:' 10px',
                        backgroundColor: '#3C91E6',
                        width: '300px',
                        marginLeft: '30px',

                    }
                   }>
                    <tr><td><p class="title">Add User</p></td></tr>
                       <tr>
                       
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }>Name:</td>
                          </tr>
                          <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          } ><input type='text' class='het' onChange={(e)=>setName(e.target.value)}></input></td>
                       </tr>
                       <tr>
                       
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       }>Email:</td>
                       </tr>
                       <tr>
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       } ><input type='text' class='het' onChange={(e)=>setEmail(e.target.value)}></input></td>
                    </tr>

                    <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }>Password:</td>
                          </tr>
                      
                          <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }><input type='text'  placeholder='' class='het' onChange={(e)=>setPassword(e.target.value)}></input></td>
                       </tr>

                    
                       <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }>Year:</td>
                          </tr>
                          <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }><input type='text' placeholder='' class='het' onChange={(e)=>setYear(e.target.value)}></input></td>
                       </tr>
                       <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }>Role:</td>
                          </tr>
                          <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }><input type='text' placeholder=' eg: I,II,III,IV' class='het'onChange={(e)=>setRole(e.target.value)}></input></td>
                       </tr>

                       <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }>Phone no:</td>
                          </tr>
                          <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }><input type='number' class='het' onChange={(e)=>setPhone(e.target.value)}></input></td>
                       </tr>
                       <tr>
                       
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       }>Bus.no:</td>
                       </tr>
                       <tr>
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       } ><input type='text' class='het' onChange={(e)=>setBus(e.target.value)}></input></td>
                    </tr>

                    <tr>
                       
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       }>Boarding:</td>
                       </tr>
                       <tr>
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       } ><input type='text' class='het' onChange={(e)=>setBoarding(e.target.value)}></input></td>
                    </tr>
                   
                       <tr>
                        <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }> 
                            &nbsp;
                        </td>
                       </tr>
                       <tr rowspan='2'>
                         <button class='bu'>+Add</button>
                       </tr>
                   </table>
                </form>
             </div>
   


       
    </main>
 
</div>



<script src=""></script>
</body>
        
        </>
    )
}