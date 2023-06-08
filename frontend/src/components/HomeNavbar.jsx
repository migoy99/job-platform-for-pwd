// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <div style={{ marginRight: '15%', marginLeft: '15%'}}>
      <Navbar expand="lg" style={{backgroundColor: 'transparent'}}>
        <Container fluid>
          <Navbar.Brand style={{fontSize: '2rem', color: 'white', fontWeight: 'bold'}}>ThisAbility</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>About us</Nav.Link>
              {/* <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              <Link to='/register'><button style={{width: '120px', borderRadius: '8px', color: 'white', backgroundColor: '#009087'}} variant="outline-success">Register</button></Link>&nbsp;&nbsp;
              <Link to='/login'><button style={{width: '120px', borderRadius: '8px', color: 'white', backgroundColor: '#009087'}} variant="outline-success">Login</button></Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;