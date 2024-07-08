import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";


export const PriceList = () => {
  return (

    <div className="pages d-flex flex-column justify-content-center w-100 h-100">


        <div className=" section-padding" id="portfolio">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-12 text-center">
                    <div className="section-title">
                        <h2>Price List</h2>
                        <hr/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="portfolio-tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#hair">Laser</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#makeup">Lashes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#massage">Permanent</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#nail">Nail</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#waxing">Make Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#facial">Facial</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="hair" className="tab-pane">
                            <ul>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                    <a href="#"><h4>Massage <span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                    <a href="#"><h4>Massage Lavender <span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                            </ul>
                        </div>
                        <div id="makeup" className="tab-pane">
                            <ul>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                    <a href="#"><h4>Massage Stone<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                    <a href="#"><h4>Massage Relax<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="http://nayrathemes.com/demo/html/hantus/assets/img/portfolio/portfolio04.png" alt=""/>
                                    <a href="#"><h4>Massage Water<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                            </ul>
                        </div>
                        <div id="massage" className="tab-pane fade-in active">
                            <ul>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                    <a href="#"><h4>Massage <span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage Stone <span className="price">$28.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage Stone & Steam <span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage relax <span className="price">$34.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                     <a href="#"><h4>Massage Lavender <span className="price">$35.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage & Hot water <span className="price">$8.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                     <a href="#"><h4>Massage Full Body <span className="price">$40.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage Full Combo <span className="price">$102.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                            </ul>
                        </div>
                        <div id="nail" className="tab-pane">
                            <ul>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage Oil<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                     <a href="#"><h4>Massage <span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                            </ul>
                        </div>
                        <div id="waxing" className="tab-pane">
                            <ul>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage Candle<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                     <a href="#"><h4>Massage Pani<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                            </ul>
                        </div>
                        <div id="facial" className="tab-pane">
                            <ul>
                                <li>
                                    <img src="https://i.ibb.co/vVfFdRd/massage.png" alt=""/>
                                     <a href="#"><h4>Massage Stone<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                                <li>
                                    <img src="https://i.ibb.co/fH9r6B7/massage-stone.png" alt=""/>
                                     <a href="#"><h4>Massage Water<span className="price">$24.95</span></h4></a>
                                    <p>Oil, candle, stone, water,...</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    

    </div>

  );
};