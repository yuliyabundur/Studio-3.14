import React from "react";
import { Link } from "react-router-dom";
import galeryImage from "/workspaces/Studio-3.14/src/front/img/galery-image.png";


export const CardGalery = () => {

    return (

        

            <div className="card card-galery container-fluid" style={{  }}>
                <div className="card-header" style={{ color: "#333333", width: "100%" }}>Galery</div>
                <Link to="/galery" >
                    <img src={galeryImage} className="card-img-overlay img-principal text-center mt-5" style={{  }}/>
                        
                </Link>
            </div>

        

    );
};