//*** fichier Film.js ***
import React from 'react';
import './Film.css';

function Film({abstract, poster}) {

  const posterUrl = poster
  ? `https://image.tmdb.org/t/p/w300${poster}`
  : "https://via.placeholder.com/300x450?text=No+Image+Available";

  const filmAbstract = abstract || "Description non disponible."; // Valeur par défaut si le texte est vide

  return (
    <div className="film">
       <img 
        src={posterUrl}
        alt="Poster du film"
        //  src={`https://image.tmdb.org/t/p/w300${poster}`} // Construction de l'URL complète de l'image
        //  alt="Poster du film" // Texte alternatif
         />
      <p className="film-abstract">{abstract}</p>
      {/* <p>{abstract}</p> Affichage du résumé du film   */}
    </div>
  );
}

export default Film;