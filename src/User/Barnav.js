import { Link } from 'react-router-dom';
import './Barnav.css';
import pho from '../Images/45454.jpg';
import po from '../Images/ioo.PNG'
import el from '../Images/er.png'
import Running from './run';
export default function Bar()
{
   return (
    <>
   <div class='mod'>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
        <div class="logo">
        <img id="#logo" src={el} style={
          {
            width:'200px',
          
           
          }
        }>
        
        </img>
       
      </div>
      {/* <div class='p1'>
      <span  class="ml" style={
          {
            color:'black',
            letterSpacing:'2px',
            fontSize:'170%',
            fontWeight:'bold',
            marginTop:"9px",
            marginLeft:'5px',
           fontFamily:'Zilla Slab serif',
          }
        }>K<span style={{color:"red",  fontFamily:'Zilla Slab serif',}}>C</span>E TRANSPORT</span></div> */}
         <div class='y1' style={
          {
            width:"1px",
          height:"74px",
  backgroundColor: "#000000",
  marginLeft:'20px',
          }
        }></div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
               KARPAGAM TRANSPORT
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item" >
                  <Link
                    class="nav-link mx-lg-2 "
                    aria-current="page"
                    to="/land"
                  >
                  <i class="bi bi-house"></i> HOME
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link mx-lg-2" to="/abbout">
                  <i class="bi bi-file-earmark-person"></i>   ABOUT
                  </Link>
                </li>
                <li class="nav-item ">
          <Link class="nav-link item" to="/fee" role="button"aria-expanded="false">
          <i class="bi bi-clipboard"></i>   FEES
          </Link>
        </li>

                <li class="nav-item">
                  <Link class="nav-link mx-lg-2" to="#down">
                  <i class="bi bi-envelope"></i>    CONTACT US
                  </Link>
                </li>

                
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="">
                  <i class="bi bi-bell"></i>NOTIFY
                  </a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link mx-lg-1 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-person-circle"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="navbarDropdown">
                      <li><Link class="dropdown-item" to="/prof"><span style={{ fontFamily: "'Exo 2', sans-serif" }}>Profile</span></Link></li>
                   
                      <li><a class="dropdown-item" href="#" style={{ fontFamily: "'Exo 2', sans-serif" }}>Report</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><Link class="dropdown-item" to="/" style={{ fontFamily: "'Exo 2', sans-serif" }}>Logout &nbsp; &nbsp; <i class="bi bi-box-arrow-right"></i> </Link></li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>
          
          <button 
            class="navbar-toggler pe-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        
      </nav>  
      </div>
      <Running/>
          
    </>
   )
}