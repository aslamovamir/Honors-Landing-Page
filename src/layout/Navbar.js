import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from 'react-router-dom'
import SignedInLinks from "./SignedInLinks";
import logo_usf from './usf-logo.png';
import logo_honors from './honors-logo.jpg'


const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper nav-color">
                <div className="container">
                    <a href="https://www.usf.edu"><img src={logo_usf} alt="USF logo" className="logo-usf"/></a>
                    <a href="https://www.usf.edu" className="brand-logo left">University Of South Florida</a>
                    <SignedInLinks />
                </div>
            </nav>
            <div className="title-honors"><a href="https://www.usf.edu/honors/"><img src={logo_honors} alt="USF Honors logo" className="logo-honors"/></a>Judy Genshaft Honors College Portal</div>
            
        </div>
    )
}

export default Navbar;