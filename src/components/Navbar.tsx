import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="fix">
            <nav className="header navbar navbar-expand-lg">
                <Link className="navbar-brand logo" to="/">
                    HairVise
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="ml-auto collapse navbar-collapse navbar-light subdomain" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto interdomain">
                        <Link className="nav-item nav-link active element" to="/">
                            Home
                        </Link>
                        <Link  className="nav-item nav-link element" to="/">
                            Take A Quiz  
                        </Link>
                        <Link className="nav-item nav-link element" to="/">
                            Guide 
                        </Link>
                        <Link className="nav-item nav-link element" to="/">
                            Review 
                        </Link>
                        <Link className="nav-item nav-link element" to="/">
                            About
                        </Link>
                        <Link  className="nav-item nav-link element" to="/">
                            Services 
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
