// Home.js
import React from 'react';
import { useState } from 'react';
import './Home.css';
// import '../Layout/Layout'
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
      {/* <button
        className="btn btn-primary mt-1"
        onClick={toggleAnimation}
      >
        Cliquer AFPA
      </button> */}
      <a
          className="App-link"
          href="https://www.afpa.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Info AFPA
      </a>
    </div>
  );
}

export default Home;