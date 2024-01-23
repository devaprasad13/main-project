import { Link } from 'react-router-dom'
import './zome.css'
import pho from './t.jpg'
export default function Zome()
{
    return(
        <>
             <nav>
    <div class="navbar">
      <div class="logo">
        <img src={pho} style={
          {
            width:'170px',
           marginLeft:'-80px',
        
          }
        }>
        
        </img>
      </div>
      <ul class="menu">
       
        <li><a href="#Feedback" style={
          {
            background:'#29add9',
            borderRadius:'10px',
            padding:'10px 20px 10px 20px',
             marginTop:'200px',
            marginRight:'-12px'   ,       }
        }>Login</a></li>
      </ul>
    </div>
  </nav>
  <div id="Home" class='d1'>Transport
  </div>
  <section id="About">About Section</section>
  <section id="Category">Category Section</section>
  <section id="Contact">Contact Section</section>

  
  <div class='d4'>
       <div class='firsthalf'>
        <strong>
               <img src={pho} style={
                {
                  width:'20em',
                }
               }></img>
               <br></br>


        </strong>
        <div class="d-flex">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p > Myleripalayam Village, Othakkal Mandapam, Tamil Nadu 641032</p>
                  </div>
                  <div class="d-flex">
                    <i class="bi bi-telephone-fill"></i>
                    <p>Contact :- +91 – 422 2619005</p>
                  </div>
                  <div class="d-flex">
                    <i class="bi bi-envelope-fill"></i>
                    <p>Email:- kcetransport@gmail.com</p>
                  </div>
                  <div class="d-flex">
                    <i class="bi bi-browser-chrome"></i>
                    <p>Website: www.karpagam college of Engineering.com</p>
                  </div>
              </div>
            

       <div class='secondhalf'>
       <strong>
             <h1>Get in Connect</h1>
        </strong>
        <div class="d-flexs">
                    <p > Please Login</p>
                  </div>
                  <div class="d-flex">
                    <a>Click Here</a>
                  </div>
                  
               </div>
   </div>
   

       </>
    )
   
        
    
    
   
}

