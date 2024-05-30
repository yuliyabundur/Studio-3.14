import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { SocialNetwork } from './SocialNetwork.jsx';


export const Footer = () => {
	return (
		<footer className="container-fluid footer" style={{ background: "#f1f1f1" }} >

	  <div className="" style={{  marginTop: "20px" }}>
		
		<ul className=" footer-ul " style={{ }}>
			<Link to="/contacto" style={{ color: "#333333" }}>Contact Us</Link>
			<Link to="/" style={{ color: "#333333"  }}>Privacy & cookies</Link>
			<Link to="/sobre-nosotros" style={{ color: "#333333"  }}>About Us</Link>
			<Link to="/" style={{ color: "#333333"  }}>&copy; Studio 3.14 2024</Link>
		</ul>
	  </div>

	</footer>
	);
}