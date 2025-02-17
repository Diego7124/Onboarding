import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import './styles.css';

const steps = [
  { title: "Bienvenido", description: "Descubre cómo usar nuestra plataforma." },
  { title: "Personaliza", description: "Configura tu experiencia a tu medida." },
  { title: "Finaliza", description: "Ya estás listo para comenzar." }
];

function Onboarding({ onFinish }) {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <Navbar />
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <h2 className="title">{steps[step].title}</h2>
        <p className="description">{steps[step].description}</p>
        <div className="flex justify-center space-x-4 w-full mt-6">
          {step > 0 && (
            <button 
              onClick={() => setStep(step - 1)} 
              className="previous"
            >
              Anterior
            </button>
          )}
          {step < steps.length - 1 ? (
            <button 
              onClick={() => setStep(step + 1)} 
              className="next"
            >
              Siguiente
            </button>
          ) : (
            <button 
              onClick={onFinish} 
              className="finish"
            >
              Finalizar
            </button>
          )}
        </div>
        <div className="video-tutorial">
          <h3 className="widget-title">Video Tutorial</h3>
          <video width="320" height="240" controls>
            <source src="tutorial.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </motion.div>
    </div>
  );
}

export default Onboarding;
