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

    <>
      <div className="container-fluid sticky-top d-flex justify-content-between main-contrast">

        <div className="d-flex align-items-end" >
          <Logo />
        </div>

        <div className="d-flex justify-content-end align-items-center" style={{ marginRight: "10px" }}>
          <div className="">
            <ul className=" d-flex justify-content-start list-unstyled ">
              <li className="nav-item active mt-3 me-3">
                <div className="nav-item ">

                  <div className="d-flex align-items-end" >
                    <SocialNetwork />
                  </div>

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
    </>
  );
}

