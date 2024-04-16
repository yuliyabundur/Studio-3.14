import React from "react";
import { Link } from "react-router-dom";
import logoInstagram from '/workspaces/Studio-3.14/src/front/img/instagram-logo.png';
import logoLinkedIn from '/workspaces/Studio-3.14/src/front/img/linkedin-logo.png';
//import "../../styles/navbar.css";
//import "../../styles/socialNetwork.scss";

export const SocialNetwork = () => {

    return (

            <div className="social-buttons d-inline" style={{ marginBottom: "4px" }}>

                <a href="https://www.instagram.com/studio3.14_barcelona/" className="social-button social-button--instagram " aria-label="Instagram">
                    <img src={ logoInstagram } alt="" style={{ width: "35px", height: "35px", marginRight: "6px" }}/>
                </a>

                <a href="https://www.linkedin.com/company/102293003/admin/feed/posts/" className="social-button social-button--linkedin " aria-label="LinkedIn">
                        <img src= { logoLinkedIn } alt="" style={{ width: "35px", height: "35px" }}/>
                </a>

            </div>

    )
};












