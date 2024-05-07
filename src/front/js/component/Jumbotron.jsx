import React, { useState } from 'react';
import laserImageUrl from "../../img/jumbotron-image.png";


export const Jumbotron = () => {

    return (

        <div className="row jumbotron text-center " style={{ }}>

            <img src={laserImageUrl} alt="Jumbotron background" className="img-jumbotron" style={{ padding: "0%" }} />

        </div>

    );
};