import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="me-3 ms-3" href="/home">Marvel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/home" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/browse" activeclassname="active">
            Browse Characters
          </Nav.Link>
          <Nav.Link as={NavLink} to="/comics" activeclassname="active">
            Comics
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;