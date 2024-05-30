import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from './Logo.jsx';
import { SocialNetwork } from './SocialNetwork.jsx';
import { Navigate } from "react-router-dom";






export const Navbar = () => {


  return (

    <nav className="container navbar navbar-expand-lg sticky-top transparent">
      <div className="container align-items-center">

        <Logo />


        <div className="">
          <SocialNetwork />
        </div>

        
          <ul className="container navbar-nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/tratamientos" style={{ color: 'black' }}>Tratamientos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/precios" style={{ color: 'black' }}>Precios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria" style={{ color: 'black' }}>Galería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cita" style={{ color: 'black' }}>Pedir Cita</Link>
            </li>

          </ul>
        


      </div>

    </nav>
  );
}

