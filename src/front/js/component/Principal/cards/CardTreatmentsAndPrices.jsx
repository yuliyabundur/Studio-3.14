import React from "react";
import { Link } from "react-router-dom";



export const CardTreatmentsAndPrices = () => {

    return (
    
            <div className="card card-treatments container-fluid" style={{  }}>
                <div className="card-header" style={{ color: "#333333" }}>Treatments & Prices</div>
                <Link to="/treatments">
                    <img src="https://www.lastarspa.com/templates/yootheme/cache/treatments-prices-87d0742e.png"
                        className="text-center mt-1" style={{ maxWidth: "15rem" }} />
                </Link>
            </div>


      

    );
};