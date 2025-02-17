import React from "react";
import { FaRobot } from 'react-icons/fa';
import Navbar from './Navbar';
import './styles.css';

function Chatbot() {
  return (
    <div>
       <Navbar />
      <div className="container">
     
        <FaRobot className="icon" />
        <h2 className="title">Chatbot</h2>
        <p className="description">Aquí podrás interactuar con un asistente virtual.</p>
      </div>
    </div>
  );
}

export default Chatbot;
