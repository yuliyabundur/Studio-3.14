import React from "react";
import img1 from "/workspaces/Studio-3.14/src/front/img/img-gallery-1.png";
import img2 from "/workspaces/Studio-3.14/src/front/img/img-gallery-2.png";
import img3 from "/workspaces/Studio-3.14/src/front/img/img-gallery-3.png";
import img4 from "/workspaces/Studio-3.14/src/front/img/img-gallery-4.png";
import img5 from "/workspaces/Studio-3.14/src/front/img/img-gallery-5.png";
import img6 from "/workspaces/Studio-3.14/src/front/img/img-gallery-6.png";
import img7 from "/workspaces/Studio-3.14/src/front/img/img-gallery-7.png";
import img8 from "/workspaces/Studio-3.14/src/front/img/img-gallery-8.png";
import img9 from "/workspaces/Studio-3.14/src/front/img/img-gallery-9.png";
import img10 from "/workspaces/Studio-3.14/src/front/img/img-gallery-10.png";
import img11 from "/workspaces/Studio-3.14/src/front/img/img-gallery-11.png";
import img12 from "/workspaces/Studio-3.14/src/front/img/img-gallery-12.png";
import img13 from "/workspaces/Studio-3.14/src/front/img/img-gallery-13.png";
import img14 from "/workspaces/Studio-3.14/src/front/img/img-gallery-14.png";
import img15 from "/workspaces/Studio-3.14/src/front/img/img-gallery-15.png";
import img16 from "/workspaces/Studio-3.14/src/front/img/img-gallery-16.png";
import img17 from "/workspaces/Studio-3.14/src/front/img/img-gallery-17.png";
import img18 from "/workspaces/Studio-3.14/src/front/img/img-gallery-18.png";
import img19 from "/workspaces/Studio-3.14/src/front/img/img-gallery-19.png";
import img20 from "/workspaces/Studio-3.14/src/front/img/img-gallery-20.png";
import img21 from "/workspaces/Studio-3.14/src/front/img/img-gallery-21.png";
import img22 from "/workspaces/Studio-3.14/src/front/img/img-gallery-22.png";


export const GaleryComponent = () => {
    return (
        <div className="pages d-flex flex-column justify-content-center w-100 h-100" style={{ marginTop: '20px', padding: '60px' }}>


            <div className="d-flex flex-column justify-content-center align-items-center" >

                <div id="gallery" className="container-fluid" style={{ marginBottom: '30px', padding: '20px' }}>
                    <img src={img13} className="card img-responsive" style={{ marginTop: '0'}}/>
                    <img src={img4} className="card img-responsive" />
                    <img src={img1} className="card img-responsive" />
                    <img src={img14} className="card img-responsive" />
                    <img src={img3} className="card img-responsive" />
                    <img src={img5} className="card img-responsive" />
                    <img src={img7} className="card img-responsive" />
                    <img src={img8} className="card img-responsive" />
                    <img src={img20} className="card img-responsive" />
                    <img src={img10} className="card img-responsive" />
                    <img src={img11} className="card img-responsive" />
                    <img src={img6} className="card img-responsive" />
                    <img src={img2} className="card img-responsive" />
                    <img src={img15} className="card img-responsive" />
                    <img src={img22} className="card img-responsive" />
                    <img src={img16} className="card img-responsive" />
                    <img src={img17} className="card img-responsive" />
                    <img src={img19} className="card img-responsive" />
                    <img src={img9} className="card img-responsive" />
                    <img src={img21} className="card img-responsive" />
                    <img src={img1} className="card img-responsive" />
                    <img src={img18} className="card img-responsive" />
                    <img src={img12} className="card img-responsive"  />
                    

                </div>

                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">

                        {/* Modal content */}
                        <div className="modal-content">
                            <div className="modal-body">
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};