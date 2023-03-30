import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <div>
                <div>
                    <h1>
                        <a href="index.html">
                        GEMINI'S DUDE
                        </a>
                    </h1>
                </div>
            </div>
            <div className="navbar-ul">
                <ul>
                    <li>
                        Logo
                    </li>
                    <li>
                        <a href="a definir">Home</a>
                    </li>
                    <li className="li-dropdown">
                        <ul className="ul-dropdown">
                            <li>
                                <a href="a definir">elemento 1</a>
                            </li>
                            <li>
                                <a href="a definir">elemento 2</a>
                            </li>
                            <li>
                                <a href="a definir">elemento 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="a definir">Support</a>
                    </li>
                </ul>
                <CartWidget cantidad="7" />
            </div>            
        </nav>
    );
};
export default NavBar;
