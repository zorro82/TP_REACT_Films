//*** fichier Search.js *** 
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './Search.css';

function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); // Initialiser useNavigate

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le comportement par défaut de soumission de formulaire
    // Redirection vers la page List avec la valeur saisie comme paramètre
    if (search.trim() !== '') {
      navigate(`/List/${search}`); // Navigue vers /List/<valeur_saisie>
    }
  };

  return (
    // <div className="list-page">
      <div className="search">
        <p>Recherchez ici vos films préférés.</p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="idSearch">Votre recherche</label>
            <input
              id="idSearch"
              name="search"
              type="text"
              value={search}
              onChange={handleChange}
            />
          </fieldset>
          <input type="submit" value="Rechercher" />
        </form>
      </div>
  // </div>
  );
}

export default Search;