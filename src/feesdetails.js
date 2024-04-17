import pho from './45454.jpg'
import Bar from './Barnav'

import './feesdetails.css'
import Her from './dummy'
import pi from './io.jpg'
import { Link } from 'react-router-dom';
import Feel from './fee'
export default function Fee()
{
  const top =()=>  {
    window.scrollTo(0,0);
  }
    return (
        <>
          <Bar/> 
          <div>  
          <section id="heroe">
    <div class="heroe-container" data-aos="fade-up" data-aos-duration="1000">
      <h1>Transport</h1>
      <a href="#fessd" class="btn-get-started scrollto" >Fees Details<i class="bi bi-arrow-down"></i></a>
    </div>
  </section>
  </div>

  <div  class='d77' id="fessd">
 <div data-aos="zoom-in" data-aos-duration="1000" > <h5 style={{
      fontSize:'50px',
   
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'300'
     }}>Fees Details</h5></div>
  <Feel/>
        
    </div>

     <div class='d44'   style={{
    background:'white'
  }}>
       <Her/>
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