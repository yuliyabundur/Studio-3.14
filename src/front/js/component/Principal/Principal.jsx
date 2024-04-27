import React from "react";
import { CardTreatmentsAndPrices } from "./cards/CardTreatmentsAndPrices.jsx";
import { CardGalery } from "./cards/CardGalery.jsx";
import { CardOpinions } from "./cards/CardOpinions.jsx";




export const Principal = () => {
  return (

    <div className="container-fluid principal text-center d-flex">

      <CardTreatmentsAndPrices className="col-sm-12" />
      <CardGalery className="col-sm-12" />
      <CardOpinions className="col-sm-12" />

    </div>

  );
}; 