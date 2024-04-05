import React, { useContext } from "react";
import { Context } from "../store/appContext";
import laserImageUrl from "../../img/laser.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">

			<h1>Studio 3.14</h1>

			<p>
				<img src={laserImageUrl}/>
			</p>
			
		</div>
	);
};
