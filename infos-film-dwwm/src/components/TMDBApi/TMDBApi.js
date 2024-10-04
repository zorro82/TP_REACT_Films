//*** fichier TMDBApi.js ***
const API_TOKEN = "votre_API_Key_TMDB"; // Déclaration de la constante API_TOKEN contenant la clé d'API de TMDB

// Déclaration de la fonction qui permet de récupérer les films correspondant à un texte de recherche et un numéro de page
export default function getFilmsFromTMdbWithText(text, page) {
    // Construction de l'URL pour l'appel à l'API TMDB avec les paramètres "text" (titre recherché) et "page" (numéro de page des résultats)
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
        "&language=fr&query=" + text + '&page=' + page;

    // Retourne une promesse qui fait une requête à l'API via fetch
    return fetch(url)
        .then((response) => response.json()) // Transforme la réponse en JSON
        .catch((error) => console.log(error)); // Gère les erreurs et affiche l'erreur dans la console
}
