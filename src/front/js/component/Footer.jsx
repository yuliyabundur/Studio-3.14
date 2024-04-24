import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";


export const Footer = () => {
	return (
		<footer className='footer d-flex justify-content-end' >
	  <div className='' style={{ marginRight: "2px", marginTop: "18px" }}>
		<ul>
			<a href="#" style={{ color: 'black' }}>Contact Us</a>
			<a href="#" style={{ color: 'black' }}>Privacy & cookies</a>
			<a href="#" style={{ color: 'black' }}>Terms of use</a>
			<a href="#" style={{ color: 'black' }}>Trademarks</a>
			<a href="#" style={{ color: 'black' }}>FAQ</a>
			<a href="#" style={{ color: 'black' }}>About Us</a>
			<a href="#" style={{ color: 'black' }}>&copy; Studio 3.14 2024</a>
		</ul>
	  </div>
	</footer>
	);
}