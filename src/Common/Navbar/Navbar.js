import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbars() {
  const iconStyle = {
    color: 'white',
  };

  const linkStyle = {
    margin: '0 30px', // Add margin to create spacing between links
  };

  return (
    <Navbar expand="lg" className="p-4">
      <Container fluid className='nav-container'>
        <Navbar.Brand href="#home" className='text-white'>
          <Link to="/"><img src="/Images/sitco-logo.png" alt="Logo" width= "200" /></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span style={iconStyle}>&#9776;</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Use mx-auto class to center align */}
            <Nav.Link style={linkStyle} className='text-white hov ' href="/" >Home</Nav.Link>
            <Nav.Link style={linkStyle} className='text-white hov' href="/about">About us</Nav.Link>
            <Nav.Link style={linkStyle} className='text-white hov' href="/project">Projects</Nav.Link>
            <Nav.Link style={linkStyle} className='text-white hov' href="/gallery">Gallery</Nav.Link>
            <Nav.Link style={linkStyle} className='text-white hov' href="/career">Career</Nav.Link>
            <Nav.Link style={linkStyle} className='text-white hov' href="/services">Services</Nav.Link>

            {/* Uncomment and customize your dropdown if needed */}
            {/* <NavDropdown title="Services" id="basic-nav-dropdown" className='text-white hov' >
              <NavDropdown.Item href="/services">Construction</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services">Estimation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services">Scheduling</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link style={linkStyle} className='text-white hov' href="/contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
