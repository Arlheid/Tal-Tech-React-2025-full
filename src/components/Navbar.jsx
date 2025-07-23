import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.png'; 

export default function AppNavbar() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/*Brandname*/}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            width="35"
            height="38"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
          Tu Empresa
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          {/* Ítems con scroll suave */}
          <Nav className="mx-auto gap-4">
            <ScrollLink
              to="productos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              style={{ cursor: 'pointer' }}
            >
              Productos
            </ScrollLink>

            <ScrollLink
              to="Donde estamos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              style={{ cursor: 'pointer' }}
            >
              Donde estamos
            </ScrollLink>

            <ScrollLink
              to="contacto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              style={{ cursor: 'pointer' }}
            >
              Contacto
            </ScrollLink>
          </Nav>

          {/* Carrito */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              🛒 Carrito ({cart.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
