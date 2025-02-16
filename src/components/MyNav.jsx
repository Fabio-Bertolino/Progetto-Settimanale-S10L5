import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {} from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const MyNav = () => {
  const location = useLocation();
  console.log(location);
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/location-details/" + city);
  };

  return (
    <Container className="pt-4 ">
      <Navbar expand="lg" className="bg-opaque rounded-4">
        <Container fluid>
          <Navbar.Brand href="#" className="text-light display-4">
            Raindom<span className="text-info">App</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/..." className="nav-link">
                404NotFound
              </NavLink>
              <NavDropdown title="Link" id="navbarScrollingDropdown" className="d-none">
                <NavDropdown.Item href="#action3">Placeholder</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Placeholder</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Placeholder</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Control
                type="search"
                placeholder="Find your city here..."
                className="rounded-start-pill"
                aria-label="Search"
                onChange={(e) => setCity(e.target.value)}
              />
              <Button type="submit" variant="info text-light rounded-end-pill">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default MyNav;
