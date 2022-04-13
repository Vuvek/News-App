import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Daily News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
               
               
                <li className="nav-item"><Link to="/business" className="nav-link">business</Link></li>
                <li className="nav-item"><Link to="/entertainment" className="nav-link">entertainment</Link></li>
                <li className="nav-item"><Link to="/general" className="nav-link">general</Link></li>
                <li className="nav-item"><Link to="/health" className="nav-link">health</Link></li>
                <li className="nav-item"><Link to="/Science" className="nav-link">Science</Link></li>
                <li className="nav-item"><Link to="/Sports" className="nav-link">Sports</Link></li>
                <li className="nav-item"><Link to="/technology" className="nav-link">technology</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              </ul>
             
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
