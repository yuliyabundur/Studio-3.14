import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { SocialNetwork } from './SocialNetwork.jsx';


export const Footer = () => {
	return (
		<footer className="container-fluid footer" style={{ background: "#f1f1f1" }} >

	  <div className="" style={{  marginTop: "20px" }}>
		
		<ul className=" footer-ul " style={{ }}>
			<a href="#" style={{ color: "#333333" }}>Contact Us</a>
			<a href="#" style={{ color: "#333333"  }}>Privacy & cookies</a>
			<a href="#" style={{ color: "#333333"  }}>About Us</a>
			<a href="#" style={{ color: "#333333"  }}>&copy; Studio 3.14 2024</a>
		</ul>
	  </div>

	</footer>
	);
}