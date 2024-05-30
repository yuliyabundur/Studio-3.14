import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext";

import { Home } from "./pages/Home.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Prices } from "./pages/Prices.jsx";
import { Services } from "./pages/Services.jsx";
import { Galery } from "./pages/Galery.jsx";
import { Cita } from "./pages/Cita.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { Laser } from "./pages/Laser.jsx";
import { Permanent } from "./pages/Permanent.jsx";
import { Lashes } from "./pages/Lashes.jsx";
import { NailsAndMakeUp } from "./pages/NailsAndMakeUp.jsx";



//import "../styles/navbar.css";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Prices />} path="/precios" />
                        <Route element={<Services />} path="/tratamientos" />
                        <Route element={<Galery />} path="/galeria" />
                        <Route element={<Cita />} path="/cita" />
                        <Route element={<ContactUs />} path="/contacto" />
                        <Route element={<AboutUs />} path="/sobre-nosotros" />
                        <Route element={<Laser />} path="/laser" />
                        <Route element={<Permanent />} path="/permanente" /> 
                        <Route element={<Lashes />} path="/pestañas" />
                        <Route element={<NailsAndMakeUp />} path="/uñas-y-maquillaje" /> 
                     
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
