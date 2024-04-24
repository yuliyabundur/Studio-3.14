import React from "react";
import { Link } from "react-router-dom";


export const CardGalery = () => {

    return (
        <>
            <div className="card mb-3 main-light-blue-bg" >
                <div className="card-header">Galery</div>
                <Link to="/galery" >
                    <img src="https://p7.hiclipart.com/preview/875/636/58/laser-hair-removal-day-spa-skin-care-facial-hair.jpg"
                        style={ { maxWidth: "15rem" } } alt="galery" />
                </Link>
            </div>
        </>
    );
};