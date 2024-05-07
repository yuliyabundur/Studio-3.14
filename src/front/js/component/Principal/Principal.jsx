import React from "react";
import { CardTreatmentsAndPrices } from "./cards/CardTreatmentsAndPrices.jsx";
import { CardGalery } from "./cards/CardGalery.jsx";
import { CardOpinions } from "./cards/CardOpinions.jsx";




export const Principal = () => {
  return (

    <div className="row principal text-center container-fluid d-flex">

      <CardTreatmentsAndPrices className="" />
      <CardGalery className="" />
      <CardOpinions className="" />

    </div>

  );
}; 