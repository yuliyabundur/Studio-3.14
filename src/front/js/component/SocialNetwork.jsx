import React from "react";
import { Link } from "react-router-dom";
import logoInstagram from '/workspaces/Studio-3.14/src/front/img/instagram-logo.png';
import logoLinkedIn from '/workspaces/Studio-3.14/src/front/img/linkedin-logo.png';
import logoWhatsApp from '/workspaces/Studio-3.14/src/front/img/whatsapp-logo.png';


export const SocialNetwork = () => {

    return (

        <div className="social-buttons d-inline" style={{ marginRight: "30px" }}>

            <a href="https://api.whatsapp.com/message/2NN3CZ4OZNBWF1?autoload=1&app_absent=0" className="social-button social-button--Whatsapp " aria-label="WhatsApp">
                <img src={logoWhatsApp} alt="" style={{ width: "25px", height: "25px", marginRight: "8px" }} />
            </a>

            <a href="https://www.instagram.com/studio3.14_barcelona/" className="social-button social-button--instagram " aria-label="Instagram">
                <img src={logoInstagram} alt="" style={{ width: "25px", height: "25px", marginRight: "8px" }} />
            </a>

            <a href="https://www.linkedin.com/company/102293003/admin/feed/posts/" className="social-button social-button--linkedin " aria-label="LinkedIn">
                <img src={logoLinkedIn} alt="" style={{ width: "25px", height: "25px", marginRight: "8px"}} />
            </a>

        </div>

    )
};












