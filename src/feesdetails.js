import pho from './45454.jpg'
import Bar from './Barnav'

import './feesdetails.css'

import pi from './io.jpg'
import { Link } from 'react-router-dom';
export default function Fee()
{
 
    return (
        <>
          <Bar/> 
  <div id="Home" class='d111'> 
  <div class='header-contentss'  data-aos="zoom-in" data-aos-duration="1000">

            
<h7 style={{
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
                        <Link class="active" to="/fee">Fees Details</Link>
                    </li>
                </ul> 
            </div>
  
   </div>
  </div>

  <div  class='d77'>
 <div data-aos="zoom-in" data-aos-duration="1000" > <h5 style={{
      fontSize:'60px',
   
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
     }}>Fees Details</h5></div>
 <div style={
            {
          
              width: '210px',
              height: '1px',
              backgroundColor:'#240947' ,
              textAlign:'center',
              alignItems:'center',
           borderRadius: '5px',
            marginLeft:'31em'
       
          
            }
          }></div>

 

  </div>
   <div class='buspass'>
   <div data-aos="zoom-in" data-aos-duration="1000" > <h5 style={{
      fontSize:'50px',
   
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
     }}>Bus Pass</h5></div>
 <div style={
            {
          
              width: '210px',
              height: '1px',
              backgroundColor:'#240947' ,
              textAlign:'center',
              alignItems:'center',
           borderRadius: '5px',
            marginLeft:'35em'
       
          
            }
          }></div>
<div class="position-relative">
		<div>
			<div class="home-banner"></div>
		</div>

		<div class="input-search-container">
			<form class="d-flex justify-content-center">
				<div class="d-inline-block position-relative">
					<span class="inputIcon"><i class="far fa-building"></i></span>
					<label class="inputLabel-default" for="input-label-from">FROM</label>
					<input id="input-label-from" class="inputForm" type="text" list="input-from-list"/>
					<datalist id="input-from-list">
            
					</datalist>
				</div>

				<div class="d-inline-block position-relative">
					<span class="inputIcon"><i class="far fa-building"></i></span>
					<label class="inputLabel-default" for="input-label-to">TO</label>
					<input id="input-label-to" class="inputForm" type="text" list="input-to-list"/>
					<datalist id="input-to-list">
					
					</datalist>
				</div>

				<div class="d-inline-block position-relative">
					<span class="inputIcon"><i class="fas fa-calendar-alt"></i></span>
					<label class="inputLabel-default" for="input-label-onward-date">ONWARD DATE</label>
					<input id="input-label-onward-date" class="inputForm" type="text"/>
				</div>

				<div class="d-inline-block position-relative">
					<span class="inputIcon"><i class="fas fa-calendar-alt"></i></span>
					<label class="inputLabel-default" for="input-label-return-date">RETURN DATE</label>
					<input id="input-label-return-date" class="inputForm" type="text"/>
				</div>

				<div class="d-inline-block position-relative">
					<input class="btn btn-danger rounded-0 pl-3 pr-3 pb-2" type="submit" value="Search Buses"/>
				</div>
			</form>
		</div>
	</div>
  </div>
  <div class='d4' id='down'  style={{
    background:'white'
  }}>
       <div class='firsthalf'data-aos="fade-right" data-aos-duration="1000">
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
            

       <div class='secondhalf' data-aos="fade-left" data-aos-duration="1000">
             <h1 style={{
              paddingLeft:'50px',
              fontWeight:'700'
             }}>Get in Connect</h1>
<div class="contact-form">
<div style={
            {
              width: '210px',
              height: '2px',
              backgroundColor:'#f2820a' ,
              marginTop:'-10px',
              marginLeft:'4em',
              
           borderRadius: '2px',
          
            }
          }></div>
          <form action="" id="contact-form">
           
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
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