import React from "react";
import { FaHome } from 'react-icons/fa';
import Navbar from './Navbar';
import './styles.css';

function Home() {
  return (
    <>
    <Navbar />
    <div>
      
      <div className="container">
      
        <FaHome className="icon" />
        <h2 className="title">Inicio</h2>
        <p className="description">Bienvenido a nuestra plataforma. ¡Estamos encantados de tenerte aquí!</p>
      </div>
    </div>
    </>
    
    
  );
}

export default Home;
