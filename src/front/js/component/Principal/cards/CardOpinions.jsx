import React from "react";
import { Link } from "react-router-dom";


export const CardOpinions = () => {

    return (
        <>
            <div className="card mb-3 main-light-blue-bg" >
                <div className="card-header">Opinions</div>
                <Link to="/opinions" >
                    <img src="https://p7.hiclipart.com/preview/875/636/58/laser-hair-removal-day-spa-skin-care-facial-hair.jpg"
                        style={ { maxWidth: "15rem" } } alt="opinions" />
                </Link>
            </div>
        </>
    );
};