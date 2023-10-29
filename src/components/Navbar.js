import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar   data-bs-theme="dark" expand="lg" className="bg-body-tertiary"  >
      <Container fluid >
        <Navbar.Brand className="Brand" href="#">A-Z Smart-Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
            <NavDropdown title="Services"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Food Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Grocery Delivery
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action4">
               Electrician service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Plumber Service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Medicine delivery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Some Errand Services
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
             Contact Us
            </Nav.Link>
            <Nav.Link href="#" >
             Rate Our Service
            </Nav.Link>
            <Nav.Link href="#" >
             FeedBack
            </Nav.Link>
            <Nav.Link href="#" >
             Jobs
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;