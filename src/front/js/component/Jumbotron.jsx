import React, { useState } from 'react';
//import { Modal } from './jumbotronComponents/Modal.jsx';


export const Jumbotron = () => {
    
    return (

        <div className="jumbotron jumbotron-fluid px-2 py-5 mt-5" id='jumbotron-home'>
            <div className="container container-jumbotron-home py-3 px-4">
                <div className="p-3 rounded main-light-blue-bg-jumbotron-title">

                    <h1 className="card-title-jumbotron"><strong >Studio</strong> 3.14<strong> your</strong> beauty home</h1>
                </div>
                <div className="spacer"></div>
                <hr className="my-4"></hr>
            </div>
        </div>

    );
};