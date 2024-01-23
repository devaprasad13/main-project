
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './Add.css'

export default function ADD()
{
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
            <a href="#">
            <i class='bx bxs-group'></i>
                <span class="text">View Users</span>
            </a>
        </li>

        <li>
            <a to="/deva">
            <i class='bx bxs-bus' ></i>
                <span class="text">Bus Routes</span>
            </a>
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
                <form>
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
                          } ><input type='text' class='het'></input></td>
                       </tr>

                       <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }>Rollno:</td>
                          </tr>
                          <tr>
                          <td style={
                            {
                                paddingLeft: '45px',
                                paddingTop: '10px',
                                fontWeight: '900',
                                lineHeight: '2em',
                             
                            }
                          }><input type='text' placeholder=' eg: 21F113' class='het'></input></td>
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
                          }><input type='text' placeholder=' eg: I,II,III,IV' class='het'></input></td>
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
                          }><input type='text' class='het'></input></td>
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
                          }>
                            <select style={
                                {
                                    lineHeight: '5em',
    height: '35px',
    width: '195px',
    border: 'none',
    bordeRadius: '3px',
                                    
                                }
                            }>
                               <option>Select</option>
                                <option>Tiruppur NewBustand</option>
                                <option>Tiruppur OldBustand</option>
                                <option>Tiruppur Permanallur</option>
                                <option>Avinashi</option>
                                <option>Andipalayam</option>
                                <option>Palladam</option>
                                <option>Karanampet</option>
                                <option>Mettupalayam</option>
                                <option>Pollachi</option>
                                <option>Udumalaipet</option>
                                <option>Gandipuram</option>
                                <option>Chitra</option>
                                <option>KMCH</option>
                                <option>Lakshmi Mills</option>
                                <option>Ukkadam</option>
                                <option>Kanuvai</option>
                                <option>R.S.Puram</option>
                                <option>Thudiyalur</option>
                                <option>Saibaba Colony</option>
                                <option>Sulur</option>
                                <option>Kovaiputhur</option>
                                <option>SivanadhaColony</option>
                                <option>Ganapathi</option>
                                <option>Vadavalli</option>
                                <option>Vellalur</option>
                                <option>KarunyaNagar</option>
                                <option>Singanallur</option>
                                <option>Pothanur</option>
                                <option>RamanathaPuram</option>
                                <option>TownHall</option>
                                <option>Maruthamalai</option>
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