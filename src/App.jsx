import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import Settings from "./Settings";
import Home from "./Home";
import Onboarding from "./Onboarding";
import './styles.css';

function Navigation() {
  return (
<>
</>
  );
}

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <Router>
      <div >
        {showOnboarding ? (
          <Onboarding onFinish={() => setShowOnboarding(false)} />
        ) : (
          <div>
           
            <Routes>
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Home />} />
            </Routes>
            <Navigation />
          </div>
        )}
      </div>
    </Router>
  );
}
