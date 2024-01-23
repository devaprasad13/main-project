import { Link } from 'react-router-dom';
import './Barnav.css';
import pho from './45454.jpg';

export default function Bar()
{
   return (
    <>
     
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
        <div class="logo">
        <img src={pho} style={
          {
            width:'170px',
          }
        }>
        
        </img>
      </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
               K C E
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" >
                  <Link
                    class="nav-link mx-lg-2 "
                    aria-current="page"
                    to="/land"
                  >
                  <i class="bi bi-house"></i> Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link mx-lg-2" to="/abbout">
                  <i class="bi bi-file-earmark-person"></i>   About
                  </Link>
                </li>
                <li class="nav-item ">
          <Link class="nav-link item" to="/fee" role="button"aria-expanded="false">
          <i class="bi bi-clipboard"></i>   Fees Details
          </Link>
        </li>

                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#down">
                  <i class="bi bi-envelope"></i>    Contact us
                  </a>
                </li>

                
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="">
                  <i class="bi bi-bell"></i>  Notification
                  </a>
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
          
    </>
   )
}