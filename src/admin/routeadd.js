
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useNavigate} from "react-router-dom"
import './Add.css'
import { useState } from 'react';
import axios from 'axios';
export default function Addroutes()
{
    const[from,setFrom] = useState('')
    const[to,setTo] = useState("KCE")
    const[bus,setBus] = useState('')
    const[amount,setAmount] = useState('')
    
   

    const Submit = async(e)=>
    {
        e.preventDefault();
        const routeData = {
            from,
            to,
            bus,
            amount: Number(amount), // Convert amount to a number
        };
        try{
       const routing = await axios.post("http://localhost:3001/rou",routeData)

       if(routing.status === 200)
       {
        alert("Route added Successfully")
         setFrom('')
         setTo('')
         setBus('')
         setAmount('')
       }
       else
       {
          console.log("Routes added Failed")
       }
    }
    catch(error)
    {
        console.log("error")
    }
      
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
            <Link to="/Add">
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
                        <a href="#">Add Route</a>
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
             
             <div class='usering' >
                <form onSubmit={Submit} >
                
                   <table style={
                    {
                    
                        borderTopRightRadius:' 60px',
                        borderBottomLeftRadius:' 60px',
                        borderBottomRightRadius:' 10px',
                        borderTopLeftRadius:' 10px',
                        backgroundColor: 'yellow',
                        width: '300px',
                        marginLeft: '30px',

                    }
                   }>
                    <tr><td><p class="title">Add Routes</p></td></tr>
                       <tr>
                       
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }>From:</td>
                          </tr>
                          <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          } ><select  value={from}onChange={(e)=>setFrom(e.target.value)} >
                          <option value="">Select</option>
                         <option value="TIRUPPUR NEW BUS STAND" style={{fontSize:"1.3rem"}}>TIRUPPUR</option>
                         <option value="Perumanallur">Perumanallur</option>
                         <option value="Kannakapalayam">Kanakampalayam</option>
                         <option value="Anna Nagar">Anna Nagar</option>
                         <option value="Pandiya-Nagar">Pandiayanagar</option>
                         <option value="PoyamaPalayam">PoyamaPalayam</option>
                         <option value="Pitchampalayam">Pitchampalayam</option>
                         <option value="Tiruppur new Bustand">Tiruppur new Bustand</option>
                         <option value="Nesavalar Colony">Nesavalar Colony</option>
                         <option value="Shanthi-Theater">Shanthi Thearter</option>
                         <option value="Mettupalayam">Mettupalayam</option>
                         <option value="Pushpa-Theatre">Pushpa Theater</option>
                         <option value="Town-Hall">Town Hall</option>
                         <option value="Tiruppur old Bustand">Tiruppur Old Bustand</option>
                         <option value="Veerapandi">Veerapandi</option>
                         <option value="palladam">Palladam</option>
                         <option value="Coimbatore" style={{fontSize:"1.3rem"}}>COIMBATORE</option>
                       </select>
         </td>
                       </tr>
                       <tr>
                       
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       }>To:</td>
                       </tr>
                       <tr>
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       } ><input type='text' class='het' value={to} onChange={(e)=>setTo(e.target.value)}></input></td>
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
                       } ><select  value={bus}onChange={(e)=>setBus(e.target.value)} >
                        <option value="">Select</option>
                       <option value="1">1</option>
                       <option value="1A">1A</option>
                       <option value="1B">1B</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                       <option value="10A">10A</option>
                       <option value="10B">10B</option>
                       <option value="10C">10C</option>
                       <option value="10D">10D</option>
                       <option value="10E">10E</option>
                       <option value="11">11</option>
                     </select></td>
                    </tr>

                    <tr>
                       
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       }>Amount:</td>
                       </tr>
                       <tr>
                       <td style={
                         {
                             paddingLeft: '45px',
                             paddingTop: '10px',
                             fontWeight: '900',
                             lineHeight: '2em',
                          
                         }
                       } ><input type='number' class='het' value={amount} onChange={(e)=>setAmount(e.target.value)}></input></td>
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
                         <button type ="submit" class='bu'>+Add Route</button>
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