import React from "react";
import { CardTreatmentsAndPrices } from "./cards/CardTreatmentsAndPrices.jsx";
import { CardGalery } from "./cards/CardGalery.jsx";
import { CardOpinions } from "./cards/CardOpinions.jsx";




export const Principal = () => {
    return (
       
        <div className="container text-center mb-5 ps-0 pe-0" style={{ width: "81rem" }}>
        <div className="d-flex flex-wrap">
          <div className="flex-fill me-3"><CardTreatmentsAndPrices/> </div>
          <div className="flex-fill me-3"><CardGalery/> </div>
          <div className="flex-fill me-3"><CardOpinions/></div>
        </div>
      </div>
       
    );
}; 