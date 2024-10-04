// // List.js
// import React from 'react'; 
import React, { useState, useEffect } from 'react'; // Importation du hook useEffect depuis React
import { useParams } from 'react-router-dom'; // Importation du hook useParams pour accéder aux paramètres de l'URL
import './List.css'; // Importation du fichier CSS pour styliser le composant List
import Film from '../Film/Film'; // Importation du composant Film pour afficher chaque film
import getFilmsFromTMdbWithText from '../TMDBApi/TMDBApi'; // Importation de la fonction pour interagir avec l'API TMDB

function List() {
  // const { data } = useParams(); // Récupération du paramètre "data" de l'URL via useParams, qui contient le texte de recherche

  // // Utilisation de useEffect pour déclencher une action chaque fois que "data" change
  // useEffect(() => {
  //   if (data) {
  //     getFilmsFromTMdbWithText(data, 1) // Appel de la fonction pour récupérer les films
  //       .then((response) => {
  //         console.log(response.results); // Afficher les résultats dans la console pour vérifier
  //       })
  //       .catch((error) => console.log(error)); // Gérer les erreurs
  //   }
  // }, [data]); // Déclencher l'effet à chaque changement de "data"

  

  // const films = [
  //   { poster: "../images/dwwm_1.png", abstract: "Résumé du premier film" },
  //   { poster: "../images/dwwm_1.png", abstract: "Résumé du deuxième film" },
  //   { poster: "../images/dwwm_1.png", abstract: "Résumé du troisième film" },
  // ];

  const [films, setFilms] = useState([]);

  // const {search} = useParams();

  const { data } = useParams(); // Récupération du paramètre "data" de l'URL

  useEffect(() => {
    if (data) {
      getFilmsFromTMdbWithText(data, 1)
        .then((response) => {
          if (response && response.results) {
            setFilms(response.results); // Mettre à jour l'état "films" avec les résultats
          }
        })
        .catch((error) => console.log(error)); // Gérer les erreurs
    }
  }, [data]); // Déclencher l'effet à chaque changement de "data"
  

  // useEffect(() => {
  //   getFilmsFromTMdbWithText(data, 1)
  //   .then(data => {setFilms(response.results)})
  //   // .then(data => {console.log(data.results)})
  // })

  return (
    <div className="container">
      <h2>Liste des films</h2>
      <br />
      {/* <p>{search}</p> */}
      {/* <p>{search.data}</p> data correspond au paramètre de la route */}
      {films.length > 0 ? (
         films.map((film) => (
            <Film 
            key={film.id} // Utiliser l'ID du film comme clé unique
            poster={film.poster_path} // Passer "poster_path" comme prop au composant Film
            abstract={film.overview} // Utiliser "overview" pour le résumé du film
            // <Film poster={film.poster} abstract={film.abstract} />
            />
          ))
        /* {films.map((film, index) => (
          <Film
            key={index} // Utiliser l'index comme clé temporaire (mieux vaut un ID unique si possible)
            poster={`https://image.tmdb.org/t/p/w300${film.poster}`} // URL complète du poster
            abstract={film.abstract} // Résumé du film
          />
        ))} */
      ) : (
        <p>Aucun film trouvé pour la recherche : "{data}"</p> // Message si aucun film n'est trouvé
      )}
    </div>
  );
}

export default List;








// import React, { useState, useEffect } from 'react'; // Importation des hooks useState et useEffect depuis React
// import { useParams } from 'react-router-dom'; // Importation du hook useParams pour accéder aux paramètres de l'URL
// import './List.css'; // Importation du fichier CSS pour styliser le composant List
// import Film from '../Film/Film'; // Importation du composant Film pour afficher chaque film
// import getFilmsFromTMdbWithText from '../TMDBApi/TMDBApi'; // Importation de la fonction pour interagir avec l'API TMDB

// function List() {

//   // Déclaration du composant List
//   // const [films, setFilms] = useState([]); // Déclaration d'un état local "films" avec useState pour stocker la liste des films, initialisé comme un tableau vide
//   const { data } = useParams(); // Récupération du paramètre "data" de l'URL via useParams, qui contient le texte de recherche

//   // Utilisation de useEffect pour déclencher une action chaque fois que "data" change
//   // useEffect(() => {
//   //   if (data) {
//   //     // Si "data" n'est pas null ou vide
//   //     getFilmsFromTMdbWithText(data, 1) // Appel de la fonction pour récupérer les films depuis TMDB avec le texte de recherche et la page 1
//   //       .then((response) => {
//   //         // Une fois la promesse résolue
//   //         if (response && response.results) {
//   //           // Si la réponse contient des résultats
//   //           setFilms(response.results); // Mettre à jour l'état "films" avec les résultats retournés par l'API
//   //         }
//   //       })
//   //       .catch((error) => console.log(error)); // Gestion des erreurs de requête en affichant une erreur dans la console
//   //   }
//   // }, [data]); // Le hook useEffect est ré-exécuté à chaque changement de la variable "data"

  

//   const films = [
//     { poster: "../images/dwwm_1.png", 
//       abstract: "Résumé du premier film" 
//     }, 
//     { poster: "../images/dwwm_1.png", 
//       abstract: "Résumé du duxième film" 
//     }, 
//     { poster: "../images/dwwm_1.png", 
//       abstract: "Résumé du troisième film" 
//     },
//   ]

//   // const { search } = useParams();

//   // useEffect(() => { + getFilmsFromTMdbWithText(data, 1)
//   //   .then(data => {console.log(data.results)})
//   // })

//   useEffect(() => {
//     if (data) {
//       getFilmsFromTMdbWithText(data, 1) // Appel de la fonction pour récupérer les films
//         .then((response) => {
//           console.log(response.results); // Afficher les résultats dans la console pour vérifier
//         })
//         .catch((error) => console.log(error)); // Gérer les erreurs
//     }
//   }, [data]); // Déclencher l'effet à chaque changement de "data"

//   // Liste statique de films
//   // const movies = [
//   //   { title: "Titanic", year: 1997, director: "James Cameron" },
//   //   { title: "Avatar", year: 2009, director: "James Cameron" },
//   //   { title: "Inception", year: 2010, director: "Christopher Nolan" },
//   //   { title: "The Matrix", year: 1999, director: "Lana Wachowski, Lilly Wachowski" },
//   //   { title: "Interstellar", year: 2014, director: "Christopher Nolan" }
//   // ];

//   // Récupérer le paramètre "data" de l'URL
//   // const { data } = useParams();

//   // Filtrer les films pour trouver ceux qui correspondent au paramètre "data"
//   // const filteredMovies = movies.filter((movie) =>
//   //   movie.title.toLowerCase().includes(data?.toLowerCase())
//   // );



//   return (
//     <div className="container">
//       {/* Conteneur principal pour le composant List */}
//       <h2>Liste des films</h2> {/* Titre de la section de la liste des films */}
//       {films.map((film) => {
//         // Itération sur le tableau de films pour créer un composant "Film" pour chaque film
//         return (
//           <Film
//             key={film.id} // Chaque composant doit avoir une clé unique, ici "id" est utilisé comme identifiant unique
//             poster={`https://image.tmdb.org/t/p/w300${film.poster_path}`} // Construction de l'URL complète du poster en ajoutant "poster_path" à l'URL de base
//             abstract={film.overview} // Utilisation de la propriété "overview" pour afficher le résumé du film
//           />
//         );
//       })}
//       {/* <p>{search.data}</p> data correspond au paramètre de la route */}
//       {/* {filteredMovies.length > 0 ? (
//         <ul>
//           {filteredMovies.map((movie, index) => (
//             <li key={index}>
//               <h3>{movie.title}</h3>
//               <p>Année : {movie.year}</p>
//               <p>Réalisateur : {movie.director}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         // <p>{data ? data : "Aucune recherche effectuée"}</p> {/*Gérer le cas où "data" est vide */}
//       {/* <p>Aucun film trouvé pour la recherche : "{data}"</p> */}
//       {/* )} */}
//     </div>
//   );
// }
// export default List; // Exportation du composant List pour l'utiliser ailleurs dans l'application