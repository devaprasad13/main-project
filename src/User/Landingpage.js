import { Link } from 'react-router-dom'
import './Landingpage.css'
import pho from '../Images/45454.jpg'
import Bar from './Barnav'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import Rules from './rules';
import Her from './dummy';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Landingpages()
{
  const navigate = useNavigate();
    return(
        <>
  <Bar/> 
  <div>
   
  <section id="hero">
    <div class="hero-container" data-aos="fade-up" data-aos-duration="1000">
      <h1>Your Safety Our Responsibility</h1>
      <a href="#rot" class="btn-get-started scrollto">View Routes <i class="bi bi-arrow-down"></i></a>
    </div>
  </section>
  </div>

<div class='rol' id="rot">
<div data-aos="zoom-in" data-aos-duration="1000" > <h5  style={{
      fontSize:'50px',
      marginTop:'5px',
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
     }}>Routes</h5></div>


   <div data-aos="fade-up"  data-aos-duration="1000">
    <Row>
      <Col xs={12} md={6}>
        <Accordion  style={{ width: "100%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Route:1 Perumanallur</Accordion.Header>
            <Accordion.Body>
              <table
                class="table table-bordered table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6.15AM</td>
                    <td>Perumanallur</td>
                    <td> Charumathi S.K (A.P)</td>
                  </tr>
                  <tr>
                    <td>6.30AM</td>
                    <td>New Bus stand</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>6.35AM</td>
                    <td>Puspha Theatre</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>6.45AM</td>
                    <td>Tirupur Old Bus stp</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>6.55AM</td>
                    <td>Verapandi pirivu</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.10AM</td>
                    <td>Palladam</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.25AM</td>
                    <td>Karadivavi</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.45AM</td>
                    <td>Pappampatti</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.00AM</td>
                    <td>Chettipalayam</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.10AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Route:3 TPR New Bus stand</Accordion.Header>
            <Accordion.Body>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6.30AM</td>
                    <td> New Bus stand</td>
                    <td>KrishnaKumar(CIVIL)</td>
                  </tr>

                  <tr>
                    <td>6.32AM</td>
                    <td>Nesavalar Colony</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.34AM</td>
                    <td>Shanthi Theatre</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.36AM</td>
                    <td>Mettupalayam</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.40AM</td>
                    <td>Old Bus stand</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.05AM</td>
                    <td>Palladam</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.30AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Route: 5 Avinashi</Accordion.Header>
            <Accordion.Body>
              <table
                class="table table-bordered table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6.15AM</td>
                    <td> Avinashi</td>
                    <td>Varatharajan N (A.P)</td>
                  </tr>

                  <tr>
                    <td>6.19AM</td>
                    <td>Thirumurugan Poondi</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.22AM</td>
                    <td>Ammapalayam</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.25AM</td>
                    <td>Mettupalayam</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.40AM</td>
                    <td>Anupurpalayam pudur</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>6.31AM</td>
                    <td>Gandhinagar</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.00AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.35AM</td>
                    <td>SAP theatre</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.37AM</td>
                    <td>Kumar nagar</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.55AM</td>
                    <td>Verapandi pirivu</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.10AM</td>
                    <td>Palladam</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.05AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Route:10 Alandurai</Accordion.Header>
            <Accordion.Body>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7.00AM</td>
                    <td> Alandurai</td>
                    <td>Pushpalatha M (A.P)</td>
                  </tr>

                  <tr>
                    <td>7.15AM</td>
                    <td>Thondamuthur</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.25AM</td>
                    <td>Madhampetti</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.40AM</td>
                    <td>Perur</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.55AM</td>
                    <td>Kovaipudhur</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.15AM</td>
                    <td>Madhukkarai</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.35AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
      <Col xs={12} md={6}>
        <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Route:2 Andipalayam</Accordion.Header>
            <Accordion.Body>
              <table
                class="table table-bordered table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6.45AM</td>
                    <td> Andipalayam</td>
                    <td>Govindaraj J</td>
                  </tr>

                  <tr>
                    <td>6.55AM</td>
                    <td>Tiruppur old busstand</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.57AM</td>
                    <td>Thennampalayam</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.00AM</td>
                    <td>Tamilnadu Theatre</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.02AM</td>
                    <td>Vidhyala</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.04AM</td>
                    <td>Veerapandi</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.06AM</td>
                    <td>TKT mill</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.08AM</td>
                    <td>Chinnakarai</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.10AM</td>
                    <td>Arulpuram</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.15AM</td>
                    <td>Lakshmi mill</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.16AM</td>
                    <td>Mahalakshmi nagar</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.20AM</td>
                    <td>Rayarpalayam</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.24AM</td>
                    <td>Palladam chk post</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.25AM</td>
                    <td>Palladam</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.35AM</td>
                    <td>Karadivavi</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.40AM</td>
                    <td>Selakaraichal</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.45AM</td>
                    <td>Pappampatti</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.45AM</td>
                    <td>Chettipalayam</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.10AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Route:4 Palladam</Accordion.Header>
            <Accordion.Body>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7.10AM</td>
                    <td> Palladam</td>
                    <td>Aarthi D (A.P)</td>
                  </tr>

                  <tr>
                    <td>7.15AM</td>
                    <td>Lakshmi mill</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.20AM</td>
                    <td>Karanampettai</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.30AM</td>
                    <td>Sulur</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.40AM</td>
                    <td>Pappampatti</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>7.50AM</td>
                    <td>L & T By pass</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.30AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Route:6 TPR Old Bus Stand</Accordion.Header>
            <Accordion.Body>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7.00AM</td>
                    <td> Alandurai</td>
                    <td>Pushpalatha M (A.P)</td>
                  </tr>

                  <tr>
                    <td>7.15AM</td>
                    <td>Thondamuthur</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.25AM</td>
                    <td>Madhampetti</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.40AM</td>
                    <td>Perur</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.55AM</td>
                    <td>Kovaipudhur</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.15AM</td>
                    <td>Madhukkarai</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.35AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Route:10 Alandurai</Accordion.Header>
            <Accordion.Body>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Timing
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Routes
                    </th>
                    <th
                      scope="col"
                      style={{ backgroundColor: "#42bcf5", color: "black" }}
                    >
                      Bus Cordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7.00AM</td>
                    <td> Alandurai</td>
                    <td>Pushpalatha M (A.P)</td>
                  </tr>

                  <tr>
                    <td>7.15AM</td>
                    <td>Thondamuthur</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.25AM</td>
                    <td>Madhampetti</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.40AM</td>
                    <td>Perur</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.55AM</td>
                    <td>Kovaipudhur</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.15AM</td>
                    <td>Madhukkarai</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>8.35AM</td>
                    <td>KCE</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
    </div>
</div>
  <div class="vls" id="machan">
    <div data-aos="zoom-in" data-aos-duration="1000" > <h5  style={{
      fontSize:'50px',
      marginTop:'5px',
      fontFamily: 'Helvetica sans-serif',
      color:'#0b0a0d',
      textAlign:'center',
      alignItems:'center',
      fontWeight:'500'
     }}>Transport Rules</h5></div>
   <Rules/>
    </div>
  
  


  
  <div class='d44' id='down' style={{
    background:'white'
  }}>
       <Her/>
   </div>
   
   <div class="d555">
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