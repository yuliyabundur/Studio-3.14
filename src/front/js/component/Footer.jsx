import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";


export const Footer = () => {
	return (
		<footer className='footer text-dark mt-5 p-1 project-light'>
	  <div className='container'>
		<ul>
			<li><a href="#">Contact Us</a></li>
			<li><a href="#">Privacy & cookies</a></li>
			<li><a href="#">Terms of use</a></li>
			<li><a href="#">Trademarks</a></li>
			<li><a href="#">FAQ</a></li>
			<li><a href="#">About Us</a></li>
			<li><a href="#">&copy; Studio 3.14 2024</a></li>
		</ul>
	  </div>
	</footer>
	);
}