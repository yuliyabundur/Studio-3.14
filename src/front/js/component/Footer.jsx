import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";


export const Footer = () => {
	return (
		<footer className='footer d-flex justify-content-end'>
	  <div className='' style={{ marginRight: "2px", marginTop: "18px" }}>
		<ul>
			<a href="#">Contact Us</a>
			<a href="#">Privacy & cookies</a>
			<a href="#">Terms of use</a>
			<a href="#">Trademarks</a>
			<a href="#">FAQ</a>
			<a href="#">About Us</a>
			<a href="#">&copy; Studio 3.14 2024</a>
		</ul>
	  </div>
	</footer>
	);
}