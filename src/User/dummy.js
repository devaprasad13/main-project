import pi from '../Images/io.jpg';
import './dummy.css';
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import pho from '../Images/45454.jpg';
import ip from'../Images/pp.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Her()
{
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_txk50nq', 'template_868y50r', form.current, {
        publicKey: '4LUTdGyRw8fEAQMlr',
      })
      .then(
        (ei) => {
          console.log('SUCCESS!');
          if(ei)
            {
              toast.success("Email sent successfully");
            }
            else
            {
              toast.error("Email Failed to sent");
            }
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return(
        <>
          {/* <div class="search-destiny">
            <div></div>
            <div class="uper">
                <input type="text" value="BHOPAL JN - BPL" class="destine"/>
                <div class="arrow"><img src="https://cdn-icons-png.freepik.com/512/8482/8482621.png" alt=""/></div>
               s <input type="text" placeholder ="NEW DEHLI-NDLS" class="location"/>
                <input type="text" value="25/06/2022" class="date"/>
                <input type="text" value="All Classes" class="classes"/>
                <input type="text" value="GENERAL" class="general"/>
                // <button class="modify">Modify Search</button>
            </div>
            <div class="lower">
                <div class="box">
                    <input type="checkbox" class="check"/>
                    <p>Flexible With Date</p>
                </div>
                <div class="box">
                    <input type="checkbox" class="check"/>
                    <p>Train with Avalable Berth</p>
                </div>
                <div class="box">
                    <input type="checkbox" class="check"/>
                    <p>Person With Disability Concession</p>
                </div>
                <div class="box">
                    <input type="checkbox" class="check" />
                    <p>Railway Pass Concession</p>
                </div>
            </div>
            <div></div>
        </div> */
        
        
      
        
        
      
        <Row>
          <Col >
          <div class='firsthalfs' data-aos="fade-right" data-aos-duration="1000">
        <strong>
               <img src={ip} style={
                {
                  width:'15em',
                  paddingLeft:'25px',
                  paddingTop:'20px'

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
            
          </Col>
          <Col >

          <div class='secondhalfs' data-aos="fade-left"  data-aos-duration="1000">
             <h1 style={{
              paddingLeft:'10px',
              fontWeight:'700',
              color:"#2D3D49"
             }}>Get in Connect</h1>

<div id="m" style={
            {
              width: '250px',
              height: '2px',
              backgroundColor:'#EEEEEE' ,
              marginTop:'2px',
              marginLeft:'2em',
           borderRadius: '2px',
          
            }
          }></div>
<div class="contact-forms">

          <form  id="contact-form" ref={form} onSubmit={sendEmail}> 
           
            <div class="input-box">
              <input type="text" required="true" placeholder='Username' name="from_name"/>
             
            </div>
            
            <div class="input-box">
              <input type="email" required="true" placeholder='Email' name="from_email"/>
              
            </div>
            
            <div class="input-box">
              <textarea required="true" name="message" placeholder='Type your Message'></textarea>
             
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
               
                  
               </div>
  
          </Col>
          <Col >

<div class='secondhalfs' data-aos="fade-left"  data-aos-duration="1000">
   <h1 style={{
    paddingLeft:'10px',
    fontWeight:'700',
    color:"#2D3D49"
   }}>Transport Office</h1>

<div id="m" style={
  {
    width: '250px',
    height: '2px',
    backgroundColor:'skyblue' ,
    marginTop:'2px',
    marginLeft:'2em',
 borderRadius: '2px',

  }
}></div>
 <div style={{marginTop:'20px'}} class='transport'>
                  <div class="d-flex">
                  <i class="bi bi-person-circle"></i>
                    <p>Manager :- KalavathiJebaselvi</p>
                  </div>
                  <div class="d-flex">
                  <i class="bi bi-telephone-fill"></i>
                    <p>Contact:- 78458 xxxxx</p>
                  </div>
                  <div class="d-flex">
                    <i class="bi bi-envelope-fill"></i>
                    <p>Email:- kcetransport@gmail.com</p>
                  </div>
                  </div>
</div>

</Col>
        </Row>
      
     
        
        }
        <ToastContainer />
        </>
    )
}