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
              <a className="nav-link" href="#" style={{ color: 'black' }}>Tratamientos</a>
            </li>
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

    </nav>
  );
}

