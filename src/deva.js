import { Link } from 'react-router-dom'
import './deva.css'
import pho from './ioo.PNG'
import hel from './45454.jpg'
import { useNavigate } from 'react-router-dom';
import Rules from './rules';
import Zo from './mp';
export default function Miniland()
{
  const navigate = useNavigate();
    return (
        <>
        <div class='nil'>
            <nav class="navbar fixed-top">
    <div class="navbar">
      <div class="logo">
        <img id="#logo" src={pho} style={
          {
            width:'70px',
           marginLeft:'-4px',
           
          }
        }>
        
        </img>
       
      </div>
      <span class = "kk" style={
          {
            color:'black',
            letterSpacing:'2px',
            fontSize:'170%',
            fontWeight:'bold',
            marginTop:"9px",
           fontFamily:'Zilla Slab serif',
          
            

          }
        }>KCE TRANSPORT</span>
      <div class='all'></div>
      <ul class="menu">
       
        <li ><button  type="button"  id='colo'  onClick={()=>navigate('/card') }>Login</button>
</li>
      </ul>
    </div>
  </nav>
  </div>
<Zo/>

   <div class='d44'  style={{
    background:'white'
  }}>
       <div class='firsthalfs' data-aos="fade-right" data-aos-duration="1000">
        <strong>
               <img class='photooo'src={hel} style={
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