import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import "./Style.css";

function Menubar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">INANCE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
           
          
          </Nav>
        </Container>
      </Navbar>
 
    </>
  );
}

export default Menubar;