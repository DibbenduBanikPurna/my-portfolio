import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           
          
        <div className="container">
          <Link className="navbar-brand" to="/">PURNA</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">SERVICE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/work">HOW WORK</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACTS</Link>
              </li>
            
            </ul>
           
          </div>
        </div>
        
      </nav>
    );
};

export default Navbar;