import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">TaytaHotels.com</a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/"><a className="nav-item nav-link active"> Home </a></Link>
                    
                    <Link to="/Hotels"><a className="nav-item nav-link">Hotels</a></Link>
                    <Link to="/Login"> <a className="nav-item nav-link" >Login</a></Link>
                   
                </div>
            </div>
        </nav>
    );
}
export default Header;