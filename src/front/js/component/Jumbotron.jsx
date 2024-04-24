import React, { useState } from 'react';
import laserImageUrl from "../../img/jumbotron-image.png";


export const Jumbotron = () => {

    return (

        <div className="col-lg-12 col-sm-12">

            <img src={laserImageUrl} alt="Jumbotron background" className="img-jumbotron" style={{ width: "100%" }} />

        </div>

    );
};