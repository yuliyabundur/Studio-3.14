import React, { useState } from 'react';
import laserImageUrl from "../../img/jumbotron-image.png";


export const Jumbotron = () => {

    return (

        <div className="jumbotron d-flex text-center" style={{  }}>

            <img src={laserImageUrl} alt="Jumbotron background" className="img-jumbotron col-lg-12 col-sm-12" style={{ }} />

        </div>

    );
};