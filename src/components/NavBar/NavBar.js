//Modulos
import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

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
                <Navbar.Brand><Link className="links" to="/products"><Logo /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link></Nav.Link>
                        <Nav.Link><Link className="links" to="/home">Home</Link></Nav.Link>
                        <NavDropdown title="Category" id="navbarScrollingDropdown">
                            <NavDropdown title="Clothes" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/dresses">
                                        Dresses
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/shirts">
                                        Shirts
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/coats">
                                        Coats
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/pants">
                                        Pants
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/sets">
                                        Sets
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <NavDropdown title="Shoes" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/boots">
                                        Boots
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/sandals">
                                        Sandals
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/sneakers">
                                        Sneakers
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/heels">
                                        Hells
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <NavDropdown title="Bags" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/clutches">
                                        Clutches
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/belt-bags">
                                        Belt bags
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/briefcase">
                                        Briefcase
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>
                        <Nav.Link>
                            <Link className="links" to="/about-us">
                                Abouts us
                            </Link>
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
