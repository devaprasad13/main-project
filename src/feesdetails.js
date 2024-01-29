import pho from './45454.jpg'
import Bar from './Barnav'

import './feesdetails.css'
import Her from './dummy'
import pi from './io.jpg'
import { Link } from 'react-router-dom';
export default function Fee()
{
 
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
      fontSize:'60px',
   
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
     }}>Fees Details</h5></div>


<div data-aos="fade-up" data-aos-duration="1000">
          <section class="sectioning__container booking__container">
            <div class="booking__nav">
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {" "}
                <i class="bi bi-bus-front-fill"></i> Search your Bus Fair
              </span>
            </div>
            <form>
              <div class="form__group">
                <div class="input__content">
                  <div class="input__group">
                    <input type="text" />
                    <label>
                      
                      <i class="bi bi-geo-alt-fill"></i> From
                    </label>
                  </div>
                  <p>Where are you going?</p>
                </div>
              </div>
              <div class="form__group">
                <div class="input__content">
                  <div class="input__group">
                    <input type="number" />
                    <label>
                      <i class="bi bi-geo-alt-fill"></i> To
                    </label>
                  </div>
                  <p>KCE</p>
                </div>
              </div>
              <div class="form__group">
                <div class="input__content">
                  <div class="input__group">
                    <input type="text" />
                    <label>
                      <i class="bi bi-bus-front-fill"></i> Bus No:
                    </label>
                  </div>
                  <p>Add BusNO:</p>
                </div>
              </div>

              <button class="btns">
                <i class="bi bi-search"></i> Search
              </button>
            </form>
          </section>
        </div>

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