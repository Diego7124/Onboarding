import React from "react";
import { FaCog } from 'react-icons/fa';
import Navbar from './Navbar';
import './styles.css';

function Settings() {
  return (
    <div>
       <Navbar />
      <div className="container">
     
        <FaCog className="icon" />
        <h2 className="title">Configuración</h2>
        <p className="description">Personaliza tu experiencia en la plataforma.</p>
      </div>
    </div>
  );
}

export default Settings;
