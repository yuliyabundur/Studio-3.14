import React from "react";
import { CardTreatmentsAndPrices } from "./cards/CardTreatmentsAndPrices.jsx";
import { CardGalery } from "./cards/CardGalery.jsx";
import { CardOpinions } from "./cards/CardOpinions.jsx";




export const Principal = () => {
  return (

    <div className="principal text-center d-flex">

      <CardTreatmentsAndPrices className="col-lg-4 col-sm-12" />
      <CardGalery className="col-lg-4 col-sm-12" />
      <CardOpinions className="col-lg-4 col-sm-12" />

    </div>

  );
}; 