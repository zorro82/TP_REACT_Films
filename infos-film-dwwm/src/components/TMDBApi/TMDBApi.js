//*** fichier TMDBApi.js ***
const API_TOKEN = process.env.REACT_APP_TMDB_API_KEY; // Accéder à la clé API depuis les variables d'environnement
// import { TMDB_API_KEY } from '../Config/config'; // Importer la clé API depuis le fichier de configuration

// Déclaration de la fonction qui permet de récupérer les films correspondant à un texte de recherche et un numéro de page
export default function getFilmsFromTMdbWithText(text, page) {
    // Construction de l'URL pour l'appel à l'API TMDB avec les paramètres "text" (titre recherché) et "page" (numéro de page des résultats)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`;


    // Retourne une promesse qui fait une requête à l'API via fetch
    return fetch(url)
        .then((response) => response.json()) // Transforme la réponse en JSON
        .catch((error) => console.log(error)); // Gère les erreurs et affiche l'erreur dans la console
}
