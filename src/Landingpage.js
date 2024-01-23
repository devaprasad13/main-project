import { Link } from 'react-router-dom'
import './Landingpage.css'
import pho from './45454.jpg'
import Bar from './Barnav'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
export default function Landingpages()
{
  const navigate = useNavigate();
    return(
        <>
  <Bar/> 
  <div id="Home" class='d15'>
  <div class='header-contentss'  data-aos="zoom-in" data-aos-duration="1000">

            
<h7  class='sac'style={{
   fontFamily: 'Helvetica sans-serif',
}}>TRANSPORT</h7>
<div class='lines'></div>
<a  id='touchs' href="#machan" style={
  {
    marginLeft:'95px',
    paddingLeft:'20px',
    paddingTop:'10px',
    paddingBottom:'10px',
    fontFamily: 'Helvetica sans-serif',
  }
}><span>View Routes<i class="bi bi-chevron-double-right" style={{margin:'10px'}}></i></span></a>
</div>
  </div>


  <div class="vls" id="machan">
    <div data-aos="zoom-in" data-aos-duration="1000" > <h5 style={{
      fontSize:'60px',
      paddingLeft:'37%',
     
      color:'#0b0a0d',
      fontFamily: 'Helvetica sans-serif',
     }}>Bus Routes</h5> </div>
 <div class='rotes' style={{
  paddingLeft:'14%',

 }}>
  <div style={
            {
              width: '210px',
              height: '1px',
              backgroundColor:'black' ,
              marginTop:'10px',
              marginLeft:'18em',
           borderRadius: '5px',
           
          
            }
          }></div>
 <Accordion defaultActiveKey="0" flush style={{
  
      width:'800px',
      marginTop:'50px',
      
      
 }}>
      <Accordion.Item eventKey="0" >
        <Accordion.Header 
          style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}
        >PERUMANALLUR - KCE</Accordion.Header>
        <Accordion.Body style={{
        }}>
           <div class='bbb'>
        <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td>Charles</td>
           </tr>
           
           <table>
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">1)</td>
      <td data-column="Last Name">6.15AM</td>
      <td data-column="Job Title">Perumanallur</td>
      <td data-column="Twitter">Charumathi S.K (Asst.Professor)</td>
     
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tirupur New Bus stop</td>
      <td data-column="Twitter"></td>
      
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.35AM</td>
      <td data-column="Job Title">Puspha Theatre</td>
      <td data-column="Twitter"></td>
    
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.45AM</td>
      <td data-column="Job Title">Tirupur Old Bus stp</td>
      <td data-column="Twitter"></td>
      
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.55AM</td>
      <td data-column="Job Title">Verapandi pirivu</td>
      <td data-column="Twitter"></td>
      
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Karadivavi</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Selakaraichal</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.45AM</td>
      <td data-column="Job Title">Pappampatti</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Chettipalayam</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.10AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>TIRUPPUR NEWBUSTAND  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 E</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">2)</td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tiruppur New Bustand</td>
      <td data-column="Twitter">KrishnaKumar(Student)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.32AM</td>
      <td data-column="Job Title">Nesavalar Colony</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.34AM</td>
      <td data-column="Job Title">Shanthi Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.36AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Tirupur Old Bustand</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr> 
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header  style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>AVINASHI  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 A</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">3)</td>
      <td data-column="Last Name">6.15AM</td>
      <td data-column="Job Title">Avinashi</td>
      <td data-column="Twitter">Varatharajan N (A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.19AM</td>
      <td data-column="Job Title">Thirumurugan Poondi</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.22AM</td>
      <td data-column="Job Title">Ammapalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.25AM</td>
      <td data-column="Job Title">Anupurpalayam pudur</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.28AM</td>
      <td data-column="Job Title">Periyar colony</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.31AM</td>
      <td data-column="Job Title">Gandhinagar</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.35AM</td>
      <td data-column="Job Title">SAP theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.37AM</td>
      <td data-column="Job Title">Kumar nagar</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Bungalow stop</td>
      <td data-column="Twitter"></td>
    </tr>

    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.55AM</td>
      <td data-column="Job Title">Verapandi pirivu</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.05AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
    
    
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>ANDIPALAYAM - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 B</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">4)</td>
      <td data-column="Last Name">6.45AM</td>
      <td data-column="Job Title">Andipalayam</td>
      <td data-column="Twitter">Govindaraj J</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.55AM</td>
      <td data-column="Job Title">Tirupur old Bus Stand</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.57AM</td>
      <td data-column="Job Title">Thennampalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.00AM</td>
      <td data-column="Job Title">Tamilnadu Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.02AM</td>
      <td data-column="Job Title">Vidhyala</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.04AM</td>
      <td data-column="Job Title">Veerapandi</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.06AM</td>
      <td data-column="Job Title">TKT mill</td>
      <td data-column="Twitter"></td>
    </tr>

    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.08AM</td>
      <td data-column="Job Title">Chinnakarai</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Arulpuram</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Lakshmi mill</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.16AM</td>
      <td data-column="Job Title">Mahalakshmi nagar</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Rayarpalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.24AM</td>
      <td data-column="Job Title">Palladam chk post</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Karadivavi</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Selakaraichal</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.45AM</td>
      <td data-column="Job Title">Pappampatti</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.45AM</td>
      <td data-column="Job Title">Pappampatti</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Chettipalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.10AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header  style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>PALLADAM - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 C</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">5)</td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter">Aarthi D (A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Lakshmi mill</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Karanampettai</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.30AM</td>
      <td data-column="Job Title">Sulur</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Pappampatti</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">L & T By pass</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.30AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>TIRUPPUR OLD BUSSTAND - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 D</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">6)</td>
      <td data-column="Last Name">6.50AM</td>
      <td data-column="Job Title">Tirupur Old Bus Stand</td>
      <td data-column="Twitter">Balachandrasriram M (A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.55AM</td>
      <td data-column="Job Title">Thennampalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.00AM</td>
      <td data-column="Job Title">Collector Office</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Veerapandi</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.08AM</td>
      <td data-column="Job Title">TKT Mill</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.30AM</td>
      <td data-column="Job Title">Ayyapalayam</td>
      <td data-column="Twitter"></td>
    </tr>

    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Karadivavi</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">Sellakkarichal</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Pappampatti</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.10AM</td>
      <td data-column="Job Title">Chettipalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.20AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" >
        <Accordion.Header style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>ALANDURAI - KCE</Accordion.Header>
        <Accordion.Body>
          <div class='bbb'>
        <tr>
            <td style={{
              fontFamily:''
            }}>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>11</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td>Charles</td>
           </tr>
           
           <table>
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">7)</td>
      <td data-column="Last Name">7.00AM</td>
      <td data-column="Job Title">Alandurai</td>
      <td data-column="Twitter">Pushpalatha M (A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Thondamuthur</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Madhampetti</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Perur</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.55AM</td>
      <td data-column="Job Title">Kovaipudhur</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.15AM</td>
      <td data-column="Job Title">Madhukkarai</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.25AM</td>
      <td data-column="Job Title">KIT</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.35AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>PERUR  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>12</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">8)</td>
      <td data-column="Last Name">7.00AM</td>
      <td data-column="Job Title">Perur</td>
      <td data-column="Twitter">Venkatesh R (A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">NThelungupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">LIC</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Indra Nagar</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Sivalaya</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Arivoli Nagar</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.45AM</td>
      <td data-column="Job Title">Natraj Hospital</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.30AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
        <Accordion.Item eventKey="8">
        <Accordion.Header  style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>METTUPALAYAM  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>1</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">9)</td>
      <td data-column="Last Name">6.25AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter">Arun Francis(A.P)</td>
      <td data-column="Twitter">40,500 INR</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Velankanni CTC</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.35AM</td>
      <td data-column="Job Title">Kuttaiyour Medu</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Karamadai</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.00AM</td>
      <td data-column="Job Title">Veerapandi pirivu</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Vellakinar pirivu</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Goundar mill</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Goundampalayam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.30AM</td>
      <td data-column="Job Title">Saiababa colony</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Vada covai</td>
      <td data-column="Twitter"></td>
    </tr>
       <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Brook field</td>
      <td data-column="Twitter"></td>
    </tr>
       <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.45AM</td>
      <td data-column="Job Title">Ukkadam</td>
      <td data-column="Twitter"></td>
    </tr>
       <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">Athupalam</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">Athupalam</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.55AM</td>
      <td data-column="Job Title">Sundrapuram</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.30AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

        <Accordion.Item eventKey="9">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>PN PALAYAM  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>1 A</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">10)</td>
      <td data-column="Last Name">7.00AM</td>
      <td data-column="Job Title">Periyanaicken palayam</td>
      <td data-column="Twitter">Ebenesar Anna Bagyam J (A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Gas company</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">NSN palayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Rakkipalayam pirivu</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Thoppampatti pirivu</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">NGGO colony</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Vadamadurai</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Thudiyalur</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Cheran nagar</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Koundampalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.30AM</td>
      <td data-column="Job Title">Saibaba kovil</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Vadacovai</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Brook field</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Marakkadai</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Athupalam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">Kurichi</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Iyer Hospital</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.55AM</td>
      <td data-column="Job Title">Sundrapuram</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">LIC</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Sidco</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.05AM</td>
      <td data-column="Job Title">Rathinam college</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.35AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

        <Accordion.Item eventKey="10">
        <Accordion.Header  style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>THUDIYALUR  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>1 B</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">11)</td>
      <td data-column="Last Name">7.00AM</td>
      <td data-column="Job Title">Thudiyalur</td>
      <td data-column="Twitter">Ramadevi(A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Kanuvai</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">TVS Nagar</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Edaiyarpalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.30AM</td>
      <td data-column="Job Title">GCT</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Milk company</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.35AM</td>
      <td data-column="Job Title">Gandhi park</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Five corner</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.45AM</td>
      <td data-column="Job Title">Ukkadam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">Athupalam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.55AM</td>
      <td data-column="Job Title">Kurichi</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Iyer Hospital</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Sundrapuram</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">LIC</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Sidco</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.05AM</td>
      <td data-column="Job Title">Rathinam college</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.35AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

        <Accordion.Item eventKey="11">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>BOMMANAMPALAYAM  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>2</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">12)</td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Bommanmpalayam</td>
      <td data-column="Twitter">Sharmila V (A.P)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Kalveerampalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Vadavalli</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.28AM</td>
      <td data-column="Job Title">P N Pudur</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.30AM</td>
      <td data-column="Job Title">Agri College</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.36AM</td>
      <td data-column="Job Title">Lawly Road</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Gandhi park</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.43AM</td>
      <td data-column="Job Title">Thermutti Street</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.48AM</td>
      <td data-column="Job Title">Townhall</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">Ukkadam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">Sundrapuram</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.30AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

        <Accordion.Item eventKey="12">
        <Accordion.Header  style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>ONDIPUDUR  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>3</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">13)</td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Ondipudur</td>
      <td data-column="Twitter">Indumathi P(A.P)</td>
      
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.10AM</td>
      <td data-column="Job Title">Vasantha mill</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Singanallur</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.15AM</td>
      <td data-column="Job Title">Uzhavar sandhai</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.20AM</td>
      <td data-column="Job Title">Rajalakshmi mill</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Sowripalayam pirivu</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.25AM</td>
      <td data-column="Job Title">Ramanathapuram</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.30AM</td>
      <td data-column="Job Title">Sungam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.40AM</td>
      <td data-column="Job Title">Nanjundapuram</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.45AM</td>
      <td data-column="Job Title">Podanur</td>
      <td data-column="Twitter"></td>
    </tr>   
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.50AM</td>
      <td data-column="Job Title">Sundrapuram</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.30AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

        <Accordion.Item eventKey="13">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>EDAIYARPALAYAM  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 E</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">14)</td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tiruppur New Bustand</td>
      <td data-column="Twitter">KrishnaKumar(Student)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.32AM</td>
      <td data-column="Job Title">Nesavalar Colony</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.34AM</td>
      <td data-column="Job Title">Shanthi Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.36AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Tirupur Old Bustand</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

        <Accordion.Item eventKey="14">
        <Accordion.Header  style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>TIRUPPUR NEWBUSTAND  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 E</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">15)</td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tiruppur New Bustand</td>
      <td data-column="Twitter">KrishnaKumar(Student)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.32AM</td>
      <td data-column="Job Title">Nesavalar Colony</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.34AM</td>
      <td data-column="Job Title">Shanthi Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.36AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Tirupur Old Bustand</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="15">
        <Accordion.Header  style={{
             color:'#f59f16',
               fontWeight:'bold'
          }}>TIRUPPUR NEWBUSTAND  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 E</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
       <th>Bus Fees</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">15)</td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tiruppur New Bustand</td>
      <td data-column="Twitter">KrishnaKumar(Student)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.32AM</td>
      <td data-column="Job Title">Nesavalar Colony</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.34AM</td>
      <td data-column="Job Title">Shanthi Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.36AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Tirupur Old Bustand</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="16">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>TIRUPPUR NEWBUSTAND  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 E</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">15)</td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tiruppur New Bustand</td>
      <td data-column="Twitter">KrishnaKumar(Student)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.32AM</td>
      <td data-column="Job Title">Nesavalar Colony</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.34AM</td>
      <td data-column="Job Title">Shanthi Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.36AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Tirupur Old Bustand</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="17">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>TIRUPPUR NEWBUSTAND  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 E</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">15)</td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tiruppur New Bustand</td>
      <td data-column="Twitter">KrishnaKumar(Student)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.32AM</td>
      <td data-column="Job Title">Nesavalar Colony</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.34AM</td>
      <td data-column="Job Title">Shanthi Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.36AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Tirupur Old Bustand</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="18">
        <Accordion.Header  style={{
             color:'#a80aa3',
               fontWeight:'bold'
          }}>TIRUPPUR NEWBUSTAND  - KCE</Accordion.Header>
        <Accordion.Body>
        <div class='bbb'>
          <tr>
            <td>Bus No:</td>
            <td style={{color:'violet',fontWeight:'900'}}>10 E</td>
            </tr>
            <tr>
            <td style={{paddingLeft:'400x'}}>Driver:</td>
            <td></td>
           </tr>
           
           <table >
  <thead>
    <tr>
      <th>SI.NO</th>
      <th>Timing</th>
      <th>Routes</th>
      <th>Bus Incharge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">15)</td>
      <td data-column="Last Name">6.30AM</td>
      <td data-column="Job Title">Tiruppur New Bustand</td>
      <td data-column="Twitter">KrishnaKumar(Student)</td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.32AM</td>
      <td data-column="Job Title">Nesavalar Colony</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.34AM</td>
      <td data-column="Job Title">Shanthi Theatre</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.36AM</td>
      <td data-column="Job Title">Mettupalayam</td>
      <td data-column="Twitter"></td>
    </tr>
    <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">6.40AM</td>
      <td data-column="Job Title">Tirupur Old Bustand</td>
      <td data-column="Twitter"></td>
    </tr>
      <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">7.05AM</td>
      <td data-column="Job Title">Palladam</td>
      <td data-column="Twitter"></td>
    </tr>
     <tr>
      <td data-column="First Name"></td>
      <td data-column="Last Name">8.00AM</td>
      <td data-column="Job Title">KCE</td>
      <td data-column="Twitter"></td>
    </tr>
  </tbody>
</table>
</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  
  


  
  <div class='d4' id='down' style={{
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
            

       <div class='secondhalf'data-aos="fade-left" data-aos-duration="1000" style={{
        paddingTop:'1px',
       }}>
             <h1 style={{
              paddingLeft:'38px',
              fontWeight:'700'
             }}>Get in Connect</h1>
<div class="contact-form">
<div style={
            {
              width: '210px',
              height: '1px',
              backgroundColor:'#f2820a' ,
          
              marginLeft:'2em',
              
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