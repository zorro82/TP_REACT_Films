// Home.js
import React from 'react';
import { useState } from 'react';
import './Home.css';
import logo2 from '../images/dwwm_1.png';

function Home() {
  const [animation, setAnimation] = useState(true);
  const toggleAnimation = () => {
    setAnimation(animation => !animation);
  };

  return (
    <div className="container text-center">
      <img
        src={logo2}
        className={`logo ${animation && "rotate"}`}
        alt="logo"
      />
      <h1>TP React Développeur Web et Web Mobile</h1>
      <p>Bienvenue sur la page d'accueil.</p>
      <button
        className="btn btn-primary mt-3"
        onClick={toggleAnimation}
      >
        Modifier l’animation
      </button>
    </div>
  );
}

export default Home;