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
              className="px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-200 transition"
            >
              Anterior
            </button>
          )}
          {step < steps.length - 1 ? (
            <button 
              onClick={() => setStep(step + 1)} 
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition"
            >
              Siguiente
            </button>
          ) : (
            <button 
              onClick={onFinish} 
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition"
            >
              Finalizar
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Onboarding;
