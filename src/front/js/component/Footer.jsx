import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { SocialNetwork } from './SocialNetwork.jsx';
import { useState } from 'react';
import mainLogo from '/workspaces/Studio-3.14/src/front/img/logo.png';
import logoInstagram from '/workspaces/Studio-3.14/src/front/img/instagram-logo.png';
import logoLinkedIn from '/workspaces/Studio-3.14/src/front/img/linkedin-logo.png';
import logoWhatsApp from '/workspaces/Studio-3.14/src/front/img/whatsapp-logo.png';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';



export const Footer = () => {
	const [hover, setHover] = useState(false);

	const linkStyle = {

		textDecoration: 'none',  // elimina el subrayado
		color: hover ? '#56945e' : '#ffffff',  // color cuando se hace hover
		display: 'inline-block',
		marginLeft: '0px',
		width: '50%',
		marginBottom: '10px'

	};
	return (
		<footer className="footer">
			<div className="container">

				<div className="footer-cta pt-5 pb-5">

					<div class="row">

						<div class="col-xl-4 col-md-4 ">
							<div class="single-cta">
								<i class="fas fa-map-marker-alt"></i>
								<div class="cta-text">
									<h4>Find us</h4>
									<span> C/ del Rosselló, 349, Gràcia, 08037 Barcelona</span>
								</div>
							</div>
						</div>

						<div class="col-xl-4 col-md-4 ">
							<div class="single-cta">
								<i class="fas fa-phone"></i>
								<div class="cta-text">
									<h4>Call us</h4>
									<span>+34 610 480 632</span>
								</div>
							</div>
						</div>

						<div class="col-xl-4 col-md-4 ">
							<div class="single-cta">
								<i class="far fa-envelope-open"></i>
								<div class="cta-text">
									<h4>Mail us</h4>
									<span>beautystudiobcn@gmail.com
									</span>
								</div>
							</div>
						</div>

					</div>

				</div>


				<div className="container">
					

						<div class="col-xl-6 col-md-6">

							<div class="footer-widget">

								<div class="footer-logo">
									<Link to="/">
										<img src={mainLogo} alt="" style={{ width: "50%" }} />
									</Link>
								</div>

								<div class="footer-social-icon">
									<span>Follow us</span>
									<div className="social-icons-container" style={{}}>

										<a href="https://api.whatsapp.com/message/2NN3CZ4OZNBWF1?autoload=1&app_absent=0" className="social-button social-button--Whatsapp " aria-label="WhatsApp">
											<img src={logoWhatsApp} alt="" style={{ width: "25px", height: "25px", marginRight: "8px" }} />
										</a>

										<a href="https://www.instagram.com/studio3.14_barcelona/" className="social-button social-button--instagram " aria-label="Instagram">
											<img src={logoInstagram} alt="" style={{ width: "25px", height: "25px", marginRight: "8px" }} />
										</a>

										<a href="https://www.linkedin.com/company/102293003/admin/feed/posts/" className="social-button social-button--linkedin " aria-label="LinkedIn">
											<img src={logoLinkedIn} alt="" style={{ width: "25px", height: "25px", marginRight: "8px" }} />
										</a>

									</div>
								</div>

							</div>

						</div>

					
				</div>

			


			</div>

			<div className="footer-content">

				<div className="copyright-area">
					<div className="container">
						<div className="row">
							<div className="col-xl-4 col-md-4">



								<Link to="/contacto" className="footer-link" style={linkStyle}
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)} >
									Home
								</Link>

								<Link to="/contacto" className="footer-link" style={linkStyle}
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)} >
									Services
								</Link>

								<Link to="/galeria" className="footer-link" style={linkStyle}
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)} >
									Gallery
								</Link>

								<Link to="/sobre-nosotros" className="footer-link" style={linkStyle}
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)} >
									About Us
								</Link>


								<Link to="/contacto" className="footer-link" style={linkStyle}
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)} >
									Contact Us
								</Link>
								<Link to="/contacto" className="footer-link" style={linkStyle}
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)} >
									News
								</Link>



							</div>

						</div>
					</div>
				</div>
			</div>
		</footer>

	);
};