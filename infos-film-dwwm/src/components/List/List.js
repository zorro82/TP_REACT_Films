// // List.js
// import React from 'react'; 
import React, { useState, useEffect } from 'react'; // Importation du hook useEffect depuis React
import { useParams } from 'react-router-dom'; // Importation du hook useParams pour accéder aux paramètres de l'URL
import './List.css'; // Importation du fichier CSS pour styliser le composant List
import Film from '../Film/Film'; // Importation du composant Film pour afficher chaque film
import getFilmsFromTMdbWithText from '../TMDBApi/TMDBApi'; // Importation de la fonction pour interagir avec l'API TMDB
import Modal from '../Modal/Modal'; // Nouveau composant pour la fenêtre modale

function List() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null); // État pour le film sélectionné
  const { data } = useParams(); // Récupération du paramètre "data" de l'URL

  useEffect(() => {
    if (data) {
      getFilmsFromTMdbWithText(data, 1)
        .then((response) => {
          if (response && response.results) {
            setFilms(response.results.slice(0, 9)); // Limiter à 9 films pour afficher une grille 3x3
          }
        })
        .catch((error) => console.log(error)); // Gérer les erreurs
    }
  }, [data]); // Déclencher l'effet à chaque changement de "data"

  // Fonction pour ouvrir la modale
  const openModal = (film) => {
    setSelectedFilm(film);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedFilm(null);
  };

  return (
    <>
    {/* <div className="list-page"> */}
      <h2 className="list-h2">Résultats de recherche pour : "{data}"</h2>
        <p className="film-count">{films.length} films trouvés</p>
        {/* <div className="container"> */}
        {/* <h1>Liste des films</h1> */}
        <br />
        <div className="grid-container">
        {films.length > 0 ? (
          films.map((film) => (
            <div key={film.id} /*Utiliser l'ID du film comme clé unique*/ 
            onClick={() => openModal(film)}>
              <Film
                poster={film.poster_path} /*Passer "poster_path" comme prop au composant Film*/
                abstract={film.overview} /*Utiliser "overview" pour le résumé du film*/
              />
          </div>
          ))
        ) : (
          <p className="no-results">Aucun film trouvé pour la recherche : "{data}"</p> // Message si aucun film n'est trouvé
        )}
      </div>

      {selectedFilm && (
        <Modal film={selectedFilm} closeModal={closeModal} />
      )}
    </>
  );
}

export default List;