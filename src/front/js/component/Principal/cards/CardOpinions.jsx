import React from "react";
import { Link } from "react-router-dom";
import opinionsImg from "/workspaces/Studio-3.14/src/front/img/opinions-card2.png";


export const CardOpinions = () => {

    return (
        
            <div className="card card-opinion container-fluid" style={{ }}>
                <div className="card-header" style={{ color: "#333333", width: "100%" }}>Opinions</div>
                <Link to="/opinions" >
                    <img src={ opinionsImg }
                        className="text-center img-principal" style={{ }}/>
                </Link>
            </div>
       
    );
};