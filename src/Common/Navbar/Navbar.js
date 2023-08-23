import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  const iconStyle = {
    color: 'white',
  };

  return (
    <Navbar expand="lg" className="p-4">
      <Container fluid className='nav-container'>
        <Navbar.Brand href="#home" className='text-white'><strong>SITCO</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span style={iconStyle}>&#9776;</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='text-white hov' href="/" >Home</Nav.Link>
            <Nav.Link className='text-white hov' href="/about">About us</Nav.Link>
            <Nav.Link className='text-white hov' href="/project">Projects</Nav.Link>
            <Nav.Link className='text-white hov' href="/gallery">Gallery</Nav.Link>
            <Nav.Link className='text-white hov' href="/career">Career</Nav.Link>
            <Nav.Link className='text-white hov' href="/services">Services</Nav.Link>

            {/* Uncomment and customize your dropdown if needed */}
            {/* <NavDropdown title="Services" id="basic-nav-dropdown" className='text-white hov' >
              <NavDropdown.Item href="/services">Construction</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services">Estimation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services">Scheduling</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link className='text-white hov' href="/contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
