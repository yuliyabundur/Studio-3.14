import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from './Logo.jsx';
import { SocialNetwork } from './SocialNetwork.jsx';
import { Navigate } from "react-router-dom";






export const Navbar = () => {


  return (

    <nav className="row container-fluid navbar navbar-expand-lg sticky-top transparent">
      <div className="container-fluid align-items-center justify-content-between">

        <div className="d-flex " >
          <Logo />
        </div>
        

        <div className="container d-flex align-items-center justify-content-end" style={{  }}>

        <div className="">
            <SocialNetwork />
          </div>


          <div className="dropdown d-flex">
            <a className="btn dropdown-toggle border-0" href="#" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              Tratamientos
            </a>
            <div className="dropdown-menu p-0 border-0">
              <div className="card-list-group border-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  border-0"><a className="dropdown-item" href="#">Depilación láser</a></li>
                  <li className="list-group-item  border-0"><a className="dropdown-item" href="#">Pestañas</a></li>
                  <li className="list-group-item  border-0"><a className="dropdown-item" href="#">Micropigmentación</a></li>
                  <li className="list-group-item  border-0"><a className="dropdown-item" href="#">Uñas</a></li>
                  <li className="list-group-item  border-0"><a className="dropdown-item" href="#">Make Up</a></li>
                </ul>
              </div>
            </div>

            
          

          <div className="container-fluid navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'black' }}>Precios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'black' }}>Galería</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'black' }}>Pedir Cita</a>
              </li>
              
            </ul>
          </div>
          </div>




        </div>

      </div>
    </nav>
  );
}

