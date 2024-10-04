//*** fichier Film.js ***
import React from 'react';
import './Film.css';

function Film({abstract, poster}) {

  // const posterUrl = poster
  //   ? `https://image.tmdb.org/t/p/w300${poster}`
  //   : "https://via.placeholder.com/300x450?text=No+Image+Available"; // Image de remplacement si le poster est manquant

  return (
    <div className="film">
       <img 
        // src={posterUrl}
        // alt="Poster du film"
         src={`https://image.tmdb.org/t/p/w300${poster}`} // Construction de l'URL complète de l'image
         alt="Poster du film" // Texte alternatif
         />
      <p>{abstract}</p> {/* Affichage du résumé du film */}  
      {/* <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="poster du film" /> */}
     
    </div>
  );
}

export default Film;