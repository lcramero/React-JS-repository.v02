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
                <Navbar.Brand>
                    <Link className="links" to="/products"><Logo /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link><Link className="links" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="links" to="/products">Products</Link></Nav.Link>
                        <NavDropdown title="Category" id="navbarScrollingDropdown">
                            <NavDropdown title="Clothes" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/clothes/dresses">
                                        Dresses
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/clothes/shirts">
                                        Shirts
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/clothes/coats">
                                        Coats
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/clothes/pants">
                                        Pants
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/clothes/sets">
                                        Sets
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <NavDropdown title="Shoes" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/shoes/boots">
                                        Boots
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/shoes/sandals">
                                        Sandals
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/shoes/sneakers">
                                        Sneakers
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/shoes/heels">
                                        Hells
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <NavDropdown title="Bags" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/bags/clutches">
                                        Clutches
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/bags/belt-bags">
                                        Belt bags
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="links" to="/products/bags/briefcase">
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
                        <Link className="links" to="/cart">
                            <CartWidget />
                        </Link>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar;
