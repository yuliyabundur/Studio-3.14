import React from 'react';
import price from '/workspaces/Studio-3.14/src/front/img/price.png';
import "../../styles/footer.css";


export const PriceList = () => {
    return (

        <div className="pages d-flex flex-column justify-content-center w-100 h-100">

            <div className="d-flex flex-column justify-content-center align-items-center">
                
            <img src={ price } style={{ width: "700px", height: "1000px", marginRight: "8px" }} />

            </div>
        </div>

    );
};