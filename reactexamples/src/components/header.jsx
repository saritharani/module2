import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Display Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counter">
              Counter Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tableForm">
              tableForm Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/text">
              text Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/listflowers">
              listflowers Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bookStoreClass">
              bookStoreClass Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bookStoreFunctional">
              bookStoreFunctional Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bookStoreHttpFunction">
              bookStoreHttpFunctional Component
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
