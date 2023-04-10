//Modulos
import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import Logo from "../logo/Logo";

//Estilos
import "./NavBar.css";

//Módulos de react
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link href="#action1">Logo</Nav.Link>
                        <Nav.Link href="#action2">Home</Nav.Link>
                        <NavDropdown title="Category" id="navbarScrollingDropdown">
                            <NavDropdown title="Clothes" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">
                                    Dresses
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Shirts
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Coats
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Pants
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Sets
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <NavDropdown title="Shoes" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">
                                    Boots
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Sandals
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Sneakers
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action3">
                                    Heels
                                </NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>
                        <Nav.Link href="#">
                            About Us
                        </Nav.Link>
                    </Nav>
                    <Nav.Link>
                        <CartWidget cantidad= "7"></CartWidget>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar;
