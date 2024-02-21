import pho from './45454.jpg'
import Bar from './Barnav'
import Accordion from 'react-bootstrap/Accordion';
import './abbout.css'
import Card from 'react-bootstrap/Card';
import pi from './io.jpg'
import { Link } from 'react-router-dom';
import Running from './run';
import Her from './dummy';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './run.css'
export default function Abbout()
{
    return (
        <><div>
          <Bar/> 
          </div>
      <div>  
          <section id="heros">
    <div class="heros-container" data-aos="fade-up" data-aos-duration="1000">
      <h1>Transport</h1>
      <a href="#about" class="btn-get-started scrollto" >About us<i class="bi bi-arrow-down"></i></a>
    </div>
  </section>
  </div>

  <div  class='d7' id='abo'>
 <div data-aos="zoom-in" data-aos-duration="1000" > <h5  style={{
      fontSize:'60px',
      marginTop:'10px',
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
     }}>About us</h5></div>

  <div class="companyss" style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
       
  }}>
      <Row>
          <Col >

          <div class="imgss" data-aos="fade-right"  data-aos-duration="1000"  style={{
          width:'100%',
         
    }}>
      <img src={pi}  class='apla'style={{
        width:'100%',
        padding:'60px 20px 0px 20px'
      }}/>
    </div>
          </Col>
          <Col >

    <div data-aos="fade-left"  data-aos-duration="1000" class="company-infoss" style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      width:'100%',
      marginRight:'3rem',
      paddingTop:'50px'
    }}>
      <span style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color:'black',

      }}>TRANSPORT <span class="our" style={{
        color: '#f56f42',
      }}>FOR EVERYONE</span></span>
      <p style={{
          fontSize: '1.1rem',
          marginTop:'25px',
          color:'black'
      }}>

        Welcome to <b>KARPAGAM COLLEGE OF ENGINEERING </b>Transport Services, where convenience meets safety on the journey to academic excellence. Our commitment is to provide reliable and efficient transportation solutions for the vibrant community of students at KARPAGAM COLLEGE. As an integral part of campus life, we strive to enhance the overall student experience by ensuring seamless and secure travel.
      </p>
    </div>
  
          </Col>
        </Row>
      
   
  </div>

  </div>


 


  
  <div class='d44'   style={{
    background:'white'
  }}>
       <Her/>
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