import React from 'react';
import mainLogo from '/workspaces/Studio-3.14/src/front/img/logo.png';
import { Link } from 'react-router-dom';
//import "../../styles/navbar.css";


export const Logo = () => {
    return (
        <div className="logo-web">
            <Link to="/">
                <img src={mainLogo} alt="" style={{ width: "40%"}} />
            </Link>
        </div>
    );
};