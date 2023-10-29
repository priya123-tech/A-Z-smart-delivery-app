import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

function NavScrollExample() {
  return (
    <Navbar  bg="primary"/* data-bs-theme="dark" */expand="lg"/* className="bg-body-tertiary"*/  >
      <Container fluid >
        <Navbar.Brand className="Brand text-white" href="#" >A-Z Smart-Delivery</Navbar.Brand>
        <Navbar.Toggle /*aria-controls="navbarScroll"*/ />
        <Navbar.Collapse /*id="navbarScroll"*/>
          <Nav
            className="me-auto my-2 my-lg-0"
           /* style={{ maxHeight: '100px' }}*/
           /* navbarScroll*/
          >
            <Nav.Link href="#action1" className ="text-white">Home</Nav.Link>
           
            <NavDropdown  title="Services" className = "white-text"  id="navbarScrollingDropdown ">
              
              <NavDropdown.Item href="#action2" className = "text-dark">Food Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#action3" className = "text-dark" >
                Grocery Delivery
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action4" className = "text-dark">
               Electrician service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className = "text-dark">
               Plumber Service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className = "text-dark">
               Medicine delivery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className = "text-dark">
                Some Errand Services
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#" className ="text-white" >
             Contact Us
            </Nav.Link>
            <Nav.Link href="#" className ="text-white">
             Rate Our Service
            </Nav.Link>
            <Nav.Link href="#" className ="text-white">
             FeedBack
            </Nav.Link>
            <Nav.Link href="#" className ="text-white" >
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
            <Button variant="outline-info" className ="text-white">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;