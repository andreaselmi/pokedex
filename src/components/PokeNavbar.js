import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pokeball from "../img/pokeball.svg";
import glasses from "../img/glasses.svg";
import search from "../img/search.svg";

const PokeNavbar = () => {
  return (
    <>
      <Styles>
        <Container>
          <Navbar
            collapseOnSelect
            expand="md"
            className="py-0"
            bg="light"
            variant="light"
          >
            <Navbar.Brand as={Link} to="/">
              Pokédex
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" href="#home">
                  <img src={search} alt="search icon" />
                  <span>Cerca</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/seen">
                  <img src={glasses} alt="glasses icon" />
                  <span>Visti</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/caught">
                  <img src={pokeball} alt="pokeball icon" />
                  <span>Catturati</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Styles>
    </>
  );
};

const Styles = styled.div`
  .navbar-brand {
    font-family: "Rajdhani", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  }
  .nav-link {
    min-width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0 !important;
    height: 80px;
    &:hover {
      color: white !important;
      background: #e3350e;
      transition: 0.5s;
    }
  }
  img {
    width: 20px;
    color: red;
  }
`;

export default PokeNavbar;