import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from './Logo.jsx';
import { SocialNetwork } from './SocialNetwork.jsx';
import { Navigate } from "react-router-dom";




export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (

    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <div className="d-flex" >
          <Logo />
        </div>

        <div className="d-flex " style={{ marginLeft: "70%" }}>
          <SocialNetwork />
        </div>

        <div className="d-flex justify-content-end align-items-center" style={{ marginRight: "2px" }}>
        
          <div className="">
            <ul className=" d-flex list-unstyled ">
              <li className="nav-item">
                <div className="nav-item">
                  <Link className="nav-item dropdown-toggle text-black me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tratamientos
                  </Link>
                  <ul className="dropdown-menu text-white me-3" to="/">
                    <li><a className="dropdown-item " href="#">Depilación láser</a></li>
                    <li><a className="dropdown-item" href="#">Pestañas</a></li>
                    <li><a className="dropdown-item" href="#">Micropigmentación</a></li>
                    <li><a className="dropdown-item" href="#">Uñas</a></li>
                    <li><a className="dropdown-item" href="#">Make Up</a></li>
                  </ul>
                  <Link className="text-black me-3" to="/">Cita </Link>
                  <Link className="text-black me-3" to="/blog">Precios </Link>
                  <Link className="text-black me-3" to="/adoption">Galeria </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

