import React, { useState } from "react";
import { FaRobot } from 'react-icons/fa';
import Navbar from './Navbar';
import './styles.css';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! ¿En qué puedo ayudarte hoy?" },
    { sender: "user", text: "¿Como puedo consultar mis tareas pendientes?" },
    { sender: "bot", text: "Para consultar tus tareas......" },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userMessage = e.target.elements.message.value;
    setMessages([...messages, { sender: "user", text: userMessage }]);
    e.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <FaRobot className="icon" />
        <h2 className="title">Chatbot</h2>
        <p className="description">Aquí podrás interactuar con un asistente virtual.</p>
        <div className="botseccion">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="message-form">
            <input type="text" name="message" placeholder="Escribe un mensaje..." className="message-input" />
            <button type="submit" className="send-button">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
