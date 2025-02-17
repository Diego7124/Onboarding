import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRobot, FaCog } from 'react-icons/fa';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
       
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            <FaHome />
            Inicio
          </Link>
          <Link to="/chatbot" className="navbar-link">
            <FaRobot />
            Chatbot
          </Link>
          <Link to="/settings" className="navbar-link">
            <FaCog />
            Configuración
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
