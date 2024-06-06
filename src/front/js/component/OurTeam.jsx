import React from "react";
import { Link } from "react-router-dom";
import anastasiyaImg from "/workspaces/Studio-3.14/src/front/img/anastasiya.jpg"; 
import kiraImg from "/workspaces/Studio-3.14/src/front/img/kira-kos.png"; 
import ilona from "/workspaces/Studio-3.14/src/front/img/ilona.png"; 
import hanna from "/workspaces/Studio-3.14/src/front/img/hanna.png"; 

export const OurTeam = () => {
  return (
  
    <div className="container-fluid">
  <div className="row container-fluid principal text-center d-flex">
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src= {anastasiyaImg} />
        </div>
        <div className="team-content">
          <h3 className="name">Anastasiya Kazantsava</h3>
          <h4 className="title">MICROBLADING & LASER MASTER</h4>
        </div>
      </div>
    </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src= {ilona} />
        </div>
        <div className="team-content">
          <h3 className="name">Ilona Zaretski</h3>
          <h4 className="title">LASHES MASTER</h4>
        </div>  
      </div>
    </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src= {hanna} />
        </div>
        <div className="team-content">
          <h3 className="name">Hanna</h3>
          <h4 className="title">NAIL MASTER</h4>
        </div>
      </div>
    </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={ kiraImg }/>
        </div>
        <div className="team-content">
          <h3 className="name">Kira Kos</h3>
          <h4 className="title">MAKEUP & HAIRSTYLE</h4>
        </div>
      </div>
    </div>

  </div>
</div>

  );
};



