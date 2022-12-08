import React from "react";
import Cartwidget from "./Cartwidget";
import { Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Tienda Apple Import
            <img src="../public/images/Apple.png" className="logoApple"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/sale">
                  Sale!
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/como-comprar">
                  Como comprar?
                </Link>
              </li>
            </ul>
          </div>

          <Cartwidget></Cartwidget>
        </div>
      </nav>
      <main>
        
      </main>
    </div>
  );
}
