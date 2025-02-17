import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRobot, FaCog, FaUserCircle, FaBell, FaSearch } from 'react-icons/fa';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FaUserCircle className="logo-icon" />
          <span className="navbar-title">Mi Plataforma</span>
        </div>
        <div className="navbar-search">
          <FaSearch className="search-icon" />
          <input type="text" className="search-input" placeholder="Buscar..." />
        </div>
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
        <div className="navbar-icons">
          <FaBell className="navbar-icon" />
          <div className="navbar-user">
            <FaUserCircle className="user-icon" />
            <div className="user-menu">
              <Link to="/profile" className="user-menu-item">Perfil</Link>
              <Link to="/settings" className="user-menu-item">Configuración</Link>
              <Link to="/logout" className="user-menu-item">Cerrar Sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
