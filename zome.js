import { Link } from 'react-router-dom'
import './zome.css'
import pho from './t.jpg'
export default function Zome()
{
    return(
        <>
      <div class="section__container header__container" id="home">
        <h1>No Matter Where You Are Going From, We Take You There</h1>
        <p>
          You do not have the right to remain silent. Let us know what it takes
          to challenge you
        </p>
        <div class="booking">
          <div class="booking__type" id="booking-type">
            <div class="active">One Way</div>
            <div>Round Trip</div>
            <div>Multi City</div>
          </div>
          <form action="/" class="booking__form">
            <div class="booking__input">
              <label for="arrival">To</label>
              <input type="text" placeholder="Arrival" />
            </div>
            <div class="booking__input">
              <label for="departure">From</label>
              <input type="text" placeholder="Departure" />
            </div>
            <div class="booking__input">
              <label for="date">Date</label>
              <input type="text" placeholder="Date" />
            </div>
          </form>
          <div class="booking__btn">
            <button class="btn">Book Now</button>
          </div>
        </div>
</div>
       </>
    )
   
        
    
    
   
}

