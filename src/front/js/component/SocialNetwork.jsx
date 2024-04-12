import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import "../../styles/socialNetwork.scss";

export const SocialNetwork = () => {

    return (

        <div className="container">
            <div className="social-buttons">

                <a href="https://www.instagram.com/studio3.14_barcelona/" target="blank" className="social-margin">
                    <div className="social-icon instagram">
                    <img src="src/front/img/instagram-logo.png" alt="Instagram" />
                    </div>
                </a>

                <a href="https://www.linkedin.com/company/102293003/admin/feed/posts/" target="_blank" className="social-margin">
                    <div className="social-icon linkedin">
                        <img src="/workspaces/Studio-3.14/src/front/img/linkedin-logo.png" alt="LinkedIn" />
                    </div>
                </a>

            </div>
        </div>

    )
};












