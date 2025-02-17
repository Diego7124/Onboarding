import React from "react";
import { FaHome, FaCheckCircle, FaBell, FaEnvelope, FaFileAlt, FaUsers, FaCalendarAlt, FaChartLine, FaQuestionCircle, FaMapSigns } from 'react-icons/fa';
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
          <div className="widget">
            <h3 className="widget-title">Barra de Progreso</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget-title">Tour Interactivo</h3>
            <p className="widget-description"><FaMapSigns /> Sigue esta guía paso a paso para conocer las funcionalidades principales de la plataforma.</p>
          </div>
          <div className="widget">
            <h3 className="widget-title">Lista de Tareas</h3>
            <ul className="task-list">
              <li className="task-item"><FaCheckCircle /> Completar perfil</li>
              <li className="task-item"><FaBell /> Ver tutorial inicial</li>
              <li className="task-item"><FaEnvelope /> Configurar notificaciones</li>
              <li className="task-item"><FaEnvelope /> Revisar correo electrónico</li>
              <li className="task-item"><FaFileAlt /> Actualizar documento del proyecto</li>
              <li className="task-item"><FaUsers /> Reunión con el equipo</li>
              <li className="task-item"><FaCalendarAlt /> Planificar la próxima semana</li>
              <li className="task-item"><FaChartLine /> Preparar informe mensual</li>
            </ul>
          </div>
          <div className="widget">
            <h3 className="widget-title">Preguntas Frecuentes</h3>
            <p className="widget-description"><FaQuestionCircle /> Encuentra respuestas rápidas a las preguntas más comunes.</p>
            <ul className="faq-list">
              <li className="faq-item">¿Cómo cambio mi contraseña?</li>
              <li className="faq-item">¿Dónde encuentro los tutoriales?</li>
              <li className="faq-item">¿Cómo configuro las notificaciones?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
