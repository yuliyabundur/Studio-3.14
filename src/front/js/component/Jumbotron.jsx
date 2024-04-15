import React, { useState } from 'react';
import "../../styles/jumbotron.css";
import laserImageUrl from "../../img/jumbotron-image.png";


export const Jumbotron = () => {

    return (

        <div className="jumbotron-flex">

            <div className=" ">
                <p className="">
                    <img src={laserImageUrl} alt="Jumbotron background" className="img-jumbotron" style={{ width: "100%"}}/>
                </p>
            </div>

        </div>

    );
};