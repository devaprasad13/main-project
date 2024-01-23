
import { Link } from 'react-router-dom'

import './Notify.css'

export default function NOTIFY()
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

     

        <div class="row border rounded-5 p-3 bg-white shadow box-area">
        
        <div class="col-md-5 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background: "#0abcf3"}}>
            <div class="featured-image ">
             <img src="https://emango.s3.amazonaws.com/media/cache/a1/04/a1048f6069cae8af48c8eb1609b0405f.jpg" class="img-fluid "  style={{width: "250px"}}/>
            </div>
            <p class="text fs-2" style={{color:'black',fontWeight:'600'}} >Welcome</p>
            <small class="text text-wrap text-center" style={{width: "18rem",color:'black',fontWeight:'500'}}>Send a Notification to the students through mail</small>
        </div> 
        
         
        <div class="col-md-6 right-box">
           <div class="row align-items-center">
                 <div class="header-text mb-4">
                      <h2>Notification</h2>
                      
                 </div>
                 <div class="input-group mb-3">
                     <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email address"/>
                 </div>
                 <div class="input-group mb-1">
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Enter your message'></textarea>
                 </div>
                
            
                 <div class="input-group mb-3 " >
                 <button type="button"  id='notify'>Notify</button>
                 </div>
              
             
           </div>
        </div> 
        </div>
    

    </main>
 
</div>



<script src=""></script>
</body>
        
        </>
    )
}