import React from "react";
import { Link } from "react-router-dom";


export const CardGalery = () => {

    return (

        

            <div className="card card-galery" style={{ marginRight: "25px", marginBottom: "5px" }}>
                <div className="card-header" style={{ color: "#333333", width: "100%" }}>Galery</div>
                <Link to="/galery" >
                    <img src="https://static.vecteezy.com/system/resources/previews/008/879/468/non_2x/3d-minimal-social-media-with-video-and-photo-gallery-on-mobile-application-and-mobile-web-design-user-interface-optimization-for-banner-and-website-image-3d-render-on-pink-background-free-png.png"
                        style={{ maxWidth: "15rem" }} />
                </Link>
            </div>

        

    );
};