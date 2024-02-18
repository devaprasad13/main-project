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
  <div id="Home" class='d111'> 
  <div class='header-contentss'  data-aos="zoom-in" data-aos-duration="1000">

            
<h7 id="hea" style={{
   fontFamily: 'Helvetica sans-serif',
}}>TRANSPORT</h7>
<div class='lines'></div>
<div class="left">
               
                <ul class="breadcrumb" style={
                  {
                    fontSize:'25px',
                  paddingTop:'30px',
                  marginLeft:'90px',
                  fontFamily: 'Helvetica sans-serif',
                  }
                }>
                    <li>
                        <Link to="/land" class="pinky">Home</Link>
                    </li>
                    <li><i class='bx bx-chevron-right' style={{fontSize:'30px',paddingTop:'5px',}} ></i></li>
                    <li>
                        <a class="active" href="#fessd">Fees Details</a>
                    </li>
                </ul> 
            </div>
  
   </div>
  </div>

  <div  class='d77' id="fessd">
 <div data-aos="zoom-in" data-aos-duration="1000" > <h5 style={{
      fontSize:'40px',
   
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
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