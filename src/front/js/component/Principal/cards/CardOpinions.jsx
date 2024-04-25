import React from "react";
import { Link } from "react-router-dom";


export const CardOpinions = () => {

    return (
        
            <div className="card card-opinion" style={{ marginRight: "25px", marginBottom: "5px" }}>
                <div className="card-header" style={{ width: "100%" }}>Opinions</div>
                <Link to="/opinions" >
                    <img src="https://www.pngall.com/wp-content/uploads/9/Google-Review-PNG-Image.png"
                        style={{ maxWidth: "15rem"}}/>
                </Link>
            </div>
       
    );
};