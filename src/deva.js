import { Link } from 'react-router-dom'
import './deva.css'
import pho from './45454.jpg'
import { useNavigate } from 'react-router-dom';
export default function Miniland()
{
  const navigate = useNavigate();
    return (
        <>
            <nav>
    <div class="navbar">
      <div class="logo">
        <img id="#logo" src={pho} style={
          {
            width:'170px',
           marginLeft:'10px',
           
          }
        }>
        
        </img>
      </div>
      <ul class="menu">
       
        <li><Link to="/card" style={
          {
            background:'#29add9',
            borderRadius:'10px',
            padding:'10px 20px 10px 20px',
             marginTop:'260px',
            marginRight:'10px'   ,       }
        }>Login</Link></li>
      </ul>
    </div>
  </nav>
  <div id="Home" class='d1'  >
    
    <div  class='homi'   style={{fontFamily: 'Helvetica sans-serif',}}> WELCOME !</div>
   
  </div>

   <div class='d44'  style={{
    background:'white'
  }}>
       <div class='firsthalfs' data-aos="fade-right" data-aos-duration="1000">
        <strong>
               <img class='photooo'src={pho} style={
                {
                  width:'20em',
                }
               }></img>
               <br></br>


        </strong>
        <div class="d-flexs">
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
            

       <div class='secondhalfs' data-aos="fade-left" data-aos-duration="1000">
             <h1>Get in Connect</h1>
               <div class='liness'></div>
      
        <div class="d-flexss">
                    <p style={
                      {
                        paddingLeft:'4px'
                      }
                    }> Please Login</p>
                  </div>
                  <div class="d-flexss">
                   <button  type="button"  id='notify'  onClick={()=>navigate('/card') }> <i class="bi bi-hand-index"></i> Click hear</button>
                  </div>
                  
               </div>
   </div>
   <div class="d5">
    <strong style={
      { 
        fontSize:'15px',
        color:'white',
        wordSpacing:'2px',
        letterSpacing:'1px'
      
       
      }
    }>
          Copyright <i class="bi bi-c-circle"></i> 2024 Karpagam College Of Engineering. All Rights Reserved.
      </strong>  
    
   </div>
        </>
    )
}