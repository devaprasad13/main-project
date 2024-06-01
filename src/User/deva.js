import { Link } from 'react-router-dom'
import './deva.css'
import pho from '../Images/ioo.PNG'
import hel from '../Images/45454.jpg'
import { useNavigate } from 'react-router-dom';
import Rules from './rules';
import Zo from './mp';

import { useState,useEffect } from 'react';
export default function Miniland()
{
  const navigate = useNavigate();

  const top =()=>  {
    window.scrollTo(0,0);
  }


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
            marginTop:"8px",
           fontFamily:'Zilla Slab serif',
          
            

          }
        }>KCE TRANSPORT &nbsp; &nbsp;</span>
      <div class='all'></div>
      <ul class="menu">
       
        <li ><button  type="button"  id='colo'  onClick={()=>navigate('/log') }>Login</button>
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
                    }>Click to Explore</p>
                  </div>
                  <div class="d-flexss">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.098651947413!2d77.01979347322866!3d10.880100889274992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ffc9b3ea755%3A0xda7508a90583d22f!2sKarpagam%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1715929321087!5m2!1sen!2sin" width="400" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    <button onClick={top} id="scrollbt"><i class="bi bi-arrow-up-circle-fill"></i></button>
   </div>
        </>
    )
}