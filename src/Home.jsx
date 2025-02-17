import React from "react";
import { FaHome } from 'react-icons/fa';
import Navbar from './Navbar';
import './styles.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FaHome className="icon" />
        <h2 className="title">Inicio</h2>
        <p className="description">Bienvenido a nuestra plataforma. ¡Estamos encantados de tenerte aquí!</p>
        <div className="dashboard">
          <div className="widget">
            <h3 className="widget-title">Usuarios Activos</h3>
            <p className="widget-data">1,234</p>
          </div>
          <div className="widget">
            <h3 className="widget-title">Ventas Hoy</h3>
            <p className="widget-data">$5,678</p>
          </div>
          <div className="widget">
            <h3 className="widget-title">Tareas Pendientes</h3>
            <p className="widget-data">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
