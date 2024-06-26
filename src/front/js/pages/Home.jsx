import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Jumbotron } from "../component/Jumbotron.jsx";
import { Principal } from "../component/Principal/Principal.jsx";
import { OurTeam } from "../component/OurTeam.jsx";
//import laserImageUrl from "../../img/laser.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			
			<div className="container-fluid">

				{/* <Jumbotron /> */}

				<Principal />

				<OurTeam />

			</div>
		</>
	);
};
