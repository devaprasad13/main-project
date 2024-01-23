import pho from './45454.jpg'
import Bar from './Barnav'
import Accordion from 'react-bootstrap/Accordion';
import './abbout.css'
import Card from 'react-bootstrap/Card';
import pi from './io.jpg'
import { Link } from 'react-router-dom';
export default function Abbout()
{
    return (
        <>
          <Bar/> 
  <div id="Home" class='d11'> 
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
                    <li><i class='bx bx-chevron-right' style={{fontSize:'30px',paddingTop:'5px'}} ></i></li>
                    <li>
                        <Link class="active" href="">About us</Link>
                    </li>
                </ul> 
            </div>
  
   </div>
  </div>

  <div  class='d7'>
 <div data-aos="zoom-in" data-aos-duration="1000" > <h5  style={{
      fontSize:'60px',
      marginTop:'5px',
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
     }}>About us</h5></div>
 <div style={
            {
          
              width: '210px',
              height: '1px',
              backgroundColor:'#f58b0a' ,
              textAlign:'center',
              alignItems:'center',
           borderRadius: '5px',
            marginLeft:'31em'
       
          
            }
          }></div>
  <div class="companyss" style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
       
  }}>
    <div class="imgss" data-aos="fade-right"  data-aos-duration="1000"  style={{
          width:'100%',
          margin: '1rem 1rem 1rem 2rem',
    }}>
      <img src={pi}  class='apla'style={{
        width:'100%',
        paddingTop:'70px'
      }}/>
    </div>
    <div data-aos="fade-left"  data-aos-duration="1000" class="company-infoss" style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      width:'100%',
      marginRight:'3rem',
      paddingTop:'70px'
    }}>
      <span style={{
        fontSize: '2rem',
        fontWeight: 'bold',

      }}>TRANSPORT <span class="our" style={{
        color: '#f56f42',
      }}>FOR EVERYONE</span></span>
      <p style={{
          fontSize: '1.1rem',
          marginTop:'25px'
      }}>

        Welcome to <b>KARPAGAM COLLEGE OF ENGINEERING </b>Transport Services, where convenience meets safety on the journey to academic excellence. Our commitment is to provide reliable and efficient transportation solutions for the vibrant community of students at KARPAGAM COLLEGE. As an integral part of campus life, we strive to enhance the overall student experience by ensuring seamless and secure travel.
      </p>
    </div>
  </div>

  </div>


 


  
  <div class='d4' id='down'  style={{
    background:'white'
  }}>
       <div class='firsthalf' data-aos="fade-right" data-aos-duration="1000">
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
            

       <div class='secondhalf' data-aos="fade-left"  data-aos-duration="1000">
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
   
   <div class="d5"  >
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