import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navigationbar()
{
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#"  ><i class="bi bi-bus-front-fill"></i> KCE TRANSPORT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
           sticky="top"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='fw-bold'> <i class="bi bi-house"></i> Home</Nav.Link>
            <Nav.Link href="#action2" className='fw-bold'> <i class="bi bi-file-person-fill"></i> About</Nav.Link>
            <Nav.Link href="#action2" className='fw-bold'> <i class="bi bi-clipboard2"></i> Fee</Nav.Link>
            <Nav.Link href="#action2" className='fw-bold'> <i class="bi bi-bell"></i> Notify</Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    )
}