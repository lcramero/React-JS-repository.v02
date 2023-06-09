//Modulos
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

//Módulos de react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Estilos
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <Link className="links" to="/"><Logo /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link><Link className="links" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="links" to="/products">Products</Link></Nav.Link>
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
                                        Heels
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
