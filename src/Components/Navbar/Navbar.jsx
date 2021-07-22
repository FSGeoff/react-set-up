import React from "react";
import { NavLink } from "react-router-dom";
import "../Page1/Page1";
import "../Page2/Page2";
import "../Page3/Page3";
import "../Page4/Page4";
import "../Page5/Page5";
import "./_Navbar.scss";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
     
        <li className="nav-item">
                                <NavLink
                                    to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
                                <NavLink to="/page1">1
                                </NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink to="/page2">2
                                </NavLink>
                            </li>
                    <li className="nav-item">
                                <NavLink to="/page3">3
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/page4">4
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/page5">5
                                </NavLink>
                            </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;