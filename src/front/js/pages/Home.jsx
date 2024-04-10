import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx";
import laserImageUrl from "../../img/laser.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			
			<div className="container">

				<Jumbotron />

				<h1>Studio 3.15</h1>

				<p>
					<img src={laserImageUrl}/>
				</p>

			</div>
		</>
	);
};
