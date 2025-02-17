import React, { useState } from "react";
import { FaCog } from 'react-icons/fa';
import Navbar from './Navbar';
import './styles.css';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [notifications, setNotifications] = useState(true);

  const handleDarkModeToggle = () => setDarkMode(!darkMode);
  const handleFontSizeChange = (e) => setFontSize(e.target.value);
  const handleNotificationsToggle = () => setNotifications(!notifications);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar />
      <div className="container">
        <FaCog className="icon" />
        <h2 className="title">Configuración</h2>
        <p className="description">Personaliza tu experiencia en la plataforma.</p>
        <div className="settings-option">
          <label className="settings-label">
            Modo oscuro
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={handleDarkModeToggle} 
              className="settings-input" 
            />
          </label>
        </div>
        <div className="settings-option">
          <label className="settings-label">
            Tamaño de fuente
            <select 
              value={fontSize} 
              onChange={handleFontSizeChange} 
              className="settings-input"
            >
              <option value="small">Pequeño</option>
              <option value="medium">Mediano</option>
              <option value="large">Grande</option>
            </select>
          </label>
        </div>
        <div className="settings-option">
          <label className="settings-label">
            Notificaciones
            <input 
              type="checkbox" 
              checked={notifications} 
              onChange={handleNotificationsToggle} 
              className="settings-input" 
            />
          </label>
        </div>
        <div className="settings-option">
          <label className="settings-label">
            Foto de Perfil
            <input 
              type="file" 
              className="settings-input" 
            />
          </label>
        </div>
        <div className="settings-option">
          <label className="settings-label">
            Integración con Redes Sociales
            <input 
              type="checkbox" 
              className="settings-input" 
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;
