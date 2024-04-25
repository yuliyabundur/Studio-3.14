import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";


export const Footer = () => {
	return (
		<footer className='footer d-flex justify-content-end' >
	  <div className='' style={{ marginRight: "2px", marginTop: "18px" }}>
		<ul className=''>
			<a href="#" style={{ color: "#333333" }}>Contact Us</a>
			<a href="#" style={{ color: "#333333"  }}>Privacy & cookies</a>
			<a href="#" style={{ color: "#333333"  }}>Terms of use</a>
			<a href="#" style={{ color: "#333333"  }}>Trademarks</a>
			<a href="#" style={{ color: "#333333"  }}>FAQ</a>
			<a href="#" style={{ color: "#333333"  }}>About Us</a>
			<a href="#" style={{ color: "#333333"  }}>&copy; Studio 3.14 2024</a>
		</ul>
	  </div>
	</footer>
	);
}