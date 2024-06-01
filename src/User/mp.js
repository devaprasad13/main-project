import { Link } from 'react-router-dom'
import './mp.css'

export default function Zo()
{
    return(
        <>
          <div class="header">
   
      <div class="section__container header__container" id="home" data-aos="fade-up"  data-aos-duration="1000">
        <h1 style={{fontFamily: 'Exo 2 sans-serif'}} id="samo">Welcome to <span style={{color:'#fcad03',fontFamily: 'Exo 2 sans-serif'}}>KCE</span> Transport</h1>
        <div class="booking" >
          <div class="booking__type" id="booking-type" >
            <div class="active"  style={{color:'black',fontWeight:'600',}}>Get Your Pass Here</div>
            
          </div>
          <form action="/" class="booking__form">
            <div class="booking__input">
              <label for="arrival" style={{color:'black',fontWeight:'600',fontSize:'1.5rem'}}><i class="bi bi-arrow-up-right"></i> From</label>
              <input type="text" placeholder="Arrival" />
            </div>
            <div class="booking__input">
              <label for="departure" style={{color:'black',fontWeight:'600',fontSize:'1.5rem'}}><i class="bi bi-arrow-down-right"></i> To</label>
              <input type="text" placeholder="Departure" />
            </div>
            <div class="booking__input">
              <label for="date" style={{color:'black',fontWeight:'600',fontSize:'1.5rem'}}><i class="bi bi-calendar-check"></i> Date</label>
              <input type="date" placeholder="Date" />
            </div>
          </form>
          <div class="booking__btn">
            <button class="bn">Request Now</button>
          </div>
        </div>
      </div>
    </div>
       </>
    )
   
        
    
    
   
}

