import React from "react";
import lashesImage from "/workspaces/Studio-3.14/src/front/img/lashes.png";
import permanentImage from "/workspaces/Studio-3.14/src/front/img/lips.jpg";
import depilationImage from "/workspaces/Studio-3.14/src/front/img/depilation.jpg";
import beautyImage from "/workspaces/Studio-3.14/src/front/img/beauty.jpg";
import { Link } from "react-router-dom";
//import { CardTreatmentsAndPrices } from "./cards/CardTreatmentsAndPrices.jsx";
//import { CardGalery } from "./cards/CardGalery.jsx";
//import { CardOpinions } from "./cards/CardOpinions.jsx";




export const Principal = () => {
  return (

    <section className="section">
      <div className="cards">
        <Link to="/permanente" className="card-principal card-1">
          <figure className="visual">
            <img
              className="card-img-principal"
              src={permanentImage}
              alt="Person with a game controller in hand"
            />
            <figcaption className="figcaption">Permanente</figcaption>
          </figure>
        </Link>
        <Link to="/laser" className="card-principal card-2">
          <figure className="visual">
            <img
              className="card-img-principal"
              src={depilationImage}
              alt="Person with curly hair in neon lighting"
            />
            <figcaption className="figcaption">Laser</figcaption>
          </figure>
        </Link>
        <Link to="/pestañas" className="card-principal card-3">
          <figure className="visual">
            <img
              className="card-img-principal"
              src={lashesImage}
              alt="Person in vibrant neon lighting with abstract shapes"
            />
            <figcaption className="figcaption">Pestañas</figcaption>
          </figure>
        </Link>
        <Link to="/uñas-y-maquillaje" className="card-principal card-4">
          <figure className="visual">
            <img
              className="card-img-principal"
              src={beautyImage}
              alt=""
            />
            <figcaption className="figcaption">Nails & MakeUp</figcaption>
          </figure>
        </Link>
      </div>
    </section>

  );
}; 